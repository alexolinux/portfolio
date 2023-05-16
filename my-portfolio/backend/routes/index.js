const router = require('express').Router();

const portfolio = require('./portfolio');

router.get('/', (req, res) => {
  res.json({
    sucess: false,
    message: 'Not implemented yet'
  });
});

// Redirects to the portfolio page
router.use('/portfolio', portfolio);

module.exports = router;