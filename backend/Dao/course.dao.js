const Course = require('../Models/course');
var courseDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateCourse: updateCourse,
    checkCourseCode: checkCourseCode
}

function findAll() {
    return Course.findAll();
}


function findById(id) {
    return Course.findByPk(id);
}

function deleteById(id) {
    return Course.destroy({ where: { id: id } });
}

function create(course) {
    var newCourse = new Course(course);
    return newCourse.save();
}

function checkCourseCode(coursecode){
    return Course.count({
        where: {coursecode: coursecode}
    }).then((count)=>{
        if(count != 0){
            return false;
        }
        return true;
    })
}

function updateCourse(course, id) {
    var updateCourse = {
        coursename: course.coursename,
        coursecode: course.coursecode,
        coursefee: course.coursefee,
        category: course.category,
        description: course.description,
        visit: course.visit
        
        
    };
    return Course.update(updateCourse, { where: { id: id } });
}
module.exports = courseDao;