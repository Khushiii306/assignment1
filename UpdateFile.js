/////////////   Q6.Update File   /////////////

var fs = require('fs');

fs.appendFile('file1.txt', ' This is my life.', function (err) {
if (err) throw err;
console.log('Updated!');
});


