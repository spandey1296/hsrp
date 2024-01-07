"use strict";
const { emailTemplateDao } = require("../../dao-manager");
const responseCode = require("../../utils/response-code");
const path = require("path");

const utils = require("../../utils/utils");
const config = require("../../../bin/config");

const vehicleInfos = async (requestObject) => {
  let responseObject = {
    code: responseCode.SUCCESS,
    data: {},
    message: "",
  };
  try {
    let query = {};
    console.log(requestObject, "requestObject.....");
  } catch (error) {
    console.error({
      err: error,
      methodName: "vehicleInfos",
      fileName: path.basename(__filename),
    });
    throw error;
  }

  return responseObject;
};

module.exports = vehicleInfos;
