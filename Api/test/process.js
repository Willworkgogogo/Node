var process = global.process;

process.nextTick(function() {
    console.log("22222")
})

console.log("11111")
console.log("11111")
console.log("11111")
console.log("11111")
console.log("11111")
console.log("11111")
console.log("11111")
console.log("11111")

process.on('exit', function(code) {
    console.log(`about to exit with code: ${code}`)
})