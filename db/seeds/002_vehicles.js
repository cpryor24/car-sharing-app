
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vehicles').del()
    .then(function () {
      // Inserts seed entries
      return knex('vehicles').insert([
        {make: 'Mercedes', model: 'E 300', year: 2017, price: 120, odometer: 54821, transmission: 'automatic', mpg: 28, doors: 4, gas: 'Gas (Premium)', seats: 5, url_img: '/assets/img/e300.jpg', city: 'Phoenix', state: 'AZ', trips: 6, description: 'This is a very highly optioned 2017 Mercedes Benz E 300 Sport. Beautiful black paint, tinted windows with black leather and black carpet interior.', instructions: 'Return the car clean after your trip.', owner_id: 2},
        {make: 'Chevrolet', model: 'Corvette', year: 2017, price: 89, odometer: 12821, transmission: 'manual', mpg: 20, doors: 2, gas: 'Gas (Premium)', seats: 2, url_img: '/assets/img/vette.jpg', city: 'Phoenix', state: 'AZ', trips: 10, description: 'This 2017 Corvette Stingray is the absolute best car for Arizona. 460 horsepower v8, takes you 0-60 in 3.7 seconds. It is absolutely a fun, convertible rocket ship. Enjoy the convertible, powerful, and absolutely beautiful machine: If you have any questions please do not hesitate to message me.', instructions: 'Return the car clean after your trip.', owner_id: 3},
        {make: 'Polaris', model: 'Slingshot', year: 2015, price: 185, odometer: 5821, transmission: 'manual', mpg: 35, doors: 2, gas: 'Gas (Premium)', seats: 2, url_img: '/assets/img/slingshot.jpg', city: 'Phoenix', state: 'AZ', trips: 26, description: 'The Polaris Slingshot is bound to attract both motorcycle riders looking for something different and car drivers seeking a taste of motorcycle excitement. The slingshot is an open-air 3 wheeled roadster with no roof and no doors that you drive like a car. Slingshots have 173 horsepower, weigh 1750lbs and come equip w/ a 5-speed manual transmission, the perfect toy for our Arizona weather!', instructions: 'Return the car clean after your trip.', owner_id: 1}
      ]);
    });
};
