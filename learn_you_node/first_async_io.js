var fs = require('fs');
var buffer = undefined;

fs.readFile(process.argv[2], function callback(err, data)
    {
        if (err) {
            return console.log(err);
        } else {
            buffer = data;
            var str = buffer.toString();
            var length = str.split('\n').length - 1;
            console.log(length);
        }
    }
);
