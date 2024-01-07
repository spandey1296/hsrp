'use strict';
const responseCode = require('../../utils/response-code');
const Util = require('../../utils/utils');
const Joi = require('@hapi/joi');

module.exports = async (request, response, next)  => {
    const baseSchema = Joi.object().keys({
        ip: Joi.string().ip(),
    });

    const extendedSchema = baseSchema.keys({
        userId: Joi.number(),
        devName: Joi.string().trim(),
        templateId: Joi.string().trim(),
        email: Joi.alternatives(Joi.array().items(Joi.string().trim().email()), Joi.string().trim().email()),
      
       
    });
    try {
        request.body = await Joi.validate(request.body, extendedSchema);
        next();
    } catch (error) {
        response.json(Util.errorMessage(error.details[0]));
    }

};