const db = require('../../data/dbConfig');

const getPlants = () => {
  return db('plants as p').select('*')
};

const getById = (id) => {
  return db('plants as p')
    .select('*')
    .leftJoin('users as u', 'u.user_id', 'p.user_id')
    .where('plant_id', id)
    .then(plant => {
      return plant[0]
    })
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