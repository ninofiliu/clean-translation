const fs = require('fs');
const http = require('http');

const messagePath = `${__dirname}/messages.json`

const server = http.createServer((req, res) => {
  switch(req.method) {
    case 'GET':
      const rs = fs.createReadStream(messagePath);
      res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
      });
      rs.pipe(res);
      break;
    case 'PUT':
      const ws = fs.createWriteStream(messagePath);
      req.pipe(ws);
      req.on('end', () => {
        res.writeHead(200, {
          'Access-Control-Allow-Origin': '*',
        });
        res.end();
      });
      break;
  }
});

server.listen(8081, () => console.log('Server listening on port 8081'));
