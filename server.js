// const express = require('express')
// const bodyParser = require('body-parser')
// const config = require('./config/config.json')
const app = require ('./app.js')
const db = require('./models')
const PORT =7888;
app.listen(PORT, ()=>{
          console.log(`server is up at ${PORT}`)
})