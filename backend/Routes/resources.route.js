const express = require('express');
const resourceController = require('../Controller/resource.controller');
const tokenAuth = require('../Middlewares/user.middleware');
const router = express.Router();


router.post('/', tokenAuth.adminAuthenticate, resourceController.addResource); //whenever the post method is called it calls addgig from gig contoller
router.get('/', resourceController.findResources);  //similiarly 
router.get('/:id', resourceController.findResourceById);
router.put('/:id',  resourceController.updateResource);
router.delete('/:id', tokenAuth.adminAuthenticate, resourceController.deleteById);

module.exports = router;
