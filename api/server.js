const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const user = require('./users/user-router');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use('/api/auth') //needs the auth-router
server.use('/api/users', user) //needs the plant router with our restriction middleware

server.get('/api', (req, res) => {
  res.status(200).json({message: 'api is up!'})
})

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: 'Something went wrong retrieving items'
  })
})

module.exports = server;