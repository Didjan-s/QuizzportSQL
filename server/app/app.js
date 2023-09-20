//dotenv
require('dotenv').config();

//Cors
const cors = require("cors")

//routing
const authRoute = require('./routes/AuthRoutes')

//cookie-parser
const cookieParser = require("cookie-parser")

//bdd
const {Client} = require('pg')
client = new Client(process.env.BDDURL)

// Express
const express = require('express')
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors(
  {
    origin : ['http://localhost:4200','https://web.postman.co'],
    credentials: true,
  }
))
//Connexion à la base
client.connect().then(()=>{
    console.log("ok");
}).catch(()=>{
    console.log("error");
})

app.use('/api',[authRoute])

app.listen(3000, ()=> {
    console.log("Listening on port 3000");
})