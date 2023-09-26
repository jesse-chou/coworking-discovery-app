const CoworkingLocation = require('../models/coworkingLocationModels');

const CoworkingLocationController = {};

// METHOD TO ADD A NEW COWORKING LOCATION 
CoworkingLocationController.addLocation = async (req, res, next) => {
  // functionality to create the coworking location using the imported module and the passed in request

  try {
    // create the new data in the CoworkingLocation database
    await CoworkingLocation.create(req.body)
    console.log(req.body)

    // invoke the next middleware function in api.js
    return next()
  }

  catch (err) {
    return next({
      log: `CoworkingLocationController.addLocation: ERROR: ${err}`,
      message: { err: `Error occurred in CoworkingLocationController. Check server logs for details`},
      status: 500
    })
  }
}

// METHOD TO GET A COWORKING LOCATION 
CoworkingLocationController.getLocation = async (req, res, next) => {
  // deconstruct the name from the request parameters. The request name parameter is the name of the coworking location
  const { name } = req.params

  try {
    // declares a constant and sets it equal to the entire object that the name belongs to
    const foundLocation = await CoworkingLocation.findOne({ name: name })
    console.log(foundLocation)
    // error handling
    if (!foundLocation) {
      res.status(404).json({ message: `Location cannot be found. Please try again`})
    }
    
    res.locals.foundLocation = foundLocation;
    return next();
  }

  catch (err) {
     return next({
       log: `CoworkingLocationController.getLocation: ERROR: ${err}`,
       message: { err: `Error occurred in CoworkingLocationController.getLocation. Check server logs for details`},
       status: 500
     })
  }
}

// METHOD TO UPDATE A COWORKING LOCATION 
CoworkingLocationController.updateLocation = async (req, res, next) => {
  // deconstruct the name from the request parameters. The request name parameter is the name of the coworking location
  const { name } = req.params;

  console.log(name)

  // deconstruct the name from the request body. This will be the new name of location.
  const { secondName } = req.body;

  console.log(req.body)
  
  try {
    // declares a constant and sets it equal to the entire object that the name belongs to
    const foundLocation = await CoworkingLocation.findOne({ name: name })

    // error handling
    if (!foundLocation) {
      res.status(404).json({ message: `Location cannot be found. Please try again`})
    }
    
    // take the existing name and reassign it to the newName
    foundLocation.name = secondName;

    // declares another constant and sets it equal to saving foundLocation's new name
    const updatedLocation = await foundLocation.save();
    
    res.locals.updatedLocation = updatedLocation;
    return next();
  }

  catch (err) {
    return next({
      log: `CoworkingLocationController.updateLocation: ERROR: ${err}`,
      message: { err: `Error occurred in CoworkingLocationController. Check server logs for details`},
      status: 500
    })
  }
}

// METHOD TO DELETE A COWORKING LOCATION 
CoworkingLocationController.deleteLocation = async (req, res, next) => {

  const { name } = req.params
  
  // functionality to delete the reqbody
  try {
    // declares a constant and sets it equal to the entire object that the name belongs to
    const foundLocation = await CoworkingLocation.findOne({ name: name })

    // error handling
    if (!foundLocation) {
      res.status(404).json({ message: `Location cannot be found. Please try again`})
    }
    
    // delete the location from the database
    await foundLocation.deleteOne()

    return next();
  }

  catch (err) {
    return next({
      log: `CoworkingLocationController.deleteLocation: ERROR: ${err}`,
      message: { err: `Error occurred in CoworkingLocationController. Check server logs for details`},
      status: 500
    })
  }
}

module.exports = CoworkingLocationController;