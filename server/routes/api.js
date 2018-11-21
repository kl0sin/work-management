const dbConfig = require('../config/mongo-db.config');
const User = require('../models/user');
const express = require('express');
const jwt = require('jsonwebtoken');
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

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request!')
  }
  let token = req.headers.authorization;
  if (token === 'null') {
    return res.status(401).send('Unauthorized request!')
  }
  let payload = jwt.verify(token, 'someSecretKey')
  if (!payload) {
    return res.status(401).send('Unauthorized request!')
  }
  req.userId = payload.subject;
  next();
}

router.get('/', (req, res) => {
  res.send('From API route');
});

router.post('/register', (req, res) => {
  let userData = req.body;
  let user = new User(userData);

  User.findOne({ email: userData.email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (user) {
        res.status(401).send('Email already exists!');
      } else {
        user.save((error, user) => {
          if (error) {
            console.error(error);
          } else {
            let payload = { subject: user._id };
            let token = jwt.sign(payload, 'someSecretKey');
            res.status(200).send({ token });
          }
        });
      }
    }
  })
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
          let payload = { subject: user._id };
          let token = jwt.sign(payload, 'someSecretKey');
          res.status(200).send({ token });
        }
      }
    }
  });
});

module.exports = router;
