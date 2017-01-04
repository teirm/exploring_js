var http = require('http');
var fs = require('fs');
var oppressor = require('oppressor');

// This will send chunks of the file as they are received 
// from the disk
var server = http.createServer(function(req, res) {
    var stream = fs.createReadStream(__dirname + '/data.txt');
    sream.pipe(oppressor(req)).pipe(res); // can even do compression!
});
server.listen(8000)
