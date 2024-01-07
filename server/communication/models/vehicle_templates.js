require("../../utils/mongo-connection");
const mongoose = require("mongoose");

const vehicleTemplateSchema = new mongoose.Schema(
  {
    plateNumber: String,
    state: String,
    vehicleNumber: String,
    name: String,
    mobile: Number,
    emailId: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "vehicleTemplate",
  vehicleTemplateSchema,
  "vehicle_template"
);
