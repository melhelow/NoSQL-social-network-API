const router = require('express').Router();
const {
  createUser,
  getUsers
} = require('../../controllers/userControllers');

// /api/users
router.route('/')

.post(createUser)
.get(getUsers);



module.exports = router;