"use strict";
const path = require("path");

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
        queryData.attributes = params.attributes;
      }
      if (params.limit) {
        queryData.limit = params.limit;
      }
      if (params.offset) {
        queryData.offset = params.offset;
      }
      if (params.order) {
        queryData.order = params.order;
      }
      return await this.model.findAll(queryData);
    } catch (error) {
      throw error;
    }
  }

  async findOne(query, attributes = {}) {
    try {
      return await this.model.findOne({
        raw: true,
        where: query,
        attributes: attributes,
      });
    } catch (error) {
      throw error;
    }
  }

  async insert(attributes, options = {}) {
    try {
      return await this.model.create(attributes, options);
    } catch (error) {
      throw error;
    }
  }
};
