const path = require('path');
const express = require('express');
const coworkingLocation = require('../server/models/coworkingLocationModels')
const mongoose = require('mongoose');

const app = express();

const apiRouter = require('./routes/api');

const PORT = 3000;

const MONGO_URI = "mongodb+srv://jessechou7:codesmith@starwars.cephl7x.mongodb.net/CoworkingLocationsDatabase?retryWrites=true&w=majority";

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

// define route handlers
app.use('/api', apiRouter);

app.post('/api/create', async (req, res) => {
  const x = await coworkingLocation.create(req.body);

  console.log(x)

  res.status(200).json('hello');
})

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