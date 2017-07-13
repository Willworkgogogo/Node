/**
 * stream
 */ 

'use strict';

var fs = require("fs");

// open stream
var rs = fs.createReadStream("text.txt", "utf-8");

rs.on('data', (chunk) => {
    console.log(`Data: ${chunk}`);
})

rs.on('end', () => {
    console.log("end");
})

rs.on('error', (err) => {
    console.log(`error: ${err}`);
})

// write steam
var ws = fs.createWriteStream("text.txt", "utf-8");

ws.write("\n使用流形式写入数据。。。。\n");
ws.write("再来一条...\n");
ws.end();

