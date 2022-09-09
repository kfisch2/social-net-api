const router = require('express').Router();

const {
  getAllThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThoughts);

router.route('/:userId').post(createThought);

router
  .route('/:id')
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:userId/:thoughtId').put(addReaction).delete(deleteThought);
router.route('/:userId/:thoughtId/:reactionId').delete(deleteReaction);

module.exports = router;
