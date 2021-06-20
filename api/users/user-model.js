const db = require('../../data/dbConfig');

function getUsers(){
  return db('users as u').select('u.user_id','u.username','u.phonenumber')
}

function getUserById(id){
  return db('users').where('user_id', id).first()
}

async function addUser(newUser){
  const [id] = await db('users').insert(newUser)
  // console.log(getUserById(id))
  return getUserById(id).first();
}

function editUser(id, data){
  return db('users').update(data).where('user_id', id)
}

module.exports = {
  getUsers,
  getUserById,
  addUser,
  editUser
}