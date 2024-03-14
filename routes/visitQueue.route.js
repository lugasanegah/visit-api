const express = require('express');
const router = express.Router();
const visitController = require('../controllers/visitQueue.controller');

router.get('/visit', patientController.getAllPatients);
router.post('/visit', patientController.createPatient);

module.exports = router;
