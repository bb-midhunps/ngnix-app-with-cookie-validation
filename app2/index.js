const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', async (req, res) => {
  try {

    res.send(`App2 got message`);
  } catch (error) {
    res.send('App2 error contacting App2');
  }
});

app.get('/:dashboard_id', async (req, res) => {
  try {
    const { dashboard_id } = req.params;
    res.send(`App2 - Dashboard ID received: ${dashboard_id}`);
  } catch (error) {
    res.send('App2 error contacting App2');
  }
});

app.listen(PORT, () => {
  console.log(`App2 listening on port ${PORT}`);
});