'use strict';

// 读取文本文件

// var fs = require("fs"); // fs 文件读取模块

// fs.readFile("text.txt", 'utf-8', function(err, data) {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


/**
 *  sync read file
 */ 
// var fs = require("fs");
// try {
//     var data = fs.readFileSync("text.txt", "utf-8");
//     console.log("123234");
//     console.log(data);   
// } catch (error) {
//     console.log(error);
// }



// 读取二进制文件            
// var fs = require("fs");

// fs.readFile("1.jpg", function(err, data) {
//     if (err) {
//         console.log(err)
//     }else {
//         console.log(data);
//         console.log(data.toString('utf-8'))
//     }
// })



/**
 *  write file
 */

// var fs = require("fs");
//  var data = `Hello, Node.js`;

//  fs.writeFile("text.txt", data, function(err) {
//      if (err) {
//          console.log(err)
//      }else {
//          console.log('ok!')
//      }
//  })

// fs.open("text.txt", 'a', function(err, fd) {
//     if (err) {
//         console.log(err)
//     }else {
//         console.log('open...');
//         console.log(fd);
//         fs.appendFile(fd, '! i\'m appended into this file...hahaha', function(err){
//             if (err) {
//                 console.log(err)
//             }else {
//                 console.log('ok.')
//             }
//         } )
//     }
// })

//  fs.stat("text.txt", function(err, stats) {
//      console.log("isFile: ", stats.isFile());
//      console.log(`${stats.atime} === ${stats.birthtime} === ${stats.blksize} === ${stats.blocks} === ${stats.ctime} === ${stats.mtime}`)
//  })


/**
 * pipe
 *
 */
var fs = require("fs");
var zlib = require("zlib");

// 压缩text.txt 文件为 text.txt.gz
// fs.createReadStream('./text.txt', 'utf-8')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('text.txt.gz'));

// console.log("压缩完成...")

// 解压缩
fs.createReadStream('./text.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('test.txt'))

console.log("解压完成...")