// require('dotenv').config();
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(helmet());

app.use(favicon(__dirname + '/build/favicon.ico'));

// app.use(cors());

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () =>
  console.log(`Server is running on: http://localhost:${PORT}`));
