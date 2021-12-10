const ResourceEnquiry = require('../models/resourceEnquiry');

var resourceEnquiryDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateResourceEnquiry: updateResourceEnquiry
}

function findAll() {
    return ResourceEnquiry.findAll();
}


function findById(id) {
    return ResourceEnquiry.findByPk(id);
}

function deleteById(id) {
    return ResourceEnquiry.destroy({ where: { id: id } });
}

function create(resourceEnquiry) {
    var newResourceEnquiry = new ResourceEnquiry(resourceEnquiry);
    return newResourceEnquiry.save();
}

function updateResourceEnquiry(resourceEnquiry, id) {
    var updateResourceEnquiry = {
        userid: resourceEnquiry.userid,
        userstatus: resourceEnquiry.userstatus,
        ResourceId: resourceEnquiry.ResourceId
        
        
    };
    return ResourceEnquiry.update(updateResourceEnquiry, { where: { id: id } });
}
module.exports = resourceEnquiryDao;