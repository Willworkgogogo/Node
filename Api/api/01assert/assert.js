/**
 * assert 断言
 */ 
var assert = require("assert");

// assert.ok(false, '错误')
// assert.equal(!true, true, "错误");



/**
 * assert.throw
 */ 
assert.throws(
    () => {
        throw new Error("错误信息")
    },
    Error
)