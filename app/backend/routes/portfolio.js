const router = require('express').Router();

const Portfolio = require('../models/Portfolio');

router.get('/', (req, res) => {

  res.json({
    success: true
  });
});

//-- -----------------------------------------------
router.get('/:id', (req, res) => {
  console.log("Reported ID: ", req.params.id);

  res.json({
    success: true,
    id: req.params.id
  });
});

router.post('/', (req, res) => {
  const portfolio = new Portfolio({
    title: req.body.title,
    description: req.body.description,
  });

  portfolio
    .save()
    .then((data) => {
      res.json({
        success: true,
        data
      })     
      
    })
    .catch((err) => {
      res.json({
        success: false,
        message: err
      })
    });
});
//-- -----------------------------------------------

module.exports = router