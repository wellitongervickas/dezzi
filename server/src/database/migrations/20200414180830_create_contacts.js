
exports.up = function(knex) {
  return knex.schema.createTable('contacts', function (t) {
    t.increments('id').primary();
    t.string('first_name').notNullable();
    t.string('last_name').notNullable();
    t.string('phone').notNullable();
    t.string('email').notNullable();

    t.string('user_id').notNullable();
    t.foreign('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('contacts');
};
