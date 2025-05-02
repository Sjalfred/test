const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Render!');
});

server.listen(process.env.PORT || 3000);
