const express = require('express')
const db = require('./db')
const app = express()
require('dotenv').config();


const bodyParser = require('body-parser')
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000;


app.get('/', (req,res)=>{
    res.send("Welcome to the hotel")
})

// import router file......
const personRoutes = require('./Routes/personRoutes')
// use routers
app.use('/person', personRoutes)
    
const menuItemRoutes = require('./Routes/menuitemRoutes')
// use routers
app.use('/menu', menuItemRoutes)
   
app.listen(PORT,()=>{
    console.log("listening on port no: 3000")
})