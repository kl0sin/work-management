const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const user = require('./routes/user');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from server');
});

app.use('/user', user);
app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
