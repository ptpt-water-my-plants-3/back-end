const bcrypt = require('bcryptjs');
const db = require('../../data/dbConfig.js');
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('./secret');
const router = require('express').Router();

// registering a new user, will give an error if there is an already existing user
router.post('/register', async (req, res) => {
  function checkCredentials(user){
    return Boolean(user.username && user.password && typeof user.password === "string" )
  }

  if(checkCredentials(req.body)){
    try{
      const {username, password, phonenumber} = req.body
      const rounds = process.env.BCRYPT_ROUNDS || 8;
      const hash = bcrypt.hashSync(password, rounds)
      const newUser = {username, password: hash, phonenumber}
      const addedUser = await db('users').insert(newUser);
      res.status(201).json(addedUser)
    }catch(err){
      res.status(500).json({message: 'That username exists already'})
    }
  }else{
    res.status(400).json({message: 'Valid credentials (username, password, and phone number) required'})
  }
})

// logging in the user 
router.post('/login', async (req, res, next) => {
  function checkCredentials(user){
    return Boolean(user.username && user.password && typeof user.password === "string" )
  }

  const {username, password, user_id} = req.body

  if(checkCredentials(req.body)){
    await db('users').where('username', username)
      .then(([user]) => {
        if(user && bcrypt.compareSync(password, user.password)){
          const token = makeToken(user)
          res.status(201).json({message: `Welcome back ${user.username} with id of ${user.user_id}`, token})
        }else{
          res.status(401).json({message: 'Invalid credentials'})
        }
      })
      .catch(err => {
        next(err);
      })
  }else{
    res.status(400).json({message: 'Username, password and phone number are required'})
  }
})

// token for authentication
function makeToken(user){
    const payload = {
      subject: user.id,
      username: user.username,
      phonenumber: user.phonenumber
    }
    const options = {
      expiresIn: '3600s'
    }
    return jwt.sign(payload, jwtSecret, options)
  }

module.exports = router;