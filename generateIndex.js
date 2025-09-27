const fs = require('fs');
const path = require('path');

// Verzeichnis der Projekte (aktuelles Verzeichnis)
const folderPath = __dirname;

// Lese alle Ordner im Root
const projects = fs.readdirSync(folderPath).filter(file => {
  return fs.statSync(path.join(folderPath, file)).isDirectory() && file !== '.git';
});


// Erstelle HTML-Content
let html = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meine Projekte</title>
  <style>
    body { font-family: sans-serif; padding: 2rem; }
    h1 { text-align: center; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; }
    a { display: block; padding: 1rem; background: #eee; text-align: center; text-decoration: none; color: #333; border-radius: 8px; }
    a:hover { background: #ccc; }
  </style>
</head>
<body>
  <h1>Meine Projekte</h1>
  <div class="grid">
`;

projects.forEach(project => {
  html += `<a href="./${project}/">${project}</a>\n`;
});

html += `
  </div>
</body>
</html>
`;

// Schreibe index.html
fs.writeFileSync(path.join(folderPath, 'index.html'), html);

console.log('index.html wurde erstellt!');
