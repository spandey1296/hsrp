require("../../utils/mongo-connection");
const mongoose = require("mongoose");

const vehicleTemplateSchema = new mongoose.Schema(
  {
    plateNumber: Number,
    state: String,
    vehicleNumber: Number,
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
