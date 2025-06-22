const fs = require('fs');
const path = require('path');

function processFile(filename, callback) {

  const filePath = path.join(__dirname, filename);
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    
    try {
      const processed = data.toUpperCase();
      fs.writeFile(filePath + '.processed', processed, (err) => {
        if (err) {
          return callback(err);
        }
        callback(null, 'File processed successfully');
      });
    } catch (parseErr) {
      callback(parseErr);
    }
  });
}


processFile('example.txt', (err, result) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log(result);
});