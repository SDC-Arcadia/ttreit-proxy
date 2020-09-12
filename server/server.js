const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 80;


app.use((req, res, next) => {
  if (req.url === '/') {
    res.redirect(301, req.url + '?productId=P001');
  }
  next();
});

app.use(express.static(path.join(__dirname, '../client')));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port http://localhost:${PORT}`);
});
