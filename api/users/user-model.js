const db = require('../../data/dbConfig');

function getUsers(){
  return db('users').select('*')
}

function getUserById(id){
  return db('users').where('user_id', id).first()
}

async function addUser(newUser){
  const [id] = await db('users').insert(newUser)
  // console.log(getUserById(id))
  return getUserById(id).first();
}

function editUser(data, id){
  return db('users').update(data).where('user_id', id)
}

module.exports = {
  getUsers,
  getUserById,
  addUser,
  editUser
}