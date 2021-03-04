const {Router} = require('express')
const route = Router()

let user = []
route.get('/', (req, res)=>{
    res.send(user)
})

















module.exports = route