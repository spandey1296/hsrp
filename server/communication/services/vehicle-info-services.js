"use strict";
const { vehicleTemplateDao, contactUsDao } = require("../../dao-manager");
const responseCode = require("../../utils/response-code");
const path = require("path");

class vehicleTemplateService {
  async vehicleInfo(requestObject) {
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
  }

  async contactUs(requestObject) {
    let responseObject = {
      code: responseCode.SUCCESS,
      data: {},
      message: "",
    };
    try {
      await contactUsDao.insert(requestObject);
    } catch (error) {
      console.error({
        err: error,
        methodName: "contactus",
        fileName: path.basename(__filename),
      });
      throw error;
    }

    return responseObject;
  }
}

module.exports = new vehicleTemplateService();
