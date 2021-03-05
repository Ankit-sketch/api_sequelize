const {
  Router
} = require("express");
const models = require("../models");
const {
  User
} = models;
const route = Router();

route.post("/", async (req, res) => {
  const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    bio: req.body.bio,
  });
  res.send(user);
  console.log(user.bio);
});




route.get("/", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

route.get("/:id", async (req, res) => {
  const {
    id
  } = req.params;
  const user = await User.findByPk(id);
  res.send(user);
});

route.delete("/:id", async (req, res) => {
  const {
    id
  } = req.params;
  const user = await User.delete(id);
  res.send(user);
});

// let user = []
// route.get('/', (req, res)=>{
//     res.send(user)
//     console.log(res, 'huyguyguyfgtygvg')
// })

module.exports = route;