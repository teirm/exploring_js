var duplexer2 = require('duplexer2');
var through = require('through2');

module.exports = function (counter) {
    var count = {};
    var tr = through(function (buf) {
        count[buf.country] = count[buf.country] ? count[buf.country] + 1 : 1;
    }, function () {
        counter.setCounts(count);
    });

    return duplexer2(tr, counter);
};

