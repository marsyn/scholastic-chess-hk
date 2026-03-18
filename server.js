const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;

// Read HTML files at startup
const htmlPath = path.join(__dirname, 'index.html');
const schoolsPath = path.join(__dirname, 'for-schools.html');

let html, schoolsHtml;

try {
  html = fs.readFileSync(htmlPath, 'utf8');
  console.log('Loaded index.html (' + html.length + ' bytes)');
} catch(e) {
  html = '<h1>Error: Could not load index.html</h1><p>' + e.message + '</p>';
  console.error('Failed to load index.html:', e.message);
}

try {
  schoolsHtml = fs.readFileSync(schoolsPath, 'utf8');
  console.log('Loaded for-schools.html (' + schoolsHtml.length + ' bytes)');
} catch(e) {
  schoolsHtml = '<h1>Error: Could not load for-schools.html</h1><p>' + e.message + '</p>';
  console.error('Failed to load for-schools.html:', e.message);
}

http.createServer((req, res) => {
  const url = req.url.split('?')[0].replace(/\/$/, '') || '/';

  if (url === '/for-schools') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Length': Buffer.byteLength(schoolsHtml)
    });
    res.end(schoolsHtml);
  } else {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Length': Buffer.byteLength(html)
    });
    res.end(html);
  }
}).listen(PORT, '0.0.0.0', () => {
  console.log('Scholastic Chess HK running on 0.0.0.0:' + PORT);
});
