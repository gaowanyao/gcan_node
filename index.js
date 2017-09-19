var http = require('http');
var fs = require('fs');
var port = 3000;

function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}
http.createServer(function(req, res) {
    // console.log(req.url);
    // 规范化 url，去掉查询字符串、可选的反斜杠，并把它变成小写
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    // console.log(path);
    switch (path) {
        case '':
            serveStaticFile(res, '/public/home.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/img/logo.png':
            serveStaticFile(res, '/public/img/logo.png',
                'image/jpeg');
            break;
        default:
            serveStaticFile(res, '/public/404.html', 'text/html',
                404);
            break;
    }
}).listen(port);
console.log('Server started on localhost:' + port + ';press CTRL+C to terminate');
//每次都要重启node filename.js