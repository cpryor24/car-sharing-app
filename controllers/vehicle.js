const knex = require("../db/knex.js");

module.exports = {
  rental: (req, res) => {
    knex('vehicles').where('vehicles.id', req.params.id).join('owners', 'owners.id', 'vehicles.owner_id')
      .then( (data) => {
        res.render('rent-vehicle', {rental: data[0]})
      })
  }
}
