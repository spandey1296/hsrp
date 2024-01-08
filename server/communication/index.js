"use strict";

const express = require("express");
const routes = express.Router();
const controller = require("./controllers");
const validate = require("./requests");

routes.post(
  "/vehicle/upload",
  validate.vehicleValidate,
  controller.vehicleTemplateController.vehicleInfos
);

routes.post(
  "/vehicle/contact-us",
  controller.vehicleTemplateController.contactUs
);

module.exports = routes;
