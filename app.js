const express = require('express');

const PORT = 1337;

const app = express();

// /
app.get('/', (req, res) => {
  res.send(`<html>
  <head>
    <title>Puppies and Kittens Galore!</title>
  </head>
  <body>
    <h1>Puppies and Kittens Galore!</h1>
  </body>
 </html>`);
});

// /puppies
app.get('/puppies', (req, res) => {
  res.send(`<html>
  <head>
    <title>Puppies</title>
  </head>
  <body>
    <h1>Puppies!</h1>
  </body>
 </html>`);
});

// /kittens
app.get('/kittens', (req, res) => {
  res.send(`<html>
  <head>
    <title>Kittens</title>
  </head>
  <body>
    <h1>Kittens!</h1>
  </body>
 </html>`);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
