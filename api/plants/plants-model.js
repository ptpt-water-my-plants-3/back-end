const db = require('../../data/dbConfig');

const getPlants = () => {
  return db('plants as p').select('*')
};

const getById = (id) => {
  return db('plants as p')
    .where('plant_id', id)
    .select('p.nickname',
    'p.species',
    'p.h20_frequency')
    .first()
};

const addPlant = async (plant) => {
  const [id] = await db('plants').insert(plant)

  return getById(id)
};

const update = async (plant_id, changes) =>{
  await db('plants').where({plant_id}).update(changes)

  return getById(plant_id)
}


const removePlant = async (plant_id) => {
  return db('plants').where({plant_id}).del()
}


module.exports = { 
  getPlants,
  getById,
  addPlant,
  update,
  removePlant
}