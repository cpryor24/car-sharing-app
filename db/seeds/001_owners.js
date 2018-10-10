
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('owners').del()
    .then(function () {
      // Inserts seed entries
      return knex('owners').insert([
        {first_name: 'Rick', last_name: 'Smith', email: 'rs@yahoo.com', password: '12asqw', img: 'person5.jpg'},
        {first_name: 'Derek', last_name: 'Willis', email: 'dw@hotmail.com', password: 'asdfgh', img: 'person9.jpeg'},
        {first_name: 'Wayne', last_name: 'Johnson', email: 'wj@outlook.com', password: 'zxcvbn', img: 'person10.jpeg'}
      ]);
    });
};
