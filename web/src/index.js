const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
  axios.get('http://app:3000/').then(({data}) => {
    res.send(`
      <h1>${data.text}</h1>
    `);
  });
});

app.listen(3001);
