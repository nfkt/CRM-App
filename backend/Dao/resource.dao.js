
//defining the operations


const Resource= require('../models/resource');

var resourceDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateResource: updateResource,
    checkResourceCode: checkResourceCode
}

function findAll() {   //inbuilt method to find  all the elemnts in a database
    return  Resource.findAll();     
}

function findById(id) {        
    return Resource.findByPk(id);     //inbuilt method find elemnts by particular id
}

function deleteById(id) {
    return Resource.destroy({ where: { id: id } });   //inbuilt method to delelte elemnts with particular id
}

function create(resource) {  //inbuilt method to create elemnts
    var newResource = new Resource(resource);
    return newResource.save();    //saving the newWresource
}

function checkResourceCode(resourcecode){
    return Resource.count({
        where: {resourcecode: resourcecode}
    }).then((count)=>{
        if(count != 0){
            return false;
        }
        return true;
    })
}

function updateResource(resource, id) {
    var updateResource = {
        resourcename: resource.resourcename,
        resourcecode: resource.resourcecode,
        resourcefee: resource.resourcefee,
        category : resource.category,
        description: resource.description,
        visit: resource.visit
        
    };
    return Resource.update(updateResource, { where: { id: id } });
}
module.exports = resourceDao;