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
}