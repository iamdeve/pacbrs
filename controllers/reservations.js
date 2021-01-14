const mongoose = require('mongoose');
const ReservationSchema = require('../models/reservations');
const nodemailer = require('nodemailer');
const BikeSchema = require('../models/bike');
const AuthSchema = require('../models/auth');

const { check, validationResult } = require('express-validator');

console.log(process.env.USER_EMAIL, process.env.USER_PWD);

var transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	port: 587,
	ignoreTLS: false,
	secure: false,
	auth: {
		user: 'support@pacbrs.com',
		pass: 'Zuxtox-xykti4-tovseb',
	},
});

module.exports.reserveValidation = [check('bikeId', 'Bike field should not empty').not().isEmpty(), check('date', 'date field should not empty').not().isEmpty()];
function formatAMPM(date) {
	console.log(date);
	date = new Date(date);
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0' + minutes : minutes;
	let strTime = hours + ':' + minutes + ' ' + ampm;
	return strTime;
}

module.exports.reserve = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { bikeId, date, userId, userEmail } = req.body;
	let pass = req.body.pass;

	try {
		let reservation = await ReservationSchema.findOne({ bikeId: bikeId });

		if (reservation && Date.parse(new Date(date)) === Date.parse(new Date(reservation.date))) {
			console.log(Date.parse(new Date(date)), Date.parse(new Date(reservation.date)));
			console.log(Date.parse(new Date(date)) === Date.parse(new Date(reservation.date)));
			return res.status(500).json({
				message: 'Bike Already Reserved at this time! Please select another bike or change the time',
			});
		} else {
			let newReservation = new ReservationSchema({
				_id: mongoose.Types.ObjectId(),
				userId: userId,
				userEmail: userEmail,
				bikeId: bikeId,
				date: date,
			});

			await newReservation.save();

			if (req.body.pass === undefined) {
				let user = await AuthSchema.findOne({ email: userEmail });
				console.log(user);
				if (user) {
					pass = user.pass;
				}
			}

			console.log(pass);
			let bike = await BikeSchema.findOne({ _id: bikeId });
			let newDate = new Date(newReservation.date).getMonth() + 1 + '/' + new Date(newReservation.date).getDate() + '/' + new Date(newReservation.date).getFullYear();
			// let time = new Date(newReservation.date).getHours() + ':' + new Date(newReservation.date).getMinutes();
			var mailOptions = {
				from: process.env.USER_EMAIL,
				to: userEmail,
				subject: 'Plano Athletic Club Bike Reservation System',
				html: `
					<h1>Welcome ${userEmail}</h1>
					<h2>Plano Athletic Club Bike Reservation System</h2>
					<p>You have booked the following bike:</p>
					<span><strong>Bike Model : </strong>${bike.bikeModel}</span><br/>
					<span><strong>Book Date : </strong>${newDate}</span><br/>
					<span><strong>Book Time : </strong>${formatAMPM(date)}</span><br/>
					<span><strong>Username : </strong>${userEmail}</span><br/>
					<span><strong>Password : </strong>${pass}</span><br/>
					<p>Please use the above Username/Password at pacbrs.com to log in (using the top right menu bar) and see your confirmed bike reservations.</p>
					`,
			};

			transporter.sendMail(mailOptions, function (error, info) {
				if (error) {
					return res.status(500).json({
						error: error.message ? error.message : error,
					});
				} else {
					console.log('Email sent: ' + info.response);
					return res.status(200).json({
						message: 'Bike reserved successfully! Please check your email for confirmation.',
					});
				}
			});
		}
	} catch (err) {
		return res.status(500).json({
			error: err.message ? err.message : err,
		});
	}
};
module.exports.get = async (req, res, next) => {
	let userId = req.user.id;
	if (userId) {
		try {
			let reservations = await ReservationSchema.find({ $or: [{ userId: userId }, { userEmail: req.user.email }] });
			// console.log(reservations);
			if (reservations) {
				return res.status(200).json({
					reservations,
				});
			}
		} catch (err) {
			console.log(err);
			return res.status(500).json({
				error: err.message ? err.message : err,
			});
		}
	} else {
		return res.status(500).json({
			error: 'No user found',
		});
	}
};

module.exports.delete = async (req, res, next) => {
	let userId = req.user.id;

	if (req.params.id === null || req.params.id === undefined || req.params.id === '') {
		res.status(500).json({ message: 'Payload should not be empty' });
	}

	let reservationId = req.params.id;
	try {
		let reservations = await ReservationSchema.findOneAndDelete({ _id: reservationId });

		if (reservations) {
			return res.status(200).json({
				message: 'Reservation Deleted Successfully',
			});
		} else {
			return res.status(500).json({
				error: 'no result found',
			});
		}
	} catch (err) {
		return res.status(500).json({
			error: err.message ? err.message : err,
		});
	}
};

module.exports.all = async (req, res, next) => {
	try {
		let reservations = await ReservationSchema.find();

		if (reservations) {
			return res.status(200).json({
				reservations,
			});
		}
	} catch (err) {
		return res.status(500).json({
			error: err,
		});
	}
};
