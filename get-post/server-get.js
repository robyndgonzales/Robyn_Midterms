//Robyn Gonzales
const express = require('express');
const app = express();
const PORT = 3001;

/*app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/user', (req, res) => {
  const userId = req.query.id;

  if (!userId) {
    return res.status(400).send('The id query parameter is required.');
  }

  res.send(`User ID is ${userId}`);
});*/

//Add GET FORM
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index-get.html'));
});

app.get('/process-get', (req, res) => {
  const { first_name, last_name } = req.query;

  if (!first_name || !last_name) {
    return res.status(400).json({
      error: 'Both first_name and last_name are required.'
    });
  }

  res.json({
    first_name,
    last_name
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
