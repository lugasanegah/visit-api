const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');

router.get('/patients', patientController.getAllPatients);
router.post('/patients', patientController.createPatient);

module.exports = router;
