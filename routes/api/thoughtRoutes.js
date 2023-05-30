const router = require('express').Router();
const {
    getThoughts,
    getThoughtById,
    createThought
} = require('../../controllers/thoughController');

// /api/thought
router.route('/')
      .post(createThought)
      .get(getThoughts);
      

router.route("/:id")
    .get(getThoughtById); 

module.exports = router;