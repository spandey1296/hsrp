"use strict";

const express = require("express");
const routes = express.Router();
const controller = require("./controllers");
const validate = require("./requests");

routes.post(
  "/vehicle/upload",
  validate.vehicleValidate,
  controller.vehicleInfo
);

module.exports = routes;
