"use strict";

const { vehicleTemplateService } = require("../services");
const responseCode = require("../../utils/response-code");
const Util = require("../../utils/utils");

class vehicleTemplateController {
  async vehicleInfos(req, res) {
    let requestObject = req.body;
    let responseObject = null;
    try {
      let result = await vehicleTemplateService.vehicleInfo(requestObject);

      responseObject = Util.response(result.code, result.data);
    } catch (error) {
      responseObject = Util.response(responseCode.SOME_INTERNAL_ERROR, null);
    }
    res.json(responseObject);
  }

  async contactUs(req, res) {
    let requestObject = req.body;
    let responseObject = null;
    try {
      let result = await vehicleTemplateService.contactUs(requestObject);

      responseObject = Util.response(result.code, result.data);
    } catch (error) {
      responseObject = Util.response(responseCode.SOME_INTERNAL_ERROR, null);
    }
    res.json(responseObject);
  }
}

module.exports = new vehicleTemplateController();
