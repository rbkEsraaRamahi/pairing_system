var mongoose = require('mongoose')

var StudentSchema = new mongoose.Schema({
  StudentName: {
    type: String,
    unique: true
  },
  Level: {
    type: Number
  },
  WhoPairedWith: [],
  CohortNumber: Number,
  DUCK: {
    type: Boolean,
    default: false
  }
})

var Student = mongoose.model('Student', StudentSchema)

module.exports = Student
