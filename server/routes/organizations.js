const express = require('express');
const router = express.Router()
const db = require('../models/index')

// page to get a list of events
router.get('/', (req, res) => {
    db.Event.find()
        .then(events => {
            res.send(events);
    }).catch(err => res.send({message: 'Error in getting all events', err}))
})

//Show specific Event. 
router.get('/:id', (req, res) => {
    db.Event.findById(req.params.id)
        .then(events => {
            res.send(events);
    }).catch(err => res.send({message: 'Error in getting one mesuems', err}))
})

//Take form data to add a new events
router.post('/', (req, res) => {
    let newEvent = {
        name: req.body.name,
        date: req.body.date,
        city: req.body.city,
        state: req.body.state,
        location: req.body.location,
        webUrl: req.body.website,
        detail: req.body.detail
    }

    Object.keys(newEvent).forEach(key => (newEvent[key] == '') && delete newEvent[key]);
    db.Organization.create(newEvent)
    .then(event => {
        res.send(event);
    })
    .catch(err => {
        console.log('Error Message', err);
        res.send({message :'An error occured creating new event', err});
    });
});

// Edit event form
router.get('/:id/edit', (req, res) => {
    db.Organization.findById(req.params.id)
    .then(event => {
        res.render('organisations/edit', { event: event })
    })
})

// update an event
router.put('/:id', (req, res) => {
    db.Organization.findById(req.params.id)
    .then(event => {
        return event.update(req.body);
    }).then(event => {
        res.redirect(`/organizations/${event.id}`)
    }).catch(err => {
        console.log('Error Message', err);
        res.send({message :'An error occured while updating event', err});
    });
    
})

// Delete an event
router.delete('/:id', (req, res) => {
    console.log('---Delete route');
    db.Organization.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.redirect('/organization');
    })
    .catch(err => res.send({message: 'Error deleting event', err}))
})
    
module.exports = router;