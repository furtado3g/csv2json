//dependencies import
//libraries dependencies
const express = require('express')
const cors = require('cors')

//internal dependencies
const routes = require('./src/routes/routes')

//init application
const app = express()

//global variables
const port = 3333
//routes and entry methods
app.use(cors())
app.use(express.json)
app.use(routes)

//usual functions
const openPort = () =>{
    console.log(port + ' port is open')
}

//listening port 
app.listen(port,openPort);