var http = require('http');
var port = Number(process.argv[2]);
var map = require('through2-map');

var server = http.createServer(function(req,res){
    res.writeHead(200, { 'content-type': 'text/plain' });
    if(req.method==='POST'){
        req.pipe(map(function (chunk) {
          return chunk.toString().toUpperCase();
        })).pipe(res);
    }
    
});
server.listen(port);