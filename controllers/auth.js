const mongoose = require('mongoose');
const Auth = require('../models/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const { check, validationResult } = require('express-validator');

module.exports.signUpValidator = [check('fullName', 'Full name field Should not empty').not().isEmpty(), check('email', 'Email field Should not empty').isEmail(), check('password', 'Purchasers field Should not empty').not().isEmpty()];

module.exports.signupWithEmail = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const email = req.body.email;
	const pass = req.body.password;
	const fullName = req.body.fullName;

	var hashP;
	Auth.findOne({ email: email })
		.exec()
		.then(async (result) => {
			if (result && result.email != '') {
				console.log('already');
				return res.status(500).json({
					message: 'Email already registered',
				});
			} else {
				await bcrypt.hash(pass, saltRounds, function (err, hash) {
					if (err) {
						console.log(err);
						return res.status(500).json({
							error: err,
						});
					} else {
						hashP = hash;
						console.log(hashP);
						const auth = new Auth({
							_id: mongoose.Types.ObjectId(),
							email: email,
							password: hashP,
							fullName: fullName,
						});
						auth.save()
							.then(async (result) => {
								const id = result._id;
								const email = result.email;
								const password = result.password;
								const fullName = result.fullName;
								const token = await jwt.sign({ id, email, password, fullName }, process.env.JWT_SECRET, { expiresIn: '60d' });
								res.status(201).json({
									message: 'Sign up successful',
									token: token,
								});
							})
							.catch((err) => {
								console.log(`last final error ${err}`);
								res.status(500).json({
									error: err.message ? err.message : err,
								});
							});
					}
				});
			}
		})
		.catch((err) => {
			console.log(`final error ${err}`);
			res.status(500).json({
				error: err.message ? err.message : err,
			});
		});
};

module.exports.loginValidator = [check('email', 'Price field Should not empty').not().isEmail(), check('password', 'Purchasers field Should not empty').not().isEmpty()];

module.exports.loginWithEmail = (req, res, next) => {
	const email = req.body.email;
	const pass = req.body.password;
	console.log(pass);
	Auth.findOne({ email: email })
		.then(async (result) => {
			if (result) {
				console.log(result);
				await bcrypt.compare(pass, result.password, async function (err, newResult) {
					if (err) {
						return res.status(501).json({
							error: err.message ? err.message : err,
						});
					} else {
						const id = result._id;
						const email = result.email;
						const password = result.password;
						const fullName = result.fullName;

						// console.log(newResult);
						if (newResult) {
							const token = jwt.sign({ id, email, password, fullName }, process.env.JWT_SECRET, { expiresIn: '60d' });
							// console.log(role);
							return res.status(201).json({
								token: token,
							});
						} else {
							return res.status(500).json({
								message: 'Invalid Password',
							});
						}
					}
				});
			} else {
				return res.status(500).json({
					message: 'Invalid email',
				});
			}
		})
		.catch((err) => {
			res.status(502).json({
				error: err.message ? err.message : err,
			});
		});
};
