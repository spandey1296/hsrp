"use strict";

const communication = require("../communication");

module.exports = function (app) {
  // app.use(auditLog)
  app.use("/api/v1/communication", communication);

  app.get("/", function (req, res, next) {
    res.json({ greet: "Hello World" });
  });
  app.get("/api/v1/hsrp/server_time", function (req, res, next) {
    res.json({ serverTime: Date.now() });
  });
};
