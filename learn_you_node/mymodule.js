module.exports = function filtered_ls(filename, ext, callback) {

    var fs = require('fs');
    var path = require('path');

    var filtered_results = []

    fs.readdir(filename, function (err, list) {
        if (err) {
            return callback(err);
        } else {
            var tot_ext = '.' + ext;
            filtered_results = list.filter(function (file) {
                return path.extname(file) == tot_ext});

/*            for (var i = 0; i < list.length; i++) {    
                if (path.extname(list[i]) === tot_ext) {
                    filtered_results.push(list[i]); 
                }
            }
*/        callback(null, filtered_results);    
        }
    });
};

