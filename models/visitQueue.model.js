const mongoose = require('mongoose');

const visitQueueSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  queueNumber: { type: Number, required: true },
  room: { type: String, required: true },
  doctor: { type: String, required: true },
  description: { type: String, required: true },
  timeStamp: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending'}
});

const VisitQueue = mongoose.model('VisitQueue', visitQueueSchema);

module.exports = VisitQueue;
