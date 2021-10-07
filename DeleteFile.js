/////////////   Q8.Delete File   /////////////

var fs = require('fs');
fs.unlink('test.txt',function(err,file){
    if(err)throw err;
    console.log('saved');
});