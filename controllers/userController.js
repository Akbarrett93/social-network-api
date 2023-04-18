const { User } = require("../models");

module.exports = {
  // Get users
  getAll(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get one
  getOne(req, res) {
    User.findById({ _id: req.params.userId })
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: "No user with that ID" });
        } else {
          res.json(user);
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },
  // Update a user
  updateUser(req, res) {
    User.findByIdAndUpdate({ _id: req.params.userId })
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: "No user with that ID" });
        } else {
          res.json(user);
          console.log("User updated");
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  // Delete user
  deleteUser(req, res) {
    User.findByIdAndDelete({ _id: req.params.userId })
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: "No user with that ID" });
        } else {
          res.json(user);
          console.log("User deleted");
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  // Add friend
  addFriend(req, res) {
    User.findByIdAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friend: req.params.friendId } },
      { new: true }
    )
      .then((friend) => {
        if (!friend) {
          res.status(404).json({ message: "Cannot add friend" });
        } else {
          res.json(friend);
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  // Delete friend
  deleteFriend(req, res) {
    User.findByIdAndDelete(
      { _id: req.params.userId },
      { $pull: { friend: req.params.friendId } },
      { new: true }
    )
      .then((friend) => {
        if (!friend) {
          res.status(404).json({ message: "No user with that ID" });
        } else {
          res.json(friend);
        }
      })
      .catch((err) => res.status(500).json(err));
  },
};
