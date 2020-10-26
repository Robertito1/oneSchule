const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  class: {
    type: Number,
    required: true,
    minlength: 4,
    maxlength: 4
  },
  college: {
    // A Refrence to the University a student attend
    type: mongoose.Schema.Types.ObjectId,
    ref: 'College'
  },
  skills:  [String]
});


studentSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Student", studentSchema);