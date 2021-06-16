// need to find out how we want to structure out our server tables/data, for now this is just a placeholder
exports.up = function(knex) {
  return knex.schema
  .createTable('plants', plant => {
    plant.increments();
  })
  .createTable('users', user => {
    user.increments();
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('plants')
    .dropTableIfExists('users')
};
