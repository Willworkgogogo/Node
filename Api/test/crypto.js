/**
 * crypto 加密模块
 */ 

//  MD5是一种常用的哈希算法，用于给任意数据一个“签名”。
//  这个签名通常用一个十六进制的字符串表示。
var crypto = require('crypto');
// var hash = crypto.createHash('md5');
var hash = crypto.createHash('sha1');

hash.update('Hello will');
hash.update('Hello world');

console.log(hash.digest("hex"))

