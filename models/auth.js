const mongoose = require('mongoose');
const authSchema = new mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	fullName: {
		type: String,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
	pass: {
		type: String,
	},
});

module.exports = mongoose.model('Auth', authSchema);
