const express = require('express');
const userFunc = require('./users-model');
const {
  validateUserId,
  validatePost,
  validateUser
} = require('../middleware/middleware');

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

router.post('/', validateUser, (req, res) => {
  userFunc
    .insert(req.body)
    .then((post) => {
      res.status(200).json(post);
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to add new user' });
    });
});

router.put('/:id', (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete('/:id', validateUserId, (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  userFunc
    .remove(req.params.id)//works but is buggy, takes any number in params
    .then(() => {
      res.status(200).json({ message: `User successfully removed` });
    })
    .catch(() => {
      res.status(500).json({ message: 'Error in removing user' });
    });
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/:id/posts', validateUserId, (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

// do not forget to export the router
module.exports = router;
