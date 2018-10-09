const knex = require("../db/knex.js");

module.exports = {

  index: (req, res)=>{
    knex('owners').where("id" , req.session.owner_id)
    .then((owner)=>{
      knex('vehicles').where('owner_id', req.session.owner_id).then((results)=>{
        console.log(results);
        res.render('ownerpage', {owner:owner[0], vehicles:results});
      })

    })

  },
}
