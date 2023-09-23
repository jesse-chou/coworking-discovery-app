const path = require('path');
const express = require('express');

const app = express();

const apiRouter = require('./routes/api');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// requests for static files
app.use(express.static(path.resolve(__dirname, '../client')))

// define route handlers
app.use('/api', apiRouter);

// catch all error
app.use((req, res) => res.status(404).send("This is not what you were looking for!"))

// get request for root file. send 200 status
app.get('/', (req, res) => {
  return res.status(200)
})

// conditional to check if the node env is in production
if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`)
})

module.exports = { app }