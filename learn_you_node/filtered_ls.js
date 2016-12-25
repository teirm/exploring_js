var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list) {
    if (err) {
        console.log(err);
    } else {
        var tot_ext = '.' + process.argv[3];
        for (var i = 0; i < list.length; i++) {    
            if (path.extname(list[i]) === tot_ext) {
                console.log(list[i]);
            }
        }
    }
});



