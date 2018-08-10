'use strict';


const jwt = require('jsonwebtoken');
const auth = require('basic-auth');
const login = require('./functions/login');
const user = require('./functions/user');
const config = require('../config/config.json');

module.exports = router => {



	router.post('/authenticate', (req, res) => {
		let id = req.body.id;
		let name = req.body.name;
		let photoprofile = req.body.photoprofile;
		let type = req.body.type;


			user.loginUser(id,name,photoprofile,type)

				.then(result => {

					const token = jwt.sign(result, config.secret, { expiresIn: 1440 });

					res.status(result.status).json({ message: result.message, token: token });

				})

				.catch(err => res.status(err.status).json({ message: err.message }));

	});

};
