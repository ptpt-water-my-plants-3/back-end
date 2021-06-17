const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('./auth/auth-router');
const user = require('./users/user-router');
const plants = require('./plants/plants-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter)
server.use('/api/plants', plants)
server.use('/api/users', user) 

server.get('/api', (req, res) => {
  res.status(200).json({message: 'api is up!'})
})

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: 'Something went wrong with the server'
  })
})

module.exports = server;