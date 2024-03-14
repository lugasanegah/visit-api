const PatientService = require('../services/patient.service');

const patientService = new PatientService();

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await patientService.getAllPatients();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPatient = async (req, res) => {
  try {
    const newPatient = await patientService.createPatient(req.body);
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
