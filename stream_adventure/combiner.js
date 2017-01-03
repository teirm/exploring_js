var combine = require('stream-combiner');
var split = require('split');
var through = require('through2');

module.exports = function () {
    return combine(process.stdin,
                   split(),
                   through(function (line, _, next) {
                        var parsed_line = JSON.parse(line);
                   })
};


        
