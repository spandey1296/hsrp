'use strict';

const express=require('express');
const routes=express.Router();
const controller= require('./controllers');
const validate= require('./requests');


routes.post('/sendEmail',validate.sendEmail,controller.sendEmail);

module.exports= routes;
