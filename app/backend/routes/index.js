const router = require('express').Router();
const portfolio = require('./portfolio');

//import mongoConnection (used by mongoose module)
require('../db/mongoConnection');

//api (backend) ----------------------------------------
router.get('/', (req, res) => {
  res.json({
    success: false,
    message: "/api is forbiden."
  });
});

//Redirects ./portfolio to 'portfolio' path (portfolio.js)
router.use('/portfolio', portfolio);

module.exports = router