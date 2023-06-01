const router = require('express').Router();
const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThought,
    addReaction,
    getReaction
    

} = require('../../controllers/thoughController');

// /api/thought
router.route('/')
      .post(createThought)
      .get(getThoughts);
      

router.route("/:id")
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThought)

router.route("/:thoughtId/reactions") 
    .post(addReaction)

    .get(getReaction)

   

module.exports = router;