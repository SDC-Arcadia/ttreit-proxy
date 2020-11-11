// eslint-disable-next-line no-unused-vars
const newrelic = require('newrelic');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 7199;

app.use(cors());

app.use((req, res, next) => {
  if (req.url === '/') {
    res.redirect(301, req.url + '?productId=1');
  }
  next();
});

app.use(express.static(path.join(__dirname, '../client')));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});