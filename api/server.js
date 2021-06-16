const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth') //needs the auth-router
server.use('/api/plants') //needs the plant router with our restriction middleware

server.get('/api', (req, res) => {
  res.status(200).json({message: 'api is up!'})
})

module.exports = server;