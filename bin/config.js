'use strict';

/**
 * Module dependencies.
 */
const _ = require('lodash'),
    chalk = require('chalk'),
    path = require('path');


/**
 * Validate NODE_ENV existence
 */
const validateEnvironmentVariable = function () {
    if(process.env.NODE_ENV){
        console.log(chalk.green('NODE_ENV is find',process.env.NODE_ENV));
    }else{
        console.error(chalk.red('+ Error: NODE_ENV is not defined! Using default development environment'));
        process.env.NODE_ENV = 'development';
    }
    // Reset console color
    console.log(chalk.white(''));
};

/**
 * Initialize global configuration
 */
const initGlobalConfig = function () {



    // Validate NODE_ENV existence
    validateEnvironmentVariable();
    // Get the default config
    const defaultConfig = require('./env/default') || {};

    let environmentConfig = {};
    if(process.env.NODE_ENV === 'development'){
        environmentConfig  = require('./env/development');
    }else if(process.env.NODE_ENV === 'production'){
        environmentConfig  = require('./env/production');
    }

   // Merge config files
    const config = _.merge(defaultConfig, environmentConfig);
    config.__base = path.join(__dirname,'../');
    return config;
};

/**
 * Set configuration object
 */
module.exports = initGlobalConfig();

//	Unit Test Case
if (require.main === module) {
    initGlobalConfig();
}
