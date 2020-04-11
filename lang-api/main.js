const fs = require('fs');
const http = require('http');

const messagePath = `${__dirname}/messages.json`;
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Headers': '*',
};

const server = http.createServer((req, res) => {
  switch(req.method) {
    case 'GET':
      const rs = fs.createReadStream(messagePath);
      res.writeHead(200, corsHeaders);
      rs.pipe(res);
      break;
    case 'PUT':
      const ws = fs.createWriteStream(messagePath);
      req.pipe(ws);
      res.writeHead(200, corsHeaders);
      res.end();
      break;
    case 'OPTIONS':
      res.writeHead(200, {
        ...corsHeaders,
        'Allow': 'OPTIONS, GET, PUT',
      });
      res.end();
      break;
  }
});

server.listen(8081, () => console.log('Server listening on port 8081'));
