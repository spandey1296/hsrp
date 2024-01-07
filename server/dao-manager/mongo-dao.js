'use strict';
const path = require('path');


module.exports = class MongoDao {
    constructor(model) {
        this.model = model;
    }

    async find(criteria, projection = {}, options = {lean: true}) {
        try {
            return await this.model.find(criteria, projection, options);
        } catch (error) {
            logger.error({
                err: error,
                methodName: 'find',
                fileName: path.basename(__filename)
            });
            throw error;
        }
    }

    async findAndCountAll(criteria, projection = [], options = []) {
        try {
            const aggregationPipeline = [
                {
                    $match: criteria
                },
                {
                    $facet: {
                        total: [{ $count: 'count' }],
                        data: [...options, ...projection]
                    }
                }
            ];
            return await this.model.aggregate(aggregationPipeline);
        } catch (error) {
            logger.error({
                err: error,
                methodName: 'findAndCountAll',
                fileName: path.basename(__filename)
            });
            throw error;
        }
    }

    async findOne(criteria, projection = {}, options = {lean: true}) {
        try {
            return await this.model.findOne(criteria, projection, options);
        } catch (error) {
            logger.error({
                err: error,
                methodName: 'findOne',
                fileName: path.basename(__filename)
            });
            throw error;
        }
    }

    async update(criteria, dataToSet, options = {lean: true}) {
        try {
            return await this.model.updateOne(criteria, dataToSet, options);
        } catch (error) {
            logger.error({
                err: error,
                methodName: 'update',
                fileName: path.basename(__filename)
            });
            throw error;
        }
    }

    async insert(objToSave) {
        try {
            return await this.model.create(objToSave);
        } catch (error) {
            logger.error({
                err: error,
                // errorCode: error.code,
                methodName: 'insert',
                fileName: path.basename(__filename)
            });
            throw error;
        }
    }

}