"use strict";
const { emailTemplateDao } = require("../../dao-manager");
const responseCode = require("../../utils/response-code");
const path = require("path");

const utils = require("../../utils/utils");
const config = require("../../../bin/config");

const sendEmailToUser = async (requestObject) => {
  let responseObject = {
    code: responseCode.SUCCESS,
    data: {},
    message: "",
  };
  try {
    let query = {};
    console.log(requestObject, "requestObject.....");
  } catch (error) {
    logger.error({
      err: error,
      methodName: "sendSmsToUser",
      fileName: path.basename(__filename),
    });
    throw error;
  }

  return responseObject;
};

module.exports = sendEmailToUser;
