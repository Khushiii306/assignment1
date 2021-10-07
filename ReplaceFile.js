/////////////   Q4.Replace File   /////////////


var fs = require('fs');

fs.writeFile('file3.txt', 'helo i am khushbu.', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});