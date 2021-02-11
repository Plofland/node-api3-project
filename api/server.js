const express = require('express');
const morgan = require('morgan');

const postsRouter = require('./posts/posts-router.js');
const userRouter = require('./users/users-router.js');

const server = express();

// remember express by default cannot parse JSON in request bodies

server.use(express.json(), morgan('dev'));

// global middlewares and routes need to be connected here
server.use('/api/posts', postsRouter);
server.use('/api/users', userRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
