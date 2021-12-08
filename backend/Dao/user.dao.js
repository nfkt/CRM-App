const Users = require('../Models/users');
var userDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    findByEmail: findByEmail,
    checkEmail: checkEmail
}

function findAll() {
    return Users.findAll();
}


function findById(id) {
    return Users.findByPk(id);
}


function findByEmail(email){
    return Users.findOne({
        where:{ email: email}
    });
    
}

function checkEmail(email) {
    return Users.count({
        where: { email: email }
    }).then((count)=>{
        if(count != 0){
            return false;
        }
        return true
        
    })
}

function deleteById(id) {
    return Users.destroy({ where: { id: id } });
}

function create(user) {
    var newUser = new Users(user);
    return newUser.save();
}

module.exports = userDao;