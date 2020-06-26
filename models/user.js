const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Section = require("./section");

const userSchema = new Schema({
  name: {
    first: {
      type: String,
      lowercase: true,
    },
    last: {
      type: String,
      lowercase: true,
    },
  },
  email: {
    type: String,
    lowercase: true,
  },
  dateStarted: {
    type: Date,
    default: Date.now,
    required: true,
  },
  profilePicture: String,
  resume: String,
  greeting: {
    type: String,
    maxlength: 500,
  },
  bio: {
    type: String,
    maxlength: 5000,
  },
  sections: {
    title: {
      type: String,
    },
    subsections: [
      {
        type: Schema.Types.ObjectId,
        ref: "Section",
      },
    ],
  },
  contact: [
    {
      type: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
