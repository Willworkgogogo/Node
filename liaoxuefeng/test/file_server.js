/**
 * node提供文件查找服务
 * Willwang 2017-07-13
 */

'use strict';

var
    url = require('url'),
    http = require('http'),
    fs = require('fs'),
    path = require('path');

// 获取root目录，默认是当前目录
/**
 * process.argv 返回数组
 * [ '/Users/willwang/.nvm/versions/node/v6.9.2/bin/node',
 * '/Users/willwang/workspace/Node/liaoxuefeng/test/file_server.js' ]
 */ 

/**
 * path.resolve('.') 返回string
 * return /Users/willwang/workspace/Node/liaoxuefeng/test
 */  
var root = path.resolve('.');
console.log(`root : ${root}`);

// create server
var server = http.createServer(function(request, response) {
    // 获取URL的path
    var pathname = url.parse(request.url).pathname;
    console.log(`pathname: ${pathname}`)

    // 拼接本地文件路径
    var filepath = path.join(root, pathname);
    console.log(`filepath: ${filepath}`)

    // 获取文件状态
    fs.stat(filepath, function(err, stat) {
        if (!err && stat.isFile()) {
            // 发送200响应页面
            response.writeHead(200);
            // 将文件流导向response
            fs.createReadStream(filepath).pipe(response)
        }else {
            response.writeHead(404);
            response.end("404 Not Found");
        }
    })
})

server.listen(8888);
console.log("server is running: localhost:8888")
