const express = require('express');
const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Welcome to Main App</h1>
        <a href="/app1/2">Go to App1 with Dashboard ID 2</a>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Main App running on port ${PORT}`);
});
