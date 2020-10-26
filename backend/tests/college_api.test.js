require("dotenv").config();
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../index");
const api = supertest(app);
const College = require("../models/college");

describe("when there is initially one university in db", () => {
    beforeEach(async () => {
      await College.deleteMany({}); 
      const data = {name:"Testing university of testers",
                    established: 2018,
                    city: "Silicon Valley",
                    State: "California",
                    country: "USA",
                    courses: ["Medicine", "Pharmarcy", "Optometry"]
    }
      const college = new College(data);
      await college.save();
    });
    test("making a get request returns all universities and a status 200", async () => {
        await api
          .get("/api/colleges")
          .expect(200)
          .expect("Content-Type", /application\/json/);
      });

})