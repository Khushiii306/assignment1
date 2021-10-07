/////////////   Q7.Rename File   /////////////

var fs = require('fs');
var oldfilepath = './file/oldfile.txt';
var newfilepath = 'newfile.txt';
fs.rename(oldfilepath,newfilepath,renamecallback);

function renamecallback(error){
    if(error){
        console.log('erroe in remaining file');
        console.log(error.message);
    }else{
        console.log("rename succesfully");
    }
}
