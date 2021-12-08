const express = require('express');
const router = express.Router();
const resourceEnquiryController = require('../Controller/resourceenquiry.controller');
const tokenAuth = require('../Middlewares/user.middleware');

//ResourceEnquiry
router.post('/',  resourceEnquiryController.addResourceEnquiry);
router.get('/', tokenAuth.managerAuthenticate, resourceEnquiryController.findResourceEnquirys);
router.get('/:id', tokenAuth.managerAuthenticate, resourceEnquiryController.findResourceEnquiryById);
router.put('/:id', tokenAuth.adminAuthenticate, resourceEnquiryController.updateResourceEnquiry);
router.delete('/:id', tokenAuth.adminAuthenticate, resourceEnquiryController.deleteById);

module.exports = router;
