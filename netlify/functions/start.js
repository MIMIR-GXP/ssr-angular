const serverless = require('serverless-http');
const {app} = require('../../dist/server/main.js');

exports.handler = serverless(app);
