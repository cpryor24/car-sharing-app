const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    res.render('index');
  },

  show: (req, res) => {
    res.render('index')
  },

  signUp: (req, res) => {
    knex('owners').insert({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    }).then( () => {
      res.redirect('/')
    })
  },

  login: (req, res) => {

  },

}
