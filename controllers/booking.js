const knex = require("../db/knex.js");

module.exports = {
  showBooking: (req, res) => {
    knex('owners').where('owners.id', req.params.id).join('vehicles', 'owners.id', 'vehicles.owner_id')
      .then( (data) => {
        console.log(data);
        res.render('booking', {confirm: data[0]})
      })
  }
}
