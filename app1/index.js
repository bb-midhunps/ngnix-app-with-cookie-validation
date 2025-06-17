const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`App1 got message`);
});

app.get('/:dashboard_id', (req, res) => {
  const { dashboard_id } = req.params;
  res.send(`App1 - Dashboard ID received: ${dashboard_id}`);
});

app.listen(PORT, () => {
  console.log(`App1 listening on port ${PORT}`);
});