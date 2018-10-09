const knex = require("../db/knex.js");

module.exports = {

index: (req, res)=>{


  res.render('addcar')

},

newcar:(req, res)=>{
 knex('vehicles').insert({
   owner_id:req.session.owner_id,
   make:req.body.make,
   model:req.body.model,
   year:req.body.year,
   price:req.body.price,
   odometer:req.body.odometer,
   transmission:req.body.transmission,
   mpg:req.body.mpg,
   gas:req.body.gas,
   seats:req.body.seats,
   url_img:req.body.url_img,
   city:req.body.city,
   state:req.body.state,
   description:req.body.description
 }).then(()=>{
   res.redirect('/ownerpage');
 })
}



}
