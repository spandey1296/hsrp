'use strict';
const path = require('path');
const logger = require('../../utils/logger').logger;

module.exports = class Dao {
    constructor(model) {
        this.model = model;
    }

    async find(params) {
        try {
            let queryData = {
                raw: true,
                where: params.query,
            };
            if (params.attributes && params.attributes.length) {
                queryData.attributes = params.attributes
            }
            if (params.limit) {
                queryData.limit = params.limit
            }
            if (params.offset) {
                queryData.offset = params.offset
            }
            if (params.order) {
                queryData.order = params.order
            }
            return await this.model.findAll(queryData);
        } catch (error) {
            logger.error({
                err: error,
                methodName: 'find',
                fileName: path.basename(__filename)
            });
            throw error;
        }
    }

    async findOne(query, attributes = {}) {
        try {
            return await this.model.findOne({
                raw: true,
                where: query,
                attributes: attributes
            });
        } catch (error) {
            logger.error({
                err: error,
                methodName: 'findOne',
                fileName: path.basename(__filename)
            });
            throw error;
        }
    }

    async update(query, attributes) {
        try {
            if (Object.keys(attributes).length == 0 || Object.keys(query).length == 0) {
                throw new Error('Update parameters missing');
            }
            return await this.model.update(attributes, {
                where: query
            });
        } catch (error) {
            logger.error({
                err: error,
                methodName: 'update',
                fileName: path.basename(__filename)
            });
            throw error;
        }
    }

    async insert(attributes, options = {}) {
        try {
            return await this.model.create(attributes, options);
        } catch (error) {
            logger.error({
                err: error,
                methodName: 'insert',
                fileName: path.basename(__filename)
            });
            throw error;
        }
    }

    async delete(query) {
        try {
            if (Object.keys(query).length == 0) {
                throw new Error('Delete parameters missing');
            }
            return await this.model.destroy({
                where: query
            });
        } catch (error) {
            logger.error({
                err: error,
                methodName: 'delete',
                fileName: path.basename(__filename)
            });
            throw error;
        }
    }

    async findOrCreate(query, data = {}) {
        try {
            if (Object.keys(query).length == 0 || Object.keys(data).length == 0) {
                throw new Error('FindOrCreate parameters missing');
            }
            return await this.model.findOrCreate({
                where: query,
                defaults: data
            });
        } catch (error) {
            logger.error({
                err: error,
                methodName: 'findOrCreate',
                fileName: path.basename(__filename)
            });
            throw error;
        }
    }

    async updateOrCreate(query, data = {}) {
        try {
            if (Object.keys(query).length == 0 || Object.keys(data).length == 0) {
                throw new Error('UpdateOrCreate parameters missing');
            }
            let update = 0,
                created = {};
            let user = await this.model.findOne({
                where: query
            });
            if (user) {
                [update] = await this.model.update(data, {
                    where: query
                });
            } else {
                created = await this.model.create(data);
            }
            return { update, created };
        } catch (error) {
            logger.error({
                err: error,
                methodName: 'updateOrCreate',
                fileName: path.basename(__filename)
            });
            throw error;
        }
    }

}