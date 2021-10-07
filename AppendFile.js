/////////////   Q5.Append File   /////////////

var fs = require('fs');
fs.appendFile('test.txt','\nhello word',function(err){
    if(err)throw err;
    console.log('saved');
});
