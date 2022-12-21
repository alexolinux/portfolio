const router = require('express').Router();
const Portfolio = require('../models/Portfolio');

router.get('/', (req, res) => {
  const portfolio = Portfolio.find()
  
  res.json({
    success: true,
    data: portfolio
  });
});

router.post('/', async (req, res) => {
  const portfolio = new Portfolio({
    title: req.body.title,
    description: req.body.description
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

/*   portfolio
  // save() is the action
  // then() is what I will do if succeed
  // catch() is what I will do if not succeed.
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
    }); */
});

//-- -----------------------------------------------
router.get('/:id', (req, res) => {
  console.log("Reported ID: ", req.params.id);

  res.json({
    success: true,
    id: req.params.id
  });
});
//-- -----------------------------------------------

module.exports = router