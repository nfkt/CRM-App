const express = require('express');
const router = express.Router();
const courseController = require('../controller/course.controller');
const tokenAuth = require('../middlewares/user.middleware');

//Course
router.post('/', tokenAuth.adminAuthenticate, courseController.addCourse);
router.get('/',  courseController.findCourses);
router.get('/:id', courseController.findCourseById);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', tokenAuth.adminAuthenticate, courseController.deleteById);


//Resourse

module.exports = router;
