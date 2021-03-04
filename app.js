const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({
          extended:true
}))


app.use('/api/user', require('./routes/user'))
app.use('/api/users', require('./routes/users'))
app.use('/api/tags', require('./routes/tags'))
app.use('/api/profiles', require('./routes/profiles'))
app.use('/api/articles', require('./routes/articles'))

module.exports=app












// app.get('/api', (req, res)=>{       
//           try{                   
//           res.send("this is root")       
//           } catch (e) {
//                     console.log(e.name);
//           }
//           console.log("this is also a root")       
// })