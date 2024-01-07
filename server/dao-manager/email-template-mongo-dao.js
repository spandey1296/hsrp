const emailTemplate = require('../communication/models/email_templates');
const MongoDao = require('./mongo-dao');


class EmailTemplate extends MongoDao {

    constructor() {
        super(emailTemplate);
    }
}

module.exports = new EmailTemplate();
