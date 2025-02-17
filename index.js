const express = require('express');
const app = express();
const data = require('./data')


app.get('/', (req, res) => {
  res.header({ "Header": "Random Image API" });
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
