const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex('vehicles').then( (data) => {
    console.log(data)
      res.render('index', {vehicle: data});
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
    console.log(req.body.email);
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
