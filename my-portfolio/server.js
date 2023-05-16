const express = require('express');
const bodyParser = require('body-parser');

const api = require('./backend/routes');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    'sucess': true
  });
});

// Backend routes (./backends/routes.)
// Redirects to /api
app.use('/api', api);

const PORT = 3080;
app.listen(PORT);

