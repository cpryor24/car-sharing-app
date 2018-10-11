
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vehicles', (table) => {
    table.increments();
    table.string('make');
    table.string('model');
    table.integer('year').notNullable();
    table.decimal('price');
    table.integer('odometer').notNullable();
    table.string('transmission');
    table.integer('mpg').notNullable();
    table.integer('doors').notNullable();
    table.string('gas');
    table.integer('seats').notNullable();
    table.text('url_img');
    table.string('city');
    table.string('state');
    table.integer('trips')
    table.text('description');
    table.text('instructions');
    table.integer('owner_id')
      .notNullable()
      .references('id')
      .inTable('owners')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vehicles');
};
