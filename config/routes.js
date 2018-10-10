const main = require("../controllers/main.js")
const ownerpage = require("../controllers/ownerpage.js")
const addcar = require("../controllers/addcar.js")
const vehicle = require("../controllers/vehicle.js")
const booking = require("../controllers/booking.js")

module.exports = function(app){

  app.get('/', main.index);
  app.get('/sign-up', main.show);
  app.post('/login', main.login);
  app.post('/sign-up', main.signUp)

  // View Vehicle
  app.get('/rental/:id', vehicle.rental)

  // Book vehicle
  app.get('/booking/:id', booking.showBooking)

  app.use(authenication);

  app.get('/ownerpage', ownerpage.index)
  app.get('/addcar', addcar.index)



}

let authenication = (req, res, next) => {
  if(!req.session.owner_id) {
    res.redirect('/login')
  } else {
    next();
  }
}
