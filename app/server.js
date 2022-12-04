const { response } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const api = require("./backend/routes");
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    'success': true
  });
});

//Redirects ./api requests to 'const api' path (declarated line 3)
app.use('/api', api)

const PORT = process.env.APP_PORT;
app.listen(PORT);