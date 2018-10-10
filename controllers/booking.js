const knex = require("../db/knex.js");

module.exports = {
  showBooking: (req, res) => {
    knex('owners').where('owners.id', req.params.id).join('vehicles', 'owners.id', 'vehicles.owner_id')
      .then( (data) => {
        console.log(data);
        res.render('booking', {confirm: data[0]})
      })
  },

  reserve: (req, res) => {
    knex('bookings').insert({
      vehicle_id: req.params.id,
      from: req.body.from,
      to: req.body.to,
      email: req.body.email,
      name: req.body.name,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      img: req.body.img
    }).then( () => {
      res.redirect(`/reservation/${req.params.id}`);
    })
  },

  confirm: (req, res) => {
    knex('vehicles').where('id', req.params.id).then( (data) => {
      res.render('confirm', {reservation: data[0]});
    })
  }
}
