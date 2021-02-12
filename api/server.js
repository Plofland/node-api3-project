const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const cors = require('cors');
const path = require('path');


const postsRouter = require('./posts/posts-router.js');
const userRouter = require('./users/users-router.js');

const server = express();

// remember express by default cannot parse JSON in request bodies

server.use(express.json(), morgan('dev'));
server.use(cors())
server.use(
  express.static(path.join(__dirname, 'client/build'))
);

// global middlewares and routes need to be connected here
server.use('/api/posts', postsRouter);
server.use('/api/users', userRouter);

server.use('/api/*', (_, res) => {
  res.json({ data: 'The API lives!!!' });
});

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use('*', (_, res) => {
  res.sendFile(
    path.join(__dirname, 'client/build', 'index.html')
  );
});

module.exports = server;
