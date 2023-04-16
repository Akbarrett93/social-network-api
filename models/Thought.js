const mongoose = require("mongoose");
const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: X,
  },
  username: { type: String, required: true },
  reactions: {},
});

thoughtSchema.virtual("reactionCount").get(function () {
  return `${this.reactions.length}`;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
