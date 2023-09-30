const express = require('express');

const router = express.Router();

const CoworkingLocationController = require('../controllers/coworkingLocationController');

// Route handler to create a new location through middleware functions
router.post('/create',
  CoworkingLocationController.addLocation,
  (req, res) => res.status(200).json('Created Location')
);
 
// Route handler to get a location through middleware functions
router.get('/locations',
  CoworkingLocationController.getLocation,
  (req, res) => res.status(200).json(res.locals.foundLocations)
)

// Route handler to update an existing location through middleware functions
router.patch('/:name',
  CoworkingLocationController.updateLocation,
  (req, res) => res.status(200).json(res.locals.updatedLocation)
);

// Route handler to delete an existing location through middleware functions
router.delete('/:name',
  CoworkingLocationController.deleteLocation,
  (req, res) => res.status(200).json('Location Deleted')
)

module.exports =  router;