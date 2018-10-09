const main = require("../controllers/main.js")
const ownerpage = require("../controllers/ownerpage.js")
module.exports = function(app){

  app.get('/', main.index);
  app.get('/sign-up', main.show);
  app.post('/login', main.login);
  app.post('/sign-up', main.signUp)

  app.use(authenication);

  app.get('/ownerpage', ownerpage.index)



}

let authenication = (req, res, next) => {
  if(!req.session.owner_id) {
    res.redirect('/login')
  } else {
    next();
  }
}
