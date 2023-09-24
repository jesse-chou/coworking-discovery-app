const models = require('../models/coworkingLocationModels');

const coworkingLocationController = {};

coworkingLocationController.addLocation = async (req, res, next) => {
  // write functionality to add location


  await models.create(req.body);
  console.log(req.body);

  return next();
}

coworkingLocationController.updateLocation = (req, res, next) => {

  return next();
}

coworkingLocationController.getLocation = (req, res, next) => {
  // write functionality to get location

  return next();
}

coworkingLocationController.deleteLocation = (req, res, next) => {

  return next();
}


module.exports = coworkingLocationController;