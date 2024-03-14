const express = require('express');
const router = express.Router();
const visitQueueController = require('../controllers/visitQueue.controller');

router.get('/visit', visitQueueController.getAllVisitQueues);
router.post('/visit', visitQueueController.createVisitQueue);
router.put('/visit/:visitQueueId/complete', visitQueueController.completeVisitQueue);
router.get('/visit/latest', visitQueueController.getLatestVisitQueue);

module.exports = router;
