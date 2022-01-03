const express = require('express');
const router = express.Router();
const eventController = require('../controller/events.controller');

router.post('/', eventController.addEvent);
router.post('/date/', eventController.findEventsByDate);


module.exports = router;