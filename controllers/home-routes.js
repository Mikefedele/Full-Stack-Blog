const router = require('express').Router();
const { User, Blog, Comment } = require('../models');

router.get('/', (req,res) =>{
Blog.findAll({
  include: [User]
}).then((blogData)=>{
  const blogs = blogData.map(blog=>blog.get({plain: true}));
  res.render('home', {blogs, loggedIn: req.session.loggedIn})
}).catch(err=>res.status(500).json(err))
});

module.exports = router;