const eventDao = require('../dao/events.dao');

var eventController = {
    addEvent,
    findEventsByDate
}

function addEvent(req, res) {
    let event = req.body;
    let eventTitle = req.body.event_title;

    //To verify course code is unique
    eventDao.checkEventTitle(eventTitle).then((isUnique) => {
        if (isUnique) {
            eventDao.createEvent(event).
            then((data) => {
                    res.send(data);
                })
                .catch((error) => {
                    console.log(error);
                });

        } else {
            res.sendStatus(409);
            console.log("Even with this name already exist")
        }
    })


}

function findEventsByDate(req, res) {
    console.log(req.body.start_date);
    eventDao.findByDate(req.body.start_date, req.body.end_date).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = eventController;