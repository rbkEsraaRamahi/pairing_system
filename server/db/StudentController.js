var Student = require('./Student')

exports.createOne = function (req, res) {
  req.body.StudentName = req.body.StudentName.toLowerCase()
  var student = req.body
  Student.create(student, function (err, response) {
    if (err) {
      return res.status(500).json(err.message)
    }
    res.status(201).json(response)
  })
}

exports.retrieve = function (req, res) {
  Student.find().find(function (err, data) {
    if (err) {
      return res.status(500).json(err.message)
    } else {
      res.status(201).json(data)
    }
  })
}

exports.updateOne = function (req, res) {
  var dd = req.body.student
  var stringdd = JSON.stringify(dd)
  var students = JSON.parse(stringdd)

  // var students = JSON.parse((req.body.student));
  // console.log(students)
  Student.find().find(function (err, data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].StudentName === students[0][0].StudentName && students) {
        data[i].WhoPairedWith.push('DUCK')
        Student.findOneAndUpdate({StudentName: students[0][0].StudentName}, {$set: {WhoPairedWith: data[i].WhoPairedWith, DUCK: true}}, function (err, data) {
          if (err) {
            res.status(500).json(err.message)
          } else {
            res.end(JSON.stringify(data))
          }
        })
      } else {
        for (var j = 1; j < students.length; j++) {
          if (data[i].StudentName === students[j][0].StudentName) {
            data[i].WhoPairedWith.push(students[j][1])
            Student.findOneAndUpdate({StudentName: students[j][0].StudentName}, {$set: {WhoPairedWith: data[i].WhoPairedWith}}, function (err, data) {
              if (err) {
                res.status(500).json(err.message)
              } else {
                res.end(JSON.stringify(data))
              }
            })
          }
          if (data[i].StudentName === students[j][1].StudentName) {
            data[i].WhoPairedWith.push(students[j][0])
            Student.findOneAndUpdate({StudentName: students[j][1].StudentName}, {$set: {WhoPairedWith: data[i].WhoPairedWith}}, function (err, data) {
              if (err) {
                res.status(500).json(err.message)
              } else {
                res.end(JSON.stringify(data))
              }
            })
          }
        }
      }
    }
  })
}
