const fs = require('fs');
const path = require('path');

function readFileAsync(path, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

function writeFileAsync(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

async function processFile(filename) {
  const filePath = path.join(__dirname, filename);
  
  try {
    const data = await readFileAsync(filePath, 'utf8');
    const processed = data.toUpperCase();
    await writeFileAsync(filePath + '.processed', processed);
    return 'File processed successfully';
  } catch (err) {
    throw err;
  }
}

processFile('example2.txt')
  .then(result => console.log(result))
  .catch(err => console.error('Error:', err));