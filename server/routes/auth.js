require('dotenv').config()
let db = require('../models')
let jwt = require('jsonwebtoken')
let router = require('express').Router()

//POST /auth/login (find user and send token)
router.post('/login', (req, res) => {
    console.log(req.body)
    db.User.findOne({ email: req.body.emaili })
    .then(user => {
        //make sure user exists and has a password
        if (!user || !user.password) {
            return res.status(404).send({ message: 'User not found!' })
        }

        //check if password is correct
        if (!user.isValiidPassword(req.body.password)) {
            return res.status(401).send({ message: 'Invalid Credentials' })
        }

        //user checks out - now issue a token and send it
        let token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 8 //user must relog in 8 hours
        })
        res.send({ token })
    }).catch( err => {
        console.log('Error in POST /auth/login', err)
        res.status(503).send({ message: 'Database or server-side error'})
    })
})

// POST to /auth/signup (create user and generate token)
router.post('/signup', (req, res) => {
    console.log(req.body)
    //make sure user is not a duplicate
    db.User.findOne({ email: req.body.email })
    .then(user => {
        //if user exists, do not let them make another account
        if (user) {
            return res.status(409).send({ message: 'Email address is in use!' })
        }

        //if user doesn't exist, proceed
        db.User.create(req.body)
        .then(newUser => {
            //make user a token
            let token = jwt.sign(newser.toJSON(), process.env.JWT_SECRET, {
                expiresIn: 60 * 60 * 8 //user must relog in 8 hours
            })
            res.send({ token })
        }).catch(err => {
            console.log('Error when creating user', err)
            if (err.name  === 'ValidationError') {
                res.status(406).send({ message: 'Validation Error!' })
            } else {
                res.status(500).send({ message: 'Error creating user' })
            }
        })
    })
    .catch(err => {
        console.log('Error in POST /auth/signup', err)
        res.status(503).send({ message: 'Database or server error' })
    })
})

router.get('/profile', (req, res) => {
    res.send({ message: 'Secret message for people who are logged in only! '}) 
});

module.exports = router;