const fs= require("fs");

fs.open("dhairya.js","w",(err)=>{

    if(err) throw err;
    console.log("file Created!!")
})