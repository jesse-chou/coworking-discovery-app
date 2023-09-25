const express = require('express');

const coworkingLocationController = require('../controllers/coworkingLocationController');

const router = express.Router();

router.post('/create',
  coworkingLocationController.addLocation,
  (req, res) => res.status(200).json('Created Location')
);

router.put('/update',
  coworkingLocationController.updateLocation,
  (req, res) => res.status(200).json('Updated Location')
);

router.get('/retrieve',
  coworkingLocationController.getLocation,
  (req, res) => res.status(200).json('Got Location')
)

router.delete('/delete',
  coworkingLocationController.deleteLocation,
  (req, res) => res.status(200).json('Deleted Location')
)

module.exports =  router;