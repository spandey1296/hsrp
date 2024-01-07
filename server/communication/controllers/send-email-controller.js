"use strict";

const services = require("../services");
const responseCode = require("../../utils/response-code");
const Util = require("../../utils/utils");

const sendEmail = async (req, res) => {
  let requestObject = req.body;
  let responseObject = null;
  try {
    let result = await services.sendEmailService(requestObject);
    responseObject = Util.response(result.code, result.data);
  } catch (error) {
    responseObject = Util.response(responseCode.SOME_INTERNAL_ERROR, null);
  }
  res.json(responseObject);
};

module.exports = sendEmail;
