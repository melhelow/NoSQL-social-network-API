const router = require('express').Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  addFriend,
  deleteFriend
} = require('../../controllers/userControllers');

// /api/users
router.route('/')
      .post(createUser)
      .get(getUsers); 

// getting by id
router.route("/:id")
      .get(getUserById)
      .put(updateUserById)
      .delete(deleteUserById)

// FRIENDS
router.route("/:userId/friends/:friendId")
      .post(addFriend)
      .delete(deleteFriend)



module.exports = router;