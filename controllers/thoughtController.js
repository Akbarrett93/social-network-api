const { Thought, User } = require("../models");

module.exports = {
  // Get thoughts
  getAll(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get one
  getOne(req, res) {
    Thought.findById({ _id: req.params.userId })
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
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneandUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: "No thought with that ID" });
        } else {
          res.json("Thought created!");
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought
  updateThought(req, res) {
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
  // Delete thought
  deleteThought(req, res) {
    Thought.findByIdAndDelete({ _id: req.params.thoughtId })
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: "No thought with that ID" });
        } else {
          res.json(thought);
          console.log("Thought removed");
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought reaction
  createReaction(req, res) {
    Thought.findOneandUpdate(
      { _id: req.params.thoughtId },
      { $push: { reaction: reaction } },
      { new: true }
    )
      .then((reaction) => {
        if (!reaction) {
          res.status(404).json({ message: "Cannot add reaction" });
        } else {
          res.json(reaction);
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  // Delete a thought reaction
  deleteReaction(req, res) {
    Thought.findOneandUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reaction: req.params.reactionId } },
      { new: true }
    )
      .then((reaction) => {
        if (!reaction) {
          res.status(404).json({ message: "No reaction with that ID" });
        } else {
          res.json(reaction);
        }
      })
      .catch((err) => res.status(500).json(err));
  },
};
