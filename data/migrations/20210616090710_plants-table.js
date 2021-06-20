// foreign key is commented out b/c cant find a way to limit posts to their user
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
    plant.binary('plant_img');
    // plant.integer('user_id')
    //   .unsigned()
    //   .references('user_id')
    //   .inTable('users')
    //   .onDelete('CASCADE')
    //   .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('plants')
    .dropTableIfExists('users')
};
