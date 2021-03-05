const {Router} = require('express')
const route = Router()

route.get('/', (req, res)=>{
    res.send(
          {
                    "user":{
                      "email": "jake@jake.jake",
                      "username":"jake",
                      "bio": "I like to skateboard"                    
                    }
                  }
                )
})










module.exports = route