const router = require('express').Router();
const restricted = require('../middleware/restricted');

const Users = require('./user-model');

router.get('/', restricted, (req, res, next) => {
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

router.get('/:id', restricted, (req, res, next) => {
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

router.put('/:id', restricted, (req, res, next) => {
  const {id} = req.params
  const changes = req.body

  Users.editUser(id, changes)
    .then(user => {
      if(user){
        res.json(user)
      }else{
        res.status(404).send({message: "User not found"})
      }
    })
    .catch(err => {
      next(err)
    })
})


module.exports = router;