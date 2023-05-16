const router = require('express').Router();

// DB Simulation
// Correct is '/' instead of '/portfolio'
router.get('/', (req, res) => {
  // DB Fake
  const data = [
    {
      id: 1,
      name: 'Fake Project',
      createdAt: '2023-05-10'
    },
  ];

  res.json({
    sucess: true,
    data            // Or data: data
  });
  
});

module.exports = router;
