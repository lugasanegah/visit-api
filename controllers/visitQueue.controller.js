const express = require('express');
const router = express.Router();
const visitQueueService = require('../services/visitQueue.service');

const VisitQueue = new VisitQueueService();

exports.getAllVisitQueues = async (req, res) => {
  try {
    const visitQueues = await VisitQueue.getAllVisitQueues();
    res.status(200).json(visitQueues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createVisitQueue = async (req, res) => {
  try {
    const visitQueueData = req.body;
    const newVisitQueue = await VisitQueue.createVisitQueue(visitQueueData);
    res.status(201).json(newVisitQueue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add routes for updating, deleting visit queues, completing visit queues, etc.

module.exports = router;
