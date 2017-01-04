var http = require('http')
var fs = require('fs')

// Server buffers entire file into memory for every request
// req and res are stream and can be used to improve performance
var server = http.createServer(function(req, res) {
    fs.readFile(__dirname + '/data.txt', function (err, data) {
        res.end(data);
    });
});
server.listen(8000)
