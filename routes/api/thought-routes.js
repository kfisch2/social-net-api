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
router.route('/').get(getAllThoughts).post(createThought);

router
  .route('/:thoughtId')
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

router
  .route('/:thoughtId/reactions')
  // working
  .post(addReaction);


router
  .route('/:thoughtId/reactions/:reactionId')
  // working
  .delete(deleteReaction);

module.exports = router;
