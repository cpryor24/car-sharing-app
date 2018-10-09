const knex = require("../db/knex.js");

module.exports = {
  rental: (req, res) => {
    knex('vehicles').where('id', req.params.id).then( (data) => {
      console.log('clicked car', data[0])
      res.render('rent-vehicle', {rental: data[0]})
    })
  }
}
