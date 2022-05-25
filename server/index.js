const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('build'));

app.get('/', (_req, response) => {
  response.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.get('*', (request, response) => {
  response.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  response.sendFile(path.resolve(__dirname, `../dist/${request.url}`));
});

const port = 3434;
app.listen(port);
// eslint-disable-next-line no-console
console.log(`Started server on http://localhost:${port}`);
