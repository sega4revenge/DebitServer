'use strict';

const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const logger        = require('morgan');
const router        = express.Router();

const server = require("http").createServer(app);
const port        = process.env.PORT || 8050;


app.use(bodyParser.json());
app.use(logger('dev'));
require('./routes')(router);


app.use('/api/v1', router);
server.listen(port, function () {
	console.log('Server listening at port %d', port);
});



