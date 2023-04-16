const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username Required"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email Required"],
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
});

userSchema.virtual("friendCount").get(function () {
  return `${this.friends.length}`;
});

const User = model("user", userSchema);

module.exports = User;
