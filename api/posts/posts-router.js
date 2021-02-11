const express = require('express');
// const { logger } = require('../middleware/middleware.js');
const postsFunc = require('./posts-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  // logger();
  postsFunc
    .get()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch(() => {
      res.status(500).json({ message: 'Error retrieving the posts' });
    });
});

router.get('/:id', (req, res) => {
  // RETURN THE POST OBJECT
  // this needs a middleware to verify post id
  
});

// do not forget to export the router
module.exports = router;
