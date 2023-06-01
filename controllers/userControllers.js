const { User } = require("../models")

module.exports = {

    async getUsers(req, res) {
        try {
          const users = await User.find().populate("friends");
          res.json(users);
        } catch (err) {
          res.status(500).json(err);
        }
      },
  // create a new user
    async createUser(req, res) {
      try {
        const dbUserData = await User.create(req.body);
        res.json(dbUserData);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    async getUserById(req, res) {
      try {
        const user = await User.findById(req.params.id);
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    async updateUserById(req, res) {
      try {
        const user = await User.findByIdAndUpdate(
          req.params.id,
          req.body
        );
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    async deleteUserById(req, res) {
      try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    async addFriend(req, res) {
      try {
        const user = await User.findByIdAndUpdate(
          req.params.userId,
          {
            $push: {
              friends: req.params.friendId
            }
          }
        );
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    async deleteFriend(req, res) {
      try {
        const user = await User.findByIdAndUpdate(
          req.params.userId,
          {
            $pull: {
              friends: req.params.friendId
            }
          }
        );
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    }
};