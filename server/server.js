const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

const rootPath = path.join(__dirname, '/..');

app.use(express.static(rootPath));

app.get('/testing', (req, res) => {
  res.send(200, 'testing');
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(rootPath + '/index.html'));
});

app.listen(port, () => {
  console.log('Example app listening on port', port);
});

module.exports = app;
