var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    var req_url = url.parse(req.url, true);
    res.writeHead(200, { 'Content-Type': 'application/json' });
   
    if (req_url.pathname === '/api/parsetime') {
        var myDate = new Date(req_url.query.iso)
        res.write("{\"hour\" :" + myDate.getHours()  + ",\"minute\":" +  myDate.getMinutes() + ",\"second\":" + myDate.getSeconds() + "}"
                  ); 
    } else if (req_url.pathname === '/api/unixtime') {
        res.write(JSON.stringify({'unixtime' : new Date(req_url.query.iso).getTime() })); 
    }
    res.end();

});
server.listen(process.argv[2]);
