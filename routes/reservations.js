const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservations');
const auth = require('../middleware/auth');

router.post('/reserve', [reservationController.reserveValidation], reservationController.reserve);
router.get('/getReservation', auth.verify, reservationController.get);
router.get('/allReservations', reservationController.all);
router.delete('/:id', auth.verify, reservationController.delete);

module.exports = router;
