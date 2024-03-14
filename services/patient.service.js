const Patient = require('../models/patient.model');

class PatientService {
  async getAllPatients() {
    try {
      return await Patient.find();
    } catch (error) {
      throw error;
    }
  }

  async createPatient(patientData) {
    try {
      const newPatient = new Patient(patientData);
      return await newPatient.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PatientService;
