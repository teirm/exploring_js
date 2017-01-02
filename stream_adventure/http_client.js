var request = require('request');
var r = process.stdin.pipe(request.post('http://localhost:8099')).pipe(process.stdout);
