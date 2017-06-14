const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.json({
    text: 'Hello World!'
  });
});

app.listen(3000);
