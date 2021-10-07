/////////////   Q4.Read File   /////////////


var fs = require('fs');
fs.readFile('test.txt',function(err){
    if(err)
    {
        console.log(err.message);
    }else{
        console.log('readfile');
    }
        
});