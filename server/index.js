const express = require('express');
const webpack = require('webpack');
const morgan = require('morgan');
const path = require('path');
const webpackIsomorphicDevMiddleware = require('webpack-isomorphic-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const { clientBuild, serverBuild } = require('../build');
const clientCompiler = webpack(clientBuild);
const serverCompiler = webpack(serverBuild);

const app = express();
app.use(morgan('dev'));
// app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(webpackIsomorphicDevMiddleware(clientCompiler, serverCompiler));
app.use(webpackHotMiddleware(clientCompiler, { quiet: true }));

// app.get('/', (req, res) => res.send("hello"));

app.get('*', (req, res, next) => {
  console.log("HEYo");
  res.send("HEYY");
//   // res.isomorphic contains `compilation` & `exports` properties:
//   // - `compilation` contains the webpack-isomorphic-compiler compilation result
//   // - `exports` contains the server exports, usually one or more render functions
//   const { render } = res.locals.isomorphic.exports;

//   render({ req, res })
//   .catch((err) => setImmediate(() => next(err)));
});

app.listen(process.env.PORT, console.log(`Listening on ${process.env.PORT}`));
