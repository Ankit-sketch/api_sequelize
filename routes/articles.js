const {Router} = require('express')
const route = Router()

route.get('/', (req, res)=>{
    res.send(
          {
                    "tags": [
                      "reactjs",
                      "angularjs"
                    ]
                  }
    )
})

route.get('/:id',(req, res)=>{
          const slug = req.params.id;
          res.send(slug)
          console.log(slug)
})





module.exports = route