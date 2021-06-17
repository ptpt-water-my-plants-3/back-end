const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./user-model');

router.get('/', (req, res, next) => {
  Users.getUsers()
    .then(user => {
      if(!user){
        res.status(400).json({message: 'no users'})
      }else{
        res.status(200).json(user);
      }
    })
    .catch(err => {
      next(err)
    })
});

router.get('/:id', (req, res, next) => {
  const {id} = req.params

  Users.getUserById(id)
    .then(user => {
      if(user){
        res.status(200).json(user)
      }else{
        res.status(404).json({message: 'user not found'})
      }
    })
    .catch(err => {
      next(err);
    })
})


module.exports = router;