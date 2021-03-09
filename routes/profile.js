const {Router} = require('express')
const models = require("../models");
const {
  Profile
} = models;
const route = Router()

route.post("/", async (req, res) => {
  try{const profile = await Profile.create({
    Name: req.body.Name,
  })
  res.send(profile);
  console.log(JSON.stringify(profile))
  console.log(profile.Name);
} 
  catch(error){
    console.log(error.message)                                                                                                                     
  }
});

route.get("/", async (req, res) => {
  try{const profiles = await Profile.findAll();
  res.send(profiles);
}
  catch(error){
    console.log(error.message)                                                                                                                     
  }
});

module.exports = route