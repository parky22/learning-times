const serverBuildConfig = require('../build');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(process.env.PORT, console.log(`Listening on ${process.env.PORT}`));
