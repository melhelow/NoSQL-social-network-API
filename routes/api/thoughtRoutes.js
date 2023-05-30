const router = require('express').Router();
const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThought
} = require('../../controllers/thoughController');

// /api/thought
router.route('/')
      .post(createThought)
      .get(getThoughts);
      

router.route("/:id")
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThought)

module.exports = router;