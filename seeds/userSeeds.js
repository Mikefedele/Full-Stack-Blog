const { getMaxListeners } = require('process');
const { User } = require('../models');

const userSeeds = [
  {
    userName: 'codingKid',
    email: 'ckid@gmail.com',
    password: '123456'
  },
  {
    userName: 'PJfan',
    email: 'versus@email.com',
    password: 'vedder10',
  }
  
];

const seedUser = () => User.bulkCreate(userSeeds);

module.exports = seedUser;