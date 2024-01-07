"use strict";
const { vehicleTemplateDao } = require("../../dao-manager");
const responseCode = require("../../utils/response-code");
const path = require("path");

const utils = require("../../utils/utils");
const config = require("../../../bin/config");

const vehicleInfo = async (requestObject) => {
  let responseObject = {
    code: responseCode.SUCCESS,
    data: {},
    message: "",
  };
  try {
     await vehicleTemplateDao.insert(requestObject);
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

module.exports = vehicleInfo;
