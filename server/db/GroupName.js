var mongoose = require('mongoose');

var GroupNameSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  GroupSize: {
    type: Number,
  },
  CreatedAt: { type: Date, default: Date.now },
  Pairs: [[]],
  
});

var GroupName = mongoose.model('GroupName', GroupNameSchema);

module.exports = GroupName;
