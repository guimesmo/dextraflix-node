const express = require('express');

const Author = require('../models/authors');

const router = express.Router();

router.get('/', async (req, res) => {
    // list all videos
    allAuthors = await Author.find();
    res.send(allAuthors);
});

router.post('/', async (req, res) => {
  insert = await Author.create(req.body, (err, small) => {
    res.send(err);
  })
  res.send(req.body);
});

module.exports = router;
