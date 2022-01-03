const employeeDao = require('../dao/employees.dao');



var employeeController = {
    findEmployeeByEmail: findEmployeeByEmail,
    findEmployeeById: findEmployeeById,
    findEmployeesByGrade: findEmployeesByGrade
}


//Admin based function
// function getAllEmployees(req, res){

//     userDao.findAll().
//         then((data) => {
//             res.send(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

//Admin based function ?
function findEmployeeById(req, res) {
    employeeDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findEmployeeByEmail(req, res) {
    employeeDao.findByEmail(req.params.email).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            
        });
}

//HR admin procedure
function findEmployeesByGrade(req, res) {
    employeeDao.findByGrade(req.params.grade).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}





module.exports = employeeController;