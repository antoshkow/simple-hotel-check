const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

app.use(favicon(__dirname + '/build/favicon.ico'));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () =>
  console.log(`Server is running on: http://localhost:${port}`));
