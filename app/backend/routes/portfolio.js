const router = require('express').Router();

router.get('/', (req, res) => {
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

//-- -----------------------------------------------
router.get('/:id', (req, res) => {
  console.log("Reported ID: ", req.params.id);

  res.json({
    success: true,
    id: req.params.id
  });
});

router.post('/', (req, res) => {
  res.json(req.body)
});
//-- -----------------------------------------------

module.exports = router