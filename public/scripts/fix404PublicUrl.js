const { readFile, writeFile } = require('fs');
const { join } = require('path');

const publicUrl = '/toy.drive'; // Set this to your base URL path
const filePath = join('build', '404.html');

readFile(filePath, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/%PUBLIC_URL%/g, publicUrl);

  writeFile(filePath, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
