const resourceEnquiryDao = require('../dao/resourceenquiry.dao');


var resourceEnquiryController = {
    addResourceEnquiry: addResourceEnquiry,
    findResourceEnquirys: findResourceEnquirys,
    findResourceEnquiryById: findResourceEnquiryById,
    updateResourceEnquiry: updateResourceEnquiry,
    deleteById: deleteById,
}

async function addResourceEnquiry(req, res) {
    let resourceEnquiry = req.body;
    
    resourceEnquiryDao.create(resourceEnquiry).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findResourceEnquiryById(req, res) {
    resourceEnquiryDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    resourceEnquiryDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "ResourceEnquiry deleted successfully",
                resourceEnquiry: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateResourceEnquiry(req, res) {
    resourceEnquiryDao.updateResourceEnquiry(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "ResourceEnquiry updated successfully",
                resourceEnquiry: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findResourceEnquirys(req, res) {
    resourceEnquiryDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}



module.exports = resourceEnquiryController;