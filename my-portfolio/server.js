const express = require('express');

const app = express();
const PORT = 3080;

app.get('/', (req, res) => {
  res.json({
    'sucess': true
  });
});

// DB Simulation
app.get('/portfolio', (req, res) => {
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
    data: data
  });
  
});

app.listen(PORT);

