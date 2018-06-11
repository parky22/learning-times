const template = ({ appHtml }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Cows</title>
    </head>
    <body>
      <div id="app">${appHtml}</div>
      <script src="client.bundle.js"></script>
    </body>
  </html>
`

export default template;
