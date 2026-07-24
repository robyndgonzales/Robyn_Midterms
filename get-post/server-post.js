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


// ADD POST FORM
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index-post.html'));
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/process-post', (req, res) => {
  const { first_name, last_name } = req.body;

  if (!first_name || !last_name) {
    return res.status(400).json({
      error: 'Both first_name and last_name are required.'
    });
  }

  res.status(200).json({
    message: 'Form submitted successfully.',
    first_name,
    last_name
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

