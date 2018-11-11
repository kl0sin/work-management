const dbConfig = require('../config/mongo-db.config');
const User = require('../models/user');
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const db = dbConfig;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected Successfully to mongodb!');
  })
  .catch(err => {
    console.error(err);
  });

router.get('/', (req, res) => {
  res.send('From API route');
});

router.post('/register', (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, user) => {
    if (error) {
      console.error(error);
    } else {
      res.status(200).send(user);
    }
  });
});

router.post('/login', (req, res) => {
  let userData = req.body;

  User.findOne({ email: userData.email }, (err, user) => {
    if (err) {
      console.error(err);
    } else {
      if (!user) {
        res.status(401).send('Invalid email');
      } else {
        if (user.password !== userData.password) {
          res.status(401).send('Invalid password');
        } else {
          res.status(200).send(user);
        }
      }
    }
  });
});

module.exports = router;
