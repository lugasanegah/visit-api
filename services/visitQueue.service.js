const VisitQueue = require('../models/visitQueue.model');

class VisitQueueService {
  async function createVisitQueue(patientId, room, doctor, description) {
    try {
      // Menghitung jumlah antrian yang sudah ada pada hari ini
      const today = new Date();
      const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
      const countToday = await VisitQueue.countDocuments({
        createdAt: { $gte: startOfDay, $lt: endOfDay },
        status: { $ne: 'completed' },
      });

      // Menghasilkan nomor antrian berikutnya
      const nextQueueNumber = countToday + 1;

      // Menyimpan antrian kunjungan ke database
      const visitQueue = new VisitQueue({
        patient: patientId,
        queueNumber: nextQueueNumber,
        room: room,
        doctor: doctor,
        description: description,
        status: 'pending',
      });
      await visitQueue.save();

      return visitQueue;
    } catch (error) {
      // Menghandle kesalahan jika terjadi
      console.error('Error while creating visit queue:', error);
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

  async function completeVisitQueue(visitQueueId) {
    try {
      // Mencari antrian kunjungan berdasarkan ID
      const visitQueue = await VisitQueue.findById(visitQueueId);

      // Memeriksa apakah antrian ditemukan
      if (!visitQueue) {
        throw new Error('Visit queue not found');
      }

      // Memperbarui status antrian menjadi 'completed'
      visitQueue.status = 'completed';
      await visitQueue.save();

      return visitQueue;
    } catch (error) {
      // Menghandle kesalahan jika terjadi
      console.error('Error while completing visit queue:', error);
      throw new Error('Failed to complete visit queue');
    }
  };

  async function getLatestVisitQueue() {
    try {
      // Mengambil antrian kunjungan terbaru dari database berdasarkan waktu pembuatan (createdAt)
      const latestVisitQueue = await VisitQueue.findOne().sort({ createdAt: -1 });

      return latestVisitQueue;
    } catch (error) {
      // Menghandle kesalahan jika terjadi
      console.error('Error while fetching latest visit queue:', error);
      throw new Error('Failed to get latest visit queue');
    }
  };

}


module.exports = VisitQueueService;
