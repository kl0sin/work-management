const dbConfig = require('../config/mongo-db.config');

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const db = dbConfig;

mongoose.connect(
  db,
  err => {
    if (err) {
      console.error(`Error!  ${err}`);
    } else {
      console.log('Connected Successfully to mongodb!');
    }
  }
);

router.get('/', (req, res) => {
  res.send('From API route');
});

module.exports = router;
