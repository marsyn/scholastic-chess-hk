const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;

// Read HTML files at startup
const htmlPath = path.join(__dirname, 'index.html');
const schoolsPath = path.join(__dirname, 'for-schools.html');
const aboutUsPath = path.join(__dirname, 'about-us.html');

let html, schoolsHtml, aboutUsHtml;

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

try {
  aboutUsHtml = fs.readFileSync(aboutUsPath, 'utf8');
  console.log('Loaded about-us.html (' + aboutUsHtml.length + ' bytes)');
} catch(e) {
  aboutUsHtml = '<h1>Error: Could not load about-us.html</h1><p>' + e.message + '</p>';
  console.error('Failed to load about-us.html:', e.message);
}

http.createServer((req, res) => {
  const url = req.url.split('?')[0].replace(/\/$/, '') || '/';

  let content;
  if (url === '/for-schools') {
    content = schoolsHtml;
  } else if (url === '/about-us') {
    content = aboutUsHtml;
  } else {
    content = html;
  }

  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Content-Length': Buffer.byteLength(content)
  });
  res.end(content);
}).listen(PORT, '0.0.0.0', () => {
  console.log('Scholastic Chess HK running on 0.0.0.0:' + PORT);
});
