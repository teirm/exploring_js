var http = require('http');

var url_to_get = process.argv[2];

http.get(url_to_get, process_response);

function process_response(response) {

    response.setEncoding('utf8');

    /* response.on('error', console.error); */

    response.on('error', function (err) {
        console.error(err);
    });

    /* A cleaner way to do this */
    /* response.on('data', console.log); */ 

    response.on('data', function (data) {
        console.log(data);
    });

}
