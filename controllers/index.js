const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dasboardRoutes = require ('./dashboard-routes');
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dasboardRoutes)

module.exports = router;