const http = require("http");
// const nm = require("./file3");
const l= require("./cybrom");
// const m=require("./cybrom");
// const v=require("./cybrom");

http.createServer((req, res)=>{
    res.write("<h1>Hello Everyone!!</h1>")
    // res.write(nm.myName());
    res.write(l.myCollege());
    
    res.write("<p>bye</p>")

    res.write(l.myNames());

    res.write("<p>TATA</p>")

    res.write(l.myCity());

    res.write("<h2>D</h2>")

    res.write(l.MySalary());

    res.write(l.myDate());

    res.end();

}).listen(8080);