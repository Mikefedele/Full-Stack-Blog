const { Blog } = require("../models");

const blogSeeds = [
  {
    title: "Bootstrap",
    blog_body:
      "Bootstrap is a very useful tool for easily creating the front end",
    userId: 1,
  },
  {
    title: "ORM",
    blog_body: "ORM is very helpful for working with & manipulating data",
    userId: 1,
  },
  {
    title: "MVC",
    blog_body:
      "Structuring MVC correctly makes your code more readable and easier to maintain",
    userId: 2,
  },
];

const seedBlog = () => Blog.bulkCreate(blogSeeds);

module.exports = seedBlog;
