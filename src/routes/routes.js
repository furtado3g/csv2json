//dependencies import
const express = require('express')

//routes controllers
const shoot = require('../controllers/initial/initial')
//init routing
const routes = express.Router();

//routes
routes.get('/',shoot.findTheCsv)

module.exports = routes;