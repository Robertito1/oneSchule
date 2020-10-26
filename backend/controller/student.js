const studentRouter = require("express").Router();
const Student = require("../models/student");
const College = require("../models/college");



studentRouter.get("/", async(req,res) => {
  const students = await Student.find({})
  res.json(students)
})

// Post Request Used in development
studentRouter.post("/", async (request, response) => {
    body = request.body
    const college = await College.findById(body.college)
      const student = new Student({
        name: body.name,
        class: body.class,
        college: college._id,
        skills: body.skills,
    })
    try {
  const savedStudent = await student.save()
  college.students = college.students.concat(savedStudent._id)
  await college.save()
} catch (error) {
  console.log(error);
}
       
    
});

module.exports = studentRouter;