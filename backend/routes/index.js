const router = require('express').Router();

//api (backend) ----------------------------------------
router.get('/', (req, res) => {
  res.json({
    success: false,
    message: "/api is forbiden."
  });
});

router.get('/portfolio', (req, res) => {
  const data = [
    {
    id: 1,
    name: 'My First Project',
    created: '2019-09-10'
    },
    {
      id: 2,
      name: 'My Second Project',
      created: '2020-01-22'
    },
    {
      id: 3,
      name: 'My Third Project',
      created: '2020-03-11'
    },
  ];
  res.json({
    success: true,
    data: data
  });
});

module.exports = router