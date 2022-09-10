const router = require('express').Router();

const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  getFriends,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);

// get a user's friend list
router.route('/:userId/friends').get(getFriends);

// add a friend
router.route('/:userId/friends/:friendId').post(addFriend);

// delete friend
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
