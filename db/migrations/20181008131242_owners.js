
exports.up = function(knex, Promise) {
  return knex.schema.createTable('owners', (table) => {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('password');
    table.text('img');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('owners')
};
