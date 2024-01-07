"use strict";
const axios = require("axios");
const serverAuth = require("../../bin/config").serverAuth;
const responseCode = require("../utils/response-code");
const responseMessage = require("../utils/response-message");
module.exports = class utils {
  constructor() {}

  static responseFormat(code = 200, data = {}, message = "") {
    return {
      code: code,
      data: data,
      message: message,
    };
  }

  static async post(
    url,
    data = {},
    isInternal = true,
    contentType = "application/json"
  ) {
    try {
      const payload = {
        url,
        data,
        timeout: 5000,
        method: "post",
        headers: {
          "content-type": contentType,
          Accept: "application/json",
        },
      };
      if (isInternal) {
        payload.headers.accessKey = serverAuth.accessKey;
      }
      let result = await axios(payload);
      return result.data;
    } catch (error) {
      if (error.response) {
        logger.error(
          { err: error.response },
          "error occured while making http post request"
        );

        throw new Error(error.response.data);
      } else if (error.request) {
        logger.error(
          { err: error.request },
          "error occured while making http post request"
        );

        throw new Error(error.request);
      } else {
        logger.error(
          { err: error.message },
          "error occured while making http post request"
        );
        throw new Error(error.message);
      }
    }
  }

  static async get(url, params = {}, isInternal = true) {
    try {
      const qs = params != null || params != undefined ? params : "";
      const payload = {
        params: qs,
        method: "get",
        timeout: constant.TIMEOUT,
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      };
      if (isInternal) {
        payload.headers.accessKey = serverAuth.accessKey;
      }
      let result = await axios.get(url, payload);
      return result.data;
    } catch (error) {
      if (error.response) {
        logger.error(
          { err: error.response },
          "error occured while making http get request"
        );

        throw new Error(error.response.data);
      } else if (error.request) {
        logger.error(
          { err: error.response },
          "error occured while making http get request"
        );

        throw new Error(error.request);
      } else {
        logger.error(
          { err: error.message },
          "error occured while making http get request"
        );
        throw new Error(error.message);
      }
    }
  }
  static errorMessage(details) {
    let res = this.responseFormat(responseCode.INVALID_REQUEST_PARAMS);
    res.message = responseMessage[res.code];
    if (details.type == "string.regex.base") {
      res.message = `${details.context.key} is invalid.`;
      res.data = {
        isJoi: true,
        key: details.context.key,
      };
    }
    if (details.type == "any.required") {
      res.message = `${details.context.key} is required.`;
      res.data = {
        isJoi: true,
        key: details.context.key,
      };
    }
    if (details.type == "number.base") {
      res.message = `${details.context.key} is invalid.`;
      res.data = {
        isJoi: true,
        key: details.context.key,
      };
    }
    if (details.type == "string.base") {
      res.message = `${details.context.key} is invalid.`;
      res.data = {
        isJoi: true,
        key: details.context.key,
      };
    }
    if (details.type == "any.allowOnly") {
      res.message = `${details.context.key} is invalid.`;
      res.data = {
        isJoi: true,
        key: details.context.key,
      };
    }

    if (details.type == "string.regex.invert.base") {
      res.message = `${details.context.key} must match pattern.`;
      res.data = {
        isJoi: true,
        key: details.context.key,
      };
    }

    if (details.type == "string.min") {
      res.message = `${details.context.key} length must be at least ${details.context.limit} characters long.`;
      res.data = {
        isJoi: true,
        key: details.context.key,
      };
    }
    if (details.type == "string.max") {
      res.message = `${details.context.key} length must be less than or equal to ${details.context.limit} characters long.`;
      res.data = {
        isJoi: true,
        key: details.context.key,
      };
    }

    if (details.type == "object.allowUnknown") {
      res.message = `${details.context.key} is not allowed.`;
      res.data = {
        isJoi: true,
        key: details.context.key,
      };
    }

    if (details.type == "string.length") {
      res.message = `${details.context.key} length must be ${details.context.limit} characters long.`;
      res.data = {
        isJoi: true,
        key: details.context.key,
      };
    }
    if (details.type == "number.greater") {
      res.message = `${details.context.key} must be greater`;
      res.data = {
        isJoi: true,
        key: details.context.key,
      };
    }
    return res;
  }

  static response(code, data, message) {
    let returnObj = { code: code };
    if (message) {
      returnObj.message = message;
    } else {
      returnObj.message = responseMessage[code];
    }
    if (data) {
      returnObj.data = data;
    }

    return returnObj;
  }
};
