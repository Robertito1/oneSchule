const collegeRouter = require("express").Router();
const College = require("../models/college");

// GHET Request for the Universities
collegeRouter.get("/", (req,res, next) => {
      College.find({}).populate('students', { name: 1, class: 1,skills:1 })
        .then((colleges) =>{
        res.json(colleges)
        })
        .catch((error) => next(error))
})

collegeRouter.get("/:id", (req,res, next) => {
  College.findById(req.params.id)
    .then((college) => {
      if (college) {
        res.json(college);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
});

//In my Implementation similar schools are those in the same city
collegeRouter.get("/:id/similar", (req,res, next) => {
  College.findById(req.params.id)
    .then((college) => {
      if (college) {
        College.
        find().
        where('city').equals(college.city).
        limit(5).
        select('name').
        then((colleges) =>{
          res.json(colleges);
        })
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
});

// POST Request Used in development
 collegeRouter.post("/", async (request, response) => {
    body = request.body
    console.log(request.body);
    const college = new College({
        name: body.name,
        established: body.established,
        city: body.city,
        state: body.state,
        country: body.country,
        courses: body.courses
    })
     try {
      const savedCollege = await college.save()
      response.json(savedCollege)
  } catch (error) {
    console.log(error);
  }
});

module.exports = collegeRouter;