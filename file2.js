const http = require("http");

http.createServer(function(req, res){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>Hello I am a develope!</h1><br>");
    res.write("<p>We are developer</p>")
    res.write("<h1>BYE!</h1>")
    res.end();

}).listen(8080)