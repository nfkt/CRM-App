const express = require('express');
const router = express.Router();
const userRoutes = require('./users.route');
const courseRoutes = require('./courses.route');
const courseEnquiryRoutes = require('./courseenquiries.route');
const resourceRoutes = require('./resources.route');
const resourceEnquiryRoutes = require('./resourceenquiries.route');




router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
router.use('/resources', resourceRoutes);
router.use('/course-enquiries', courseEnquiryRoutes);
router.use('/resource-enquiries', resourceEnquiryRoutes);



module.exports = router;