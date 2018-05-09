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

exports.retrieve = function(req, res){
	Student.find().find(function(err, data){
		if(err){
			return res.status(500).json(err.message)
		}else{
			res.status(201).json(data)
		}
	})
};

exports.updateOne = function(req,res){
	var students = JSON.parse(req.body.student)
	Student.find().find(function(err,data){
		for (var i = 0; i < data.length; i++) {
			for (var j = 0; j < students.length; j++) {
				if(data[i].StudentName === students[j][0]){
					data[i].WhoPairedWith.push(students[j][1])
					Student.findOneAndUpdate({StudentName: students[j][0]}, {$set:{WhoPairedWith: data[i].WhoPairedWith}}, function(err,data){
						if (err){
							// res.status(500).json(err.message);
						}else{
							res.end(JSON.stringify(data))
						}
					})
				}if (data[i].StudentName === students[j][1]){
					data[i].WhoPairedWith.push(students[j][0])
					Student.findOneAndUpdate({StudentName: students[j][1]}, {$set:{WhoPairedWith: data[i].WhoPairedWith}}, function(err,data){
						if (err){
							// res.status(500).json(err.message);
						}else{
							res.end(JSON.stringify(data))
					}
					})
				}
					
			}
		}
	})
}


