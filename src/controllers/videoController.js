const express = require('express');

const Video = require('../models/videos');

const router = express.Router();

router.get('/', async (req, res) => {
    // list all videos
    allVideos = await Video.find();
    res.send({ videos: allVideos });
});

router.post('/', async (req, res) => {
  insert = await Video.create(req.body, (err, small) => {
    res.send(err);
  })
  res.send(req.body);
});

module.exports = router;
