const mongoose = require('mongoose');
const ReservationSchema = require('../models/reservations');

const { check, validationResult } = require('express-validator');

module.exports.reserveValidation = [check('bikeId', 'Bike field should not empty').not().isEmpty(), check('date', 'date field should not empty').not().isEmpty()];

module.exports.reserve = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { bikeId, date, userId, email } = req.body;

	try {
		let reservation = await ReservationSchema.find({ bikeId: bikeId });

		if (reservation.length > 0 || Date.parse(new Date(date)) === Date.parse(new Date(reservation.date))) {
			return res.status(500).json({
				message: 'Bike Already Booked',
			});
		} else {
			let newReservation = new ReservationSchema({
				_id: mongoose.Types.ObjectId(),
				userId: userId,
				userEmail: email,
				bikeId: bikeId,
				date: date,
			});

			await newReservation.save();

			return res.status(200).json({
				message: 'Bike reserved successfully',
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
			let reservations = await ReservationSchema.find({ userId: userId });
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
