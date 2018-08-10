"use strict";

const user = new require("../models/user");
const bcrypt = new require("bcryptjs");
const speedsms = new require("../functions/speedsms");
const randomstring = new require("randomstring");
const nodemailer = new require("nodemailer");
const ObjectId = require("mongodb").ObjectID;




exports.loginUser = (id,name,photoprofile, type) =>

	new Promise((resolve, reject) => {

		if (photoprofile == "null" || photoprofile == "") {
			console.log("profile null");
			photoprofile = "no_avatar.png";
		}
		user.findOne({"id" : id})
			.then(user =>{
				if(user){

						resolve({status: 200, user: user});

				}else{
					var d = new Date();
					var timeStamp = d.getTime();
					let newUser = new User();
					newUser.id = id;
					newUser.name = name;
					newUser.type = type;
					newUser.photoprofile = photoprofile;
					newUser.create_at = timeStamp;
					newUser.save();
					resolve({status: 200, user: user});
				}
			})
			// .then(result => resolve({status: 200, message: "Khởi tạo thành công", user: result}))
			.catch(err => {
				reject({status: 500, message: "Lỗi server"});
			})
	});
