const mongoose = require('mongoose')

const Schema = mongoose.Schema

// sets a coworkingSchema for the 'coworkingLocation' collection
const coworkingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  hours: {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String
  },
  wifiSpeed: {
    down: Number,
    up: Number
  },
  outlet: {
    type: Boolean,
    required: true
  },
  restroom: {
    type: Boolean,
    required: true
  }
})

// creats a model for the 'coworkingLocation' collection that will be part of the export
const coworkingLocation = mongoose.model('coworkingLocations', coworkingSchema)

// export module to be used in controller
module.exports = coworkingLocation;