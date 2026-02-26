const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;

// Read the HTML file at startup
const htmlPath = path.join(__dirname, 'index.html');
let html;
try {
  html = fs.readFileSync(htmlPath, 'utf8');
  console.log('Loaded index.html (' + html.length + ' bytes)');
} catch(e) {
  html = '<h1>Error: Could not load index.html</h1><p>' + e.message + '</p>';
  console.error('Failed to load HTML:', e.message);
}

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Content-Length': Buffer.byteLength(html)
  });
  res.end(html);
}).listen(PORT, '0.0.0.0', () => {
  console.log('Scholastic Chess HK running on 0.0.0.0:' + PORT);
});
