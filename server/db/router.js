var studentRouter = require('express').Router()
var studentController = require('./StudentController.js')
var groupNameController = require('./GroupNameController.js')

/// /////// Student Router //////////
studentRouter.route('/').post(studentController.createOne)
studentRouter.route('/').get(studentController.retrieve)
studentRouter.route('/update').put(studentController.updateOne)
/// /////// Student Router //////////

/// /////// GroupName Router //////////
studentRouter.route('/createGroupName').post(groupNameController.CreateOne)
studentRouter.route('/createGroupName/GetAll').get(groupNameController.RetrieveAll)
/// /////// GroupName Router //////////

module.exports = studentRouter
