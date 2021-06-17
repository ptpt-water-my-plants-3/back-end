// need to find out how we want to structure out our server tables/data, for now this is just a placeholder
exports.up = function(knex) {
  return knex.schema
  .createTable('users', user => {
    user.increments('user_id');
    user.string('username', 128).notNullable().unique();
    user.string('password', 128).notNullable();
    user.string('phonenumber', 20).notNullable();
  })
  .createTable('plants', plant => {
    plant.increments('plant_id');
    plant.string('nickname', 128).notNullable().unique();
    plant.string('species', 128).notNullable();
    plant.text('h20_frequency').notNullable();
    plant.integer('user_id')
      .unsigned()
      .references('user_id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('plants')
    .dropTableIfExists('users')
};
