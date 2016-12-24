var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2])
var str = buffer.toString();
var line_array = str.split('\n');
console.log(line_array.length - 1);
