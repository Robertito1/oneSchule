const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const collegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    unique:true
  },
  established: {
    type: Number,
    required: true,
    minlength: 4,
    maxlength: 4
  },
  city: {
    type: String,
    required: true,
    minlength: 2,
  },
  state: {
    type: String,
    required: true,
    minlength: 2,
  },
   country: {
    type: String,
    required: true,
    minlength: 2,
  },
  students: [
    {
      // Students of a university are stored in an array using their ids
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    }
  ],
  courses:{
    type: Array
  }
});

collegeSchema.plugin(uniqueValidator)

collegeSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("College", collegeSchema);