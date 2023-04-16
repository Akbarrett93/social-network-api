const { Thought } = require("../models/Thought");

module.exports = {
  // Get thoughts
  getAll(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get one
  getOne(req, res) {
    Thought.findOne({ _id: req.params.userId })
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: "No thought with that ID!" });
        } else {
          res.json(thought);
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  // Create a new thought
  createUser(req, res) {
    Thought.create(req.body)
      .then((tData) => res.json(tData))
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought
  updateUser(req, res) {
    Thought.findByIdAndUpdate({ _id: req.params.thoughtId })
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: "No thought with that ID" });
        } else {
          res.json(thought);
          console.log("Thought updated");
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    Tought.findByIdAndDelete({ _id: req.params.thoughtId })
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: "No thought with that ID" });
        } else {
          res.json(thought);
          console.log("Thought updated");
        }
      })
      .catch((err) => res.status(500).json(err));
  },
};
