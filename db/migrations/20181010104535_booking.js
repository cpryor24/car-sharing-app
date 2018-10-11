
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bookings', (table) => {
    table.increments();
    table.integer('vehicle_id')
      .notNullable()
      .references('id')
      .inTable('vehicles')
      .onDelete('CASCADE')
      .index();
    table.date('from');
    table.date('to');
    table.string('email');
    table.string('name');
    table.string('address');
    table.string('city');
    table.string('state');
    table.integer('zip');
    table.string('img');
    table.decimal('total_price');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bookings');
};
