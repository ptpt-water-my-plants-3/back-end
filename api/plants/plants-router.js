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
});

router.get('/:id', restricted, (req, res, next) => {
  const {id} = req.params

  Plants.getById(id)
    .then(plant => {
      if(!plant){
        res.status(404).json({message: 'Plant not found'})
      }else{
        res.status(200).json(plant)
      }
    })
    .catch(err => {
      next(err);
    })
});

router.post('/', restricted, (req, res, next) => {
  console.log(req.body)
  Plants.addPlant(req.body)
    .then(plant => {
      res.status(201).json(plant)
    })
    .catch(err => {
      next(err)
    }) 
});

router.put('/:id', restricted, (req, res, next) => {
  const {id} = req.params
  const changes = req.body

  Plants.update(id, changes)
    .then(plant => {
      if(plant){
        res.json(plant)
      }else{
        res.status(404).send({message: "Plant not found"})
      }
    })
    .catch(err => {
      next(err)
    })
})


router.delete('/:id', (req, res, next) => {
  const plant = req.params.id
  Plants.removePlant(plant)
    .then(count => {
      if(count > 0){
        res.status(204).end()
      }else{
        res.status(404).json({message: 'Plant not found'})
      }
    })
    .catch(err => {
      next(err);
    })
});

module.exports = router;

