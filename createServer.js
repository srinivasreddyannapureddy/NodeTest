var http = require('http');
var server = http.createServer((function (requ, resp){
    resp.writeHead(404, {"Content-Type" : "text/plain"});
    resp.end("Hello World!!!\n");
 }));
 server.listen(7000);