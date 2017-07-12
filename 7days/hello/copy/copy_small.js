var fs = require('fs');

function copy(src, dst) {
	fs.writeFileSync(dst, fs.readFileSync(src))
}

function main(arg) {
	copy(arg[0], arg[1])
}

main(process.arg.slice(2))