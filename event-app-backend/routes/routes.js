const express = require('express');
const router = express.Router();
const employeeRoutes = require('./employees.routes');
const eventRoutes = require('./events.routes');



router.use('/org/employees', employeeRoutes);
router.use('/org/events', eventRoutes);

module.exports = router;