'use strict';

const mongoose = require("./connect");
const Schema = require("mongoose/lib/schema");

const userSchema = mongoose.Schema({
    name             : String,
	id : String,
	secret: { type: String, required: true },
    created_at        : String,
    photoprofile : String,
	type : Number
});

mongoose.Promise = global.Promise;

module.exports = mongoose.model('user', userSchema);