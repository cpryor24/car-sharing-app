const knex = require("../db/knex.js");

module.exports = {

  op: (req, res)=>{
    knex('owners').where("id" , req.session.owner_id)
    .then((owner)=>{
      knex('vehicles').where('owner_id', req.session.owner_id).then((results)=>{
    
        res.render('ownerpage', {owner:owner[0], vehicles:results});
      })

    })

  },
}
