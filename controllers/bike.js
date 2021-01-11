const mongoose = require('mongoose');
const BikeSchema = require('../models/bike');
const ReservationSchema = require('../models/reservations');

const { check, validationResult } = require('express-validator');

module.exports.bikeValidation = [check('bikeLabel', 'Bike field should not empty').not().isEmpty(), check('bikeModel', 'Bike Model field should not empty').not().isEmpty()];

module.exports.add = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { bikeLabel, bikeModel, desc } = req.body;
	try {
		let bike = await BikeSchema.findOne({ bikeLabel: bikeLabel });
		console.log(bike);
		if (bike) {
			return res.status(500).json({
				message: 'Bike already exist',
			});
		} else {
			let newBike = new BikeSchema({
				_id: mongoose.Types.ObjectId(),
				bikeLabel: bikeLabel,
				bikeModel: bikeModel,
				desc: desc,
			});

			await newBike.save();

			return res.status(200).json({
				message: 'Bike added sucessfully',
			});
		}
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({
			error: err.message ? err.message : err,
		});
	}
};
module.exports.get = async (req, res, next) => {
	try {
		let reservation = await ReservationSchema.find();
		let bikes = await BikeSchema.find();

		for (let i = 0; i < reservation.length; i++) {
			bikes = bikes.filter((bike) => {
				return bike._id.toString() !== reservation[i].bikeId.toString();
			});
		}
		if (bikes) {
			return res.status(200).json({
				bikes,
			});
		}
	} catch (err) {
		return res.status(500).json({
			error: err,
		});
	}
};

module.exports.delete = async (req, res, next) => {
	if (req.params.id === null || req.params.id === undefined || req.params.id === '') {
		res.status(500).json({ message: 'Payload should not be empty' });
	}
	let bikeId = req.params.id;
	try {
		let bikes = await BikeSchema.findOneAndDelete({ _id: bikeId });

		if (bikes) {
			return res.status(200).json({
				bikes,
			});
		} else {
			return res.status(500).json({
				error: 'no result found',
			});
		}
	} catch (err) {
		return res.status(500).json({
			error: err,
		});
	}
};
