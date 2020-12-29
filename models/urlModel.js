const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: [true, "Slug must have a value"],
    unique: [true, "Slug must have a unique value"],
    dropDups: true,
  },
  url: {
    type: String,
    required: [true, "Url must have a value"],
    unique: [true, "Url must have a unique value"],
    dropDups: true,
  },
});

urlSchema.pre(/^find/, function () {
  this.select("-_id -__v");
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
