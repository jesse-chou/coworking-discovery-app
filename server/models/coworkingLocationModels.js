const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// sets a coworkingSchema for the 'coworkingLocation' collection
const coworkingLocationSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  hours: {
    monday: { type: String, required: true },
    tuesday: { type: String, required: true },
    wednesday: { type: String, required: true },
    thursday: { type: String, required: true },
    friday: { type: String, required: true },
    saturday: { type: String, required: true },
    sunday: { type: String, required: true }
  },
  wifiSpeed: {
    down: { type: Number, required: true },
    up: { type: Number, required: true }
  },
  outlet: { type: Boolean, required: true },
  restroom: { type: Boolean, required: true }
})

// creates a model for the 'coworkingLocation' collection that will be part of the export
const CoworkingLocation = mongoose.model('coworkingLocations', coworkingLocationSchema);

// export module to be used in controller
module.exports = CoworkingLocation;