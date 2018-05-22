var Groups = require('./Groups')

exports.CreateOne = function (req, res) {
	  Groups.create(req.body, function (err, response) {
	  	if (err) {
	  		return res.status(500).json(err.message);
	  	}
	  	res.status(201).json(response);
	  });
	};

	exports.RetrieveAll = function (req, res){
		Groups.find().find(function(err, data){
			if(err){
				return res.status(500).json(err.message)
			}else{
				res.status(201).json(data)
			}
		})
	};


