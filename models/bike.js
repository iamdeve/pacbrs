const mongoose = require('mongoose');
const bikeSchema = new mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	bikeLabel: {
		type: String,
		required: true,
		unique: true,
	},
	bikeModel: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
	},
});

module.exports = mongoose.model('Bike', bikeSchema);
