//Update the name of the controller below and rename the file.
const main = require("../controllers/main.js")
module.exports = function(app){

  app.get('/', main.index);

}
