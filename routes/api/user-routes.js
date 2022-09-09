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

router
  .route('/:id')
  .get(getOneUser)
  .put(updateUser)
  // working
  .delete(deleteUser);

router.route('/:id/friends').get(getFriends);

router.route('/:userId/friends/:friendId').post(addFriend);

router.route('/:id/friends/:friendId').delete(removeFriend);

module.exports = router;
