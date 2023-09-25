const CoworkingLocation = require('../models/coworkingLocationModels');

const coworkingLocationController = {};

coworkingLocationController.addLocation = async (req, res, next) => {
  // functionality to create the coworking location using the imported module and the passed in request
  await CoworkingLocation.create(req.body);
  console.log(req.body);

  // invoke the next middleware function in api.js
  return next();
}

coworkingLocationController.updateLocation = (req, res, next) => {

  return next();
}

coworkingLocationController.getLocation = (req, res, next) => {
  // write functionality to get location

  return next();
}

coworkingLocationController.deleteLocation = async (req, res, next) => {
  // functionality to delete the reqbody
  await CoworkingLocation.deleteOne(req.body)
  
  return next();
}


module.exports = coworkingLocationController;