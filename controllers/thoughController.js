const { Thought } = require("../models")

module.exports = {

    async getThoughts(req, res) {
        try {
          const thought = await Thought.find();
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      async getThoughtById(req, res) {
        try {
          const thought = await Thought.findById(req.params.id);
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      async createThought(req, res) {
        try {
          const dbThoughtData = await Thought.create(req.body);
          res.json(dbThoughtData );
        } catch (err) {
          res.status(500).json(err);
        }
      },
      async updateThoughtById(req, res) {
        try {
          const thought = await Thought.findByIdAndUpdate(
            req.params.id,
            req.body
          );
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      async deleteThought(req,res) {
        try{
          const thought =await Thought.findByIdAndDelete({_id: req.params.id});
          res.json(thought);
        } catch(err) {
          res.status(500).json(err);
        }
      },

      async addReaction(req, res) {
        try {
          const reaction = await Thought.findByIdAndUpdate(
            req.params.reactionId,
            {
              $push: {
                reactions: req.params.reactionId
              }
            }
          );
          res.json(reaction);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      async deleteReaction(req, res) {
        try {
          const reaction = await Thought.findByIdAndUpdate(
            req.params.reactionId,
            {
              $pull: {
                reactions: req.params.reactionId
              }
            }
          );
          res.json(reaction);
        } catch (err) {
          res.status(500).json(err);
        }
      }




};