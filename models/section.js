const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  description: [
    {
      type: String,
    },
  ],
  list: [
    {
      type: Schema.Types.ObjectId,
      ref: "Section",
    },
  ],
  attribute: [
    {
      type: String,
    },
  ],
  image: {
    type: String,
  },
  link: {
    type: String,
  },
});

const Section = mongoose.model("Section", sectionSchema);

module.exports = {
  Section,
};
