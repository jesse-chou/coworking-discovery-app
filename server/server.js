const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const coworkingLocation = require('../server/models/coworkingLocationModels')

const app = express();

const apiRouter = require('./routes/api');

const PORT = 3000;

// MongoDB connection string
const MONGO_URI = "mongodb+srv://jessechou7:codesmith@starwars.cephl7x.mongodb.net/?retryWrites=true&w=majority";

// Method to connect to MongoDB database
mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'CoworkingLocationsDatabase'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// requests for static files
app.use(express.static(path.resolve(__dirname, '../client')))

// define route handlers. Requests will go to /api/...
app.use('/api', apiRouter);

// catch all error
app.use((req, res) => res.status(404).send("This is not what you were looking for!"))

// conditional to check if the node env is in production
if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// listens on PORT 3000
app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});

module.exports = app;