const router = require('express').Router();
const restricted = require('../middleware/restricted');

const Plants = require('./plants-model');

router.get('/', restricted, (req, res, next) => {
  Plants.getPlants()
    .then(plant => {
      if(plant){
        res.status(200).json(plant)
      }else{
        res.status(404).json({message: 'No plants found'})
      }
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router;

