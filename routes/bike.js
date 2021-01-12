const express = require('express');
const router = express.Router();
const bikeController = require('../controllers/bike');

router.post('/addBike', [bikeController.bikeValidation], bikeController.add);
router.get('/allBikes', bikeController.get);
router.get('/bikes', bikeController.all);
router.delete('/bike/:id', bikeController.delete);
module.exports = router;
