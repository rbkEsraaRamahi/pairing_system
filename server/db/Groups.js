var mongoose = require('mongoose')
// this groups created out of cohort and should also related to pairs
var GroupSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true
  },
  GroupSize: {
    type: Number
  },
  CreatedAt: { type: Date, default: Date.now },

  cohort: {
	  type: Number
  }

})

var Groups = mongoose.model('Groups', GroupSchema)

module.exports = Groups
