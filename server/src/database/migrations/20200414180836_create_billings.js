
exports.up = function(knex) {
  return knex.schema.createTable('billings', function (t) {
    t.increments('id').primary();
    t.string('value').notNullable();

    t.string('user_id').notNullable();
    t.foreign('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('billings');
};
