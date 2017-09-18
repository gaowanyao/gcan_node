var http = require('http');
var port = 3001;
http.createServer(function(req, res) {

    // console.log(req.url);
    // 规范化 url，去掉查询字符串、可选的反斜杠，并把它变成小写
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    // console.log(path);

    switch (path) {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("HomePage"); //返回的是文本消息 
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("About"); //返回的是文本消息 
            break;
        default:
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("Not Found"); //返回的是文本消息 
            break;
    }

}).listen(port);
console.log('Server started on localhost:' + port + ';press CTRL+C to terminate');
//每次都要重启node filename.js