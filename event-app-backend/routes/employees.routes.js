const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employees.controller');



router.get('/:id', employeeController.findEmployeeById);
router.get('/email/:email', employeeController.findEmployeeByEmail);
router.get('/grade/:grade', employeeController.findEmployeesByGrade);

module.exports = router;