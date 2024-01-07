require('../../utils/mongo-connection'); // required for unit test cases
const mongoose = require('mongoose');


const emailTemplateSchema = new mongoose.Schema({
    site: {type: String, enum: ['adda52', 'adda52rummy', 'royalpoker', 'default']},
    tag: {type:String, enum: ['MARKETING', 'REACTIVATION', 'IB_LOCK_BONUS','ADDA52'], default: 'ADDA52'},
    subject: String,
    message: String,
    devName: {type: String, unique: true, index: true},
    templateName: String,
    status: {type: String, enum: ['ACTIVE', 'INACTIVE']},
    sendType: {type: String, enum: ['INSTANT', 'NOT_INSTANT']},
    emailGateway: {type: String, enum: ['KENSCIO', 'AWS']},
    createdBy: Number,
    updatedBy: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('EmailTemplate', emailTemplateSchema, 'email_template');