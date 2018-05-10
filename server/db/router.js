var studentRouter = require('express').Router();
var studentController = require('./controller.js');


studentRouter.route('/').post(studentController.createOne)
studentRouter.route('/').get(studentController.retrieve)
studentRouter.route('/update').put(studentController.updateOne)




module.exports = studentRouter;