// const express = require('express')
// const bodyParser = require('body-parser')
const app = require ('./app.js')
const PORT = 7888;
app.listen(PORT, ()=>{
          console.log(`server is up at ${PORT}`)
})