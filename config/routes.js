const main = require("../controllers/main.js")
module.exports = function(app){

  app.get('/', main.index);
  app.get('/sign-up', main.show);
  app.get('/login', main.login);
  app.post('/sign-up', main.signUp)

  app.use(authenication);

}

let authenication = (req, res, next) => {
  if(!req.session.user_id) {
    res.redirect('/login')
  } else {
    next();
  }
}
