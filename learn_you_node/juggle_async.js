var http = require('http');
var bl = require('bl');

// Counter for callbacks
var call_back_counter = 0;

// Array for callback returns
var data_array = ['','',''];

var url_request_1 = process.argv[2];
var url_request_2 = process.argv[3];
var url_request_3 = process.argv[4];

http.get(url_request_1, process_1);
http.get(url_request_2, process_2);
http.get(url_request_3, process_3);

function print_data (array) {
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
}


/* Solution from LearYouNode 
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
for (var i = 0; i < 3; i++) {
console.log(results[i])
}
}

function httpGet (index) {
http.get(process.argv[2 + index], function (response) {
response.pipe(bl(function (err, data) {
if (err) {
return console.error(err)
}

results[index] = data.toString()
count++

if (count === 3) {
printResults()
}
}))
})
}

for (var i = 0; i < 3; i++) {
httpGet(i)
}

*/

function process_1 (response) {
    response.on('error', console.error);
    response.pipe(bl(function(err, data) {
        if (err) {
            console.error(err);
        } else {
            call_back_counter++;
            data_array[0] = data.toString();
            
            if (call_back_counter == 3) {
                print_data(data_array);
            }
        }
    })
    );
}

function process_2 (response) {
    response.on('error', console.error);
    response.pipe(bl(function(err, data) {
        if (err) {
            console.error(err);
        } else {
            call_back_counter++;
            data_array[1] = data.toString();
            
            if (call_back_counter == 3) {
                print_data(data_array);
            }
        }
    })
    );
}

function process_3 (response) {
    response.on('error', console.error);
    response.pipe(bl(function(err, data) {
        if (err) {
            console.error(err);
        } else {
            call_back_counter++;
            data_array[2] = data.toString();
            
            if (call_back_counter == 3) {
                print_data(data_array);
            }
        }
    })
    );
}
