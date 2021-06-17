const bcrypt = require('bcryptjs');

exports.seed = async function(knex) {
  return knex('users').insert([
    {
      username: 'LambdAdmin',
      password: await bcrypt.hash('testpass', 8),
      phonenumber: '111-111-111'
    }
  ])
};
