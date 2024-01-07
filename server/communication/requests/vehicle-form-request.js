"use strict";
const responseCode = require("../../utils/response-code");
const Util = require("../../utils/utils");
const Joi = require("@hapi/joi");

module.exports = async (request, response, next) => {
  const baseSchema = Joi.object().keys({
    plateNumber: Joi.number().required(),
    state: Joi.string().required(),
    vehicleNumber: Joi.number().required(),
    name: Joi.string().required(),
    mobile: Joi.number().required(),
    emailId: Joi.string().required(),
  });
  try {
    request.body = await Joi.validate(request.body, extendedSchema);
    next();
  } catch (error) {
    response.json(Util.errorMessage(error.details[0]));
  }
};
