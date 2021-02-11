const express = require('express');
const userFunc = require('./users-model');
const { validateUserId, validatePost } = require('../middleware/middleware');
const { restart } = require('nodemon');

const router = express.Router();

router.get('/', (req, res) => {
  userFunc
    .get()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(() => {
      res.status(500).json({ message: 'Error retrieving the users' });
    });
});

router.get('/:id', validateUserId, (req, res) => {
  res.status(200).json(req.userId);
});

router.post('/', validatePost, (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  userFunc
  .insert()
  .then(post => {
    res.status(200).json(post);
  })
  .catch(() => {
    res.status().json({})
  })
});

router.put('/:id', (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete('/:id', (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
});

router.get('/:id/posts', (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/:id/posts', (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

// do not forget to export the router
module.exports = router;
