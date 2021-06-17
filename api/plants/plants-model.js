const db = require('../../data/dbConfig');

const getPlants = () => {
  return db('plants').select('*')
}

module.exports = { 
  getPlants
}