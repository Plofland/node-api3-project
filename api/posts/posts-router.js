const express = require('express');
const { logger, validatePost } = require('../middleware/middleware.js');
const postsFunc = require('./posts-model.js');

const router = express.Router();

router.get('/', logger, (req, res) => {
  postsFunc
    .get()
    .then((posts) => {
      // logger();
      res.status(200).json(posts);
    })
    .catch(() => {
      res.status(500).json({ message: 'Error retrieving the posts' });
    });
});

router.get('/:id', validatePost, (req, res) => {
  // RETURN THE POST OBJECT
  // this needs a middleware to verify post id
  res.status(200).json(req.body);
});

// do not forget to export the router
module.exports = router;
