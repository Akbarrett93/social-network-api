const mongoose = require("mongoose");
const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    require: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    get: () => moment(new Date()).format("MM/DD/YYYY"),
  },
  username: { type: String, required: true },
  reactions: [reactionSchema],
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
});

const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    require: true,
    maxLength: 280,
  },
  username: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    get: () => moment(new Date()).format("MM/DD/YYYY"),
  },
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
});

thoughtSchema.virtual("reactionCount").get(function () {
  return `${this.reactions.length}`;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
