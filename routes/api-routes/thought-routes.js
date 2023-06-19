const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');


// Set up GET all and POST at /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

// Set up POST and DELETE at /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// Set up DELETE at /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;

