/////////////   Q3.Write File   /////////////

var fs = require('fs');
fs.writeFile('test.txt','hello word',function(err){
    if(err)throw err;
    console.log('saved');
});