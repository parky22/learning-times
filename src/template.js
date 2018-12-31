const template = ({ appHtml, preloadedState, stylesMarkup }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Cows</title>
      ${stylesMarkup}
    </head>
    <body>
      <div id="app">${appHtml}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="client.bundle.js"></script>
    </body>
  </html>
`

export default template;
