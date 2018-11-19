const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const PORT = 3000;
const api = require('./routes/api');
const user = require('./routes/user');
const app = express();
app.use(cors());

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use('/api', api);
app.use('/user', user);

app.get('/', (req, res) => {
  res.send('Hello from server');
});

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
