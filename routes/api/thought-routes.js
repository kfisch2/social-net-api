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
  // working
  .get(getOneThought)
  // working
  .put(updateThought)

router
  .route('/:userId/:thoughtId')
  // working
  .put(addReaction)
  // working
  .delete(deleteThought);

router
  .route('/:userId/:thoughtId/:reactionId')
  // working
  .delete(deleteReaction);

module.exports = router;
