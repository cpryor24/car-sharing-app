const knex = require("../db/knex.js");

module.exports = {

ac: (req, res)=>{


  res.render('addcar')

},

newcar:(req, res)=>{
  for(let key in req.body){
    if(req.body[key] == ''){
      req.body[key] = null;
    }
  }
 knex('vehicles').insert({
   owner_id:req.session.owner_id,
   make:req.body.make,
   model:req.body.model,
   year:req.body.year,
   price:req.body.price,
   odometer:req.body.odometer,
   transmission:req.body.transmission,
   doors:req.body.doors,
   mpg:req.body.mpg,
   gas:req.body.gas,
   seats:req.body.seats,
   url_img:req.body.url_img,
   city:req.body.city,
   state:req.body.state,
   description:req.body.description,
   instructions:req.body.instructions
 }).then(()=>{
   res.redirect('/ownerpage');
 })
},

edit:(req, res)=>{
 knex('vehicles').where('id', req.params.id)
                 .update({
                   make:req.body.make,
                   model:req.body.model,
                   year:req.body.year,
                   price:req.body.price,
                   odometer:req.body.odometer,
                   transmission:req.body.transmission,
                   doors:req.body.doors,
                   mpg:req.body.mpg,
                   gas:req.body.gas,
                   seats:req.body.seats,
                   url_img:req.body.url_img,
                   city:req.body.city,
                   state:req.body.state,
                   description:req.body.description,
                   instructions:req.body.instructions
                 }).then(()=>{
   res.redirect('/ownerpage')
 })
},

delete:(req, res)=>{
  knex('vehicles').where('id', req.params.id)
      .del().then(()=>{
        res.redirect('/ownerpage');
      })
}



}
