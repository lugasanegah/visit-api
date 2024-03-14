const VisitQueue = require('../models/visitQueue.model');

class VisitQueueService {
  async function createVisitQueue(visitQueueData) {
    try {
      const visitQueue = new VisitQueue(visitQueueData);
      const savedVisitQueue = await visitQueue.save();
      return savedVisitQueue;
    } catch (error) {
      throw new Error('Failed to create visit queue');
    }
  }

  async function getAllVisitQueues() {
    try {
      const visitQueues = await VisitQueue.find();
      return visitQueues;
    } catch (error) {
      throw new Error('Failed to retrieve visit queues');
    }
  }

}


module.exports = VisitQueueService;
