var studentRouter = require('express').Router();
var studentController = require('./controller.js');


studentRouter.route('/')

  .post(studentController.createOne)


module.exports = studentRouter;