const {Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');



class Blog extends Model {}

Blog.init(
  {
   
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    
    },
    blog_body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  },
  {
    sequelize,
   
  }
);

module.exports = Blog;