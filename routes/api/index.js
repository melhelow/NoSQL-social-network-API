const router = require('express').Router();
const friendstRoutes = require('./friendstRoutes');
const usersRoutes = require('./userRoutes');

router.use('/friends', friendstRoutes);
router.use('/users', usersRoutes);

module.exports = router;