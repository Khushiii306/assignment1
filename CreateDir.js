/////////////   Q1.Create Directory   /////////////


const fs = require('fs');
const dirname = {async: "createdir"};

fs.mkdir(dirname.async,(err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log(`${dirname.async} created!!`);
    }
})

