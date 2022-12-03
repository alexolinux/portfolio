const router = require('express').Router();
const portfolio = require('./portfolio');

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