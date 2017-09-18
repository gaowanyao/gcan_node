var http = require('http');
var port = 3001;
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello world!"); //返回的是文本消息
    // res.writeHead(200,{'Content-Type':'text/html'});
    // res.end("<p>Hello world!</p >");  //返回的是html
}).listen(port);
console.log('Server started on localhost:' + port + ';press CTRL+C to terminate');
//每次都要重启node这个文件