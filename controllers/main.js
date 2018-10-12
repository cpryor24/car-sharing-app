const knex = require("../db/knex.js");
const moment = require('moment');

module.exports = {
  index: (req, res) => {
    knex('vehicles').then( (data) => {
      res.render('index', {vehicle: data});
    })
  },

  search: (req, res) => {
    knex('vehicles')
    .select('bookings.*', 'vehicles.*')
    .leftJoin('bookings', 'bookings.vehicle_id', 'vehicles.id')
    .where('vehicles.make', req.query.make)
    .whereRaw(`(("from" < '${req.query.from}' AND "to" < '${req.query.to}') OR ("from" > '${req.query.from}' AND "to" > '${req.query.to}') OR ("from" IS null AND "to" IS null))`)
    .distinct()
    .then( (results) => {
      knex('vehicles').then((vehicles)=>{
        console.log('results', results, req.query.from, req.query.to)
        res.render('search-vehicle', {books: results, car: vehicles})
      })
    })
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
    knex('owners').where("email", req.body.email)
    .then((results)=>{

      let owner=results[0];
      if(!owner)
        {
          res.redirect('/');
          return;
        }
       if (owner.password === req.body.password){
         req.session.owner_id = owner.id;
         req.session.save(()=>{
           res.redirect('/ownerpage')
         })
        }else{
          res.redirect('/');
        }

     })
  },

}
