var GroupName = require('./GroupName')

exports.CreateOne = function (res, req) {
	console.log(req.body)
	var data = req.body
	var stringifyData = JSON.stringify(data)
	var groupName = JSON.parse(stringifyData)

	// req.body.title = req.body.title.toLowerCase()
	  // var groupName = JSON.parse(JSON.stringify(req.body));
	  console.log(groupName)
	  GroupName.create(groupName, function (err, response) {
	    if (err) {
	      return res.status(500).json(err.message);
	    }
	    res.status(201).json(response);
  	});
};

exports.RetrieveAll = function (res, req){
	GroupName.find().find(function(err, data){
		if(err){
			return res.status(500).json(err.message)
		}else{
			res.status(201).json(data)
		}
	})
};