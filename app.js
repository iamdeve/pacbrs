const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const MONGOD_URI = process.env.MONGOD_URI || 'mongodb://localhost:27017/finpro';
const cors = require('cors');

mongoose.connect(MONGOD_URI, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(cors());

const route = '/api';

const authRoute = require('./routes/auth');
app.use(`${route}/auth`, authRoute);

const reservationRoute = require('./routes/reservations');
app.use(`${route}/reservation`, reservationRoute);

const bikeRoute = require('./routes/bike');
app.use(`${route}/bike`, bikeRoute);

app.use((req, res, next) => {
	const error = new Error('route not found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message,
		},
	});
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;
