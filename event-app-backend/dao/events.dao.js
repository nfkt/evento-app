const Events = require('../models/events');
const Op = require('../loaders/index').sequelize.Op;

var eventDao = {
    createEvent,
    checkEventTitle,
    findAll,
    findById,
    findByTitle,
    findByDate
}

//HR Admin can create event
function createEvent(event) {
    var newEvent = new Events(event);
    return newEvent.save();
}

//To check whether the event in database is unique or not
function checkEventTitle(title){
    return Events.count({
        where: {event_title: title}
    }).then((count)=>{
        if(count != 0){
            return false;
        }
        return true;
    })
}

//Admin operation to get all employees
function findAll() {
    return Events.findAll();
}

//Admin operation to get employees by their id
function findById(id) {
    return Events.findByPk(id);
}

//HR admin/user can find events by searching their title
function findByTitle(title){
    return Events.findOne({
        where:{ event_title: title}
    });
    
}

// HR Admin and User can search event based on the date
function findByDate(start_date, end_date){
    return Events.findAll({
        where:{ 
            start_date: {
           [Op.between]: [start_date, end_date]
                   
        }}
    });
    
}
module.exports = eventDao;