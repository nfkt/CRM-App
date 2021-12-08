const express = require('express');
const router = express.Router();
const courseEnquiryController = require('../Controller/courseenquiry.controller');

const tokenAuth = require('../Middlewares/user.middleware');

//CourseEnquiry
router.post('/', courseEnquiryController.addCourseEnquiry);
router.get('/', tokenAuth.managerAuthenticate, courseEnquiryController.findCourseEnquirys);
router.get('/:id', tokenAuth.managerAuthenticate,courseEnquiryController.findCourseEnquiryById);
router.put('/:id', tokenAuth.adminAuthenticate, courseEnquiryController.updateCourseEnquiry);
router.delete('/:id', tokenAuth.adminAuthenticate, courseEnquiryController.deleteById);


//Resourse

module.exports = router;
