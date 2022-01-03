const Employees = require('../models/employees');
var employeeDao = {
    findAll: findAll,
    findById: findById,
    findByEmail: findByEmail,
    findByGrade: findByGrade
}

//Admin operation to get all employees
function findAll() {
    return Employees.findAll();
}

//Admin operation to get employees by their id
function findById(id) {
    return Employees.findByPk(id);
}

//HR admin can find employee by checking their mail
function findByEmail(email){
    return Employees.findOne({
        where:{ email: email}
    });
    
}

//HR admin can select employees for event respect to their grade
function findByGrade(grade){
    return Employees.findAll({
        where:{ grade: grade}
    });
}

//To check whether the emil is unique before adding to database, disabled for this app
// function checkEmail(email) {
//     return Employees.count({
//         where: { email: email }
//     }).then((count)=>{
//         if(count != 0){
//             return false;
//         }
//         return true
        
//     })
// }

//To delete employee, disabled for this app
// function deleteById(id) {
//     return Employees.destroy({ where: { id: id } });
// }

//To register employee disabled for this app
// function create(user) {
//     var newUser = new Employees(user);
//     return newUser.save();
// }

module.exports = employeeDao;