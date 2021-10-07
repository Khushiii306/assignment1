/////////////   Q2.Remove Directory   /////////////

const fs = require('fs');
const dirname = {async: "deletedir"};

fs.rmdir(dirname.async,(err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log(`${dirname.async} deleted!!`);
    }
})