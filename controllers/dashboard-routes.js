const router = require('express').Router();
const withAuth = require('../utils/auth');
const {Blog, User} = require('../models')
router.get('/', withAuth, async(req, res)=>{
  try {
    const blogData = await Blog.findAll({
      where: {userId: req.session.userId},
      include: [User]
    })
    const blogs = blogData.map(blog=>blog.get({plain: true}));
    // res.render('dashboard', {blogs, loggedIn: req.session.loggedIn})
  res.json(blogs)
  } catch (error) {
    res.json(error)
  }
})

module.exports = router;