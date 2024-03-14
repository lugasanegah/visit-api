const VisitQueueService = require('../services/visitQueue.service');

const queueService = new VisitQueueService();

exports.getAllVisitQueues = async (req, res) => {
  try {
    const visitQueues = await queueService.getAllVisitQueues();
    res.status(200).json(visitQueues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createVisitQueue = async (req, res) => {
  try {
    const { patientId, room, doctor, description } = req.body;
    const newVisitQueue = await queueService.createVisitQueue(patientId, room, doctor, description);
    res.status(201).json(newVisitQueue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.completeVisitQueue = async (req, res) => {
  try {
    const { visitQueueId } = req.params;
    const completedVisitQueue = await queueService.completeVisitQueue(visitQueueId);
    res.status(200).json(completedVisitQueue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLatestVisitQueue = async (req, res) => {
  try {
    const latestVisitQueue = await queueService.getLatestVisitQueue();
    res.status(200).json(latestVisitQueue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
