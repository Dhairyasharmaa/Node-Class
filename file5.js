const fs= require("fs");
let mydata="hi Karma!"

    fs.appendFile("dhairya.txt",mydata, (err)=>{
        if(err) throw err
        console.log("file Succesfully Created!"); 
    })