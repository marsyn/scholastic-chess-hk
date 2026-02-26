const http = require('http');
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Railway Test - It Works!</h1>');
}).listen(PORT, '0.0.0.0', () => console.log('Test server on port ' + PORT));
