require("dotenv").config();

const config = require("./utils/config");
const express = require("express")
const app = express()
const cors = require("cors")
const collegeRouter = require("./controller/college")
const studentRouter = require("./controller/student")
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");
const mongoose = require("mongoose");


const mongoUrl = config.MONGODB_URI;
mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });


app.use(cors());
app.use(express.static('build'))
app.use(express.json());
app.use(middleware.requestLogger);
app.use("/api/colleges", collegeRouter)
app.use("/api/students", studentRouter)
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});