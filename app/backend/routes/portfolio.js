const router = require('express').Router();
const Portfolio = require('../models/Portfolio');

// Get Router ---------------------------------------
router.get('/', (req, res) => {
  const portfolio = Portfolio.find()

  res.json({
    success: true,
    data: portfolio
  })
});
//-- -----------------------------------------------
router.post('/', async (req, res) => {
  const Portfolio = new Portfolio({
    title: require.body.title,
    description: require.body.description,
  });

  try{
    const savedPortfolio = await portfolio.save()
    res.json({
      success: true,
      data: savedPortfolio
    })
  }
  catch(err){
    res.json({
      success: false,
      message: err
    })
  }

  // portfolio
  //   .save()
  //   .then((data) => {
  //     res.json({
  //       success: true,
  //       data
  //     })
  //   })
  //   .catch((err) => {
  //     res.json({
  //       success: false,
  //       message: err
  //     })
  //   })
});

module.exports = router