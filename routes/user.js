const {
  Router
} = require("express");
const models = require("../models");

//here User is the table name in the database 
//if we are making the table with the name of the "User" then here in the text editor in the model folder the name will be shown as "user" but in the database it will be shown as same as we passed that is "User" but in plural ie "Users"...............but if we pass small letter first as user then the name will be shown as "user" in text editor as well as database

const {
  User
} = models;
const route = Router();

route.post("/", async (req, res) => {
  try{const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    bio: req.body.bio
  })
  res.send(user);
  console.log(JSON.stringify(user))
  console.log(user.bio);
} 
  catch(error){
    console.log(error.message)                                                                                                                    
  }
});

// route.get("/", async (req, res) => {
//   const users = await User.findAll();
//   res.send(users);
// });

// route.get("/", async (req, res) => {
//   try{
//     const users = await User.findAll();
//     res.send(users);
//   }
//     catch(error){
//       console.log(error.message)                  
//     }
//   });

route.get("/", async (req, res) => {
  try{
    const users = await User.findAll();
  res.send(users);
}
  catch(error){
    console.log(error.name)                                                                                                                     
  }
});


route.get("/:id", async (req, res) => {
  const {
    id
  } = req.params;
  const user = await User.findByPk(id);
  res.send(user);
});

route.put("/:id", async (req, res) => {
  const {
    id
  } = req.params;
  const user = await User.update(id);  
  res.send(user);
});


route.delete("/:id", async (req, res) => {
  const {
     id
  } = req.params;
  const user = await User.destroy({where:{
    id:id
  }});
  res.send("deleted successfully");
  console.log(JSON.stringify(user));
});

module.exports = route;  