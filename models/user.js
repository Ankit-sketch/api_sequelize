'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {type:DataTypes.TEXT,allowNull: false,
      unique: true,  validate:{
        isEmail: true
      }},  

    username: {type:DataTypes.TEXT, allowNull: false,
      unique: true},

    bio:{type:DataTypes.TEXT,allowNull: true}
  }, 
  
  {
    sequelize,
    modelName: 'User',
  });


User.associate = models =>{
  User.hasOne(models.Profile, {
    onDelete: "cascade"
  })
}






  return User;
};