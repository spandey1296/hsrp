"use strict";
const responseCode = require("../../utils/response-code");
const Util = require("../../utils/utils");
const Joi = require("@hapi/joi");

module.exports = async (request, response, next) => {
  const baseSchema = Joi.object().keys({
    plateNumber: Joi.string().required(),
    state: Joi.string().required(),
    vehicleNumber: Joi.string().required(),
    name: Joi.string().required(),
    mobile: Joi.string().required(),
    emailId: Joi.string().required(),
  });
  try {
    request.body = await Joi.validate(request.body, baseSchema);
    next();
  } catch (error) {
    console.log(error, "error..", error.details);
    response.json(Util.errorMessage(error.details[0]));
  }
};
