const userDao = require('../Dao/user.dao');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = require('../Token/Token');
// 

var userController = {
    addUser: addUser,
    loginUser: loginUser,
    getAllUsers: getAllUsers,
    findUserById: findUserById
}

function addUser(req, res) {
    let usr = {}
    usr.name = req.body.name;
    usr.email = req.body.email;
    usr.role = req.body.role;
    usr.password = bcrypt.hashSync(req.body.password);
    console.log(SECRET_KEY);

    //To verify if the req email is unique
    userDao.checkEmail(usr.email).then((isUnique) => {
        if (isUnique) {
            userDao.create(usr).
                then((data) => {

                    userDao.findByEmail(usr.email).then(() => {
                        // res.send(data);

                        const expiresIn = 24 * 60 * 60;
                        const accessToken = jwt.sign({ id: usr.id }, SECRET_KEY, {
                            expiresIn: expiresIn
                        });
                        res.status(200).send({
                            "user": usr, "accessToken": accessToken, "expires_in": expiresIn
                        });

                    }).catch((error) => {
                        console.log(error);
                        return res.status(500).send('Server error @ 37');
                    })

                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else{
            res.sendStatus(409);
            console.log("User already exist")
        }
    }
   )
}


function loginUser(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    
    userDao.findByEmail(email).
        then((data) => {
            userPassword = data.password;
            console.log(userPassword);
            const result = bcrypt.compareSync(password, userPassword);
            if (!result) return res.status(401).send('Password not valid!');
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: data.id, role: data.role }, SECRET_KEY, {
                expiresIn: expiresIn
            });
            userInfo = data;
            res.status(200).send({
                "user": data,
                "accessToken": accessToken,
                "expires_in": expiresIn
            });
        })
        .catch((error) => {

            console.log(error);
            return res.status(404).send('User not found!');
            
        });
}

function getAllUsers(req, res){

    userDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findUserById(req, res) {
    userDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}




module.exports = userController;