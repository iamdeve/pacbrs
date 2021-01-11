const mongoose = require('mongoose');
const reservationSchema = new mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	userId: {
		type: String,
	},
	userEmail: {
		type: String,
	},
	bikeId: {
		type: String,
	},
	date: {
		type: String,
	},
});

module.exports = mongoose.model('Reservation', reservationSchema);
