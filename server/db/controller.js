var Student = require('./Student');


exports.createOne = function (req, res) {

  var student = req.body;
  Student.create(student, function (err, response) {
    if (err) {
      return res.status(500).json(err.message);
    }
    res.status(201).json(response);
  });
 
};