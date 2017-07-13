// http module

'use strict';

var http = require('http');

// create server
http.createServer(function(request, response) {
    console.log(`${request.method}, ${request.url}`)

    response.writeHead(200, {'Content-Type': 'text/html'});

    response.end('Hello the server is connecting')
}).listen(8888);

console.log('running, 127.0.0.1:8888')