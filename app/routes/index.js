const HomeController = require('../controllers/HomeController');

module.exports = (app)=>{
    app.get("/",HomeController.default);
}