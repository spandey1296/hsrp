'use strict';
const axios = require('axios');
const serverAuth = require('../../bin/config').serverAuth;



module.exports = class utils {
    constructor() {
    }

    static responseFormat(code = 200, data = {}, message = "") {
        return {
            code: code,
            data: data,
            message: message
        };
    }

    static async post(url, data= {} ,isInternal = true, contentType = 'application/json') {
        try {
            const payload = {
                url,
                data,
                timeout :5000,
                method: 'post',
                headers: {
                    'content-type': contentType,
                    'Accept': 'application/json'
                }
            };
            if (isInternal) {
                payload.headers.accessKey =  serverAuth.accessKey
            }
            let result = await axios(payload);
            return result.data;
        }  catch (error) {
            if (error.response) {
                logger.error({err: error.response}, "error occured while making http post request");
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                throw new Error(error.response.data)
            } else if (error.request) {
                logger.error({err: error.request}, "error occured while making http post request");
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                throw new Error(error.request)
            } else {
                logger.error({err: error.message}, "error occured while making http post request");
                throw new Error(error.message)
            }

        }

    }

    static async get(url, params={}, isInternal = true) {
        try {
            const qs = (params != null || params != undefined) ? params : '';
            const payload = {
                params: qs,
                method: 'get',
                timeout : constant.TIMEOUT,
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json',
                },
            };
            if (isInternal) {
                payload.headers.accessKey =  serverAuth.accessKey
            }
            let result = await axios.get(url,payload);
            return result.data;
        }  catch (error) {
            if (error.response) {
                logger.error({err: error.response}, "error occured while making http get request");
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                throw new Error(error.response.data)
            } else if (error.request) {
                logger.error({err: error.response}, "error occured while making http get request");
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                throw new Error(error.request)
            } else {
                logger.error({err: error.message}, "error occured while making http get request");
                throw new Error(error.message)
            }

        }
    }

   
};
