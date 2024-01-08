require("../../utils/mongo-connection");
const mongoose = require("mongoose");

const contactUs = new mongoose.Schema(
  {
    name: String,
    mobile: String,
    email: String,
    contactmsg: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contact_us", contactUs, "contact_us");
