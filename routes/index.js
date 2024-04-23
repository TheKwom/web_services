const routes = require("express").Router();
const lesson1Controller = require("../controllers/lesson1");

routes.get("/", lesson1Controller.amberRoute);
routes.get("/ellie", lesson1Controller.ellieRoute);
routes.get("/murphy", lesson1Controller.murphyRoute);

module.exports = routes;
