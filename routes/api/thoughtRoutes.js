const router = require('express').Router();
const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThought,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughController');

// /api/thought
router.route('/')
      .post(createThought)
      .get(getThoughts);
      

router.route("/:id")
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThought)

router.route("/:thoughtId/reactions/") 
    .post(addReaction)
    .delete(deleteReaction) 

   

module.exports = router;