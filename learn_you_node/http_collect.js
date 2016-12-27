var http = require('http')
var bl = require('bl')

var url_request = process.argv[2];

http.get(url_request, process_response);

function process_response(response) {

    response.on('error', console.error);
    response.pipe(bl(function(err, data) {
        if (err) {
            console.error(err);
        } else {
            var data_string = data.toString();
            console.log(data_string.length);
            console.log(data_string);
        }
    })
    );

}
