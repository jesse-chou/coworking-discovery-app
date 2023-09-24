const express = require('express');

const coworkingLocationController = require('../controllers/coworkingLocationController');

const router = express.Router();

router.post('/create',
  coworkingLocationController.addLocation,
  (req, res) => res.status(200)
);

router.put('/',
  coworkingLocationController.updateLocation,
  (req, res) => res.status(200)
);

router.get('/',
  coworkingLocationController.getLocation,
  (req, res) => res.status(200)
)

router.delete('/',
  coworkingLocationController.deleteLocation,
  (req, res) => res.status(200)
)

module.exports =  router;