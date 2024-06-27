const http = require("http");
const fs= require("fs");

http.createServer((req, res)=>{

    fs.readFile("d.txt",(err,data)=>{
        // if (err) throw err
        res.write(data);
        res.end("....Server End!");
        
    })
    
  
    

}).listen(8000)