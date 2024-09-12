//  Create a middleware that logs all incoming requests to the console.

const express = require('express');
const app = express();

function logRequests(req, res, next) {
    // write the logic for request log here
  const url = req.url;
  const method = req.method;
  const timestamp = new Date.toISOString();
  console.log(`[${timestamp}] ${method} ${url}`);
  
  next();
}

app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

module.exports = app;
