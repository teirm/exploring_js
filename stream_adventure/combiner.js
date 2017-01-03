/* NOT MY SOLUTION */
/* USING TO LEARN MORE NODE */
/* SOLUTION BY brunops: github.com/brunops */

var combine = require('stream-combiner');
var split = require('split');
var through = require('through2');
var zlib = require('zlib');

module.exports = function () {

    var genreInfo;

    function write(buf) {
        if (buf.length === 0) {
            return;
        }

        buf = JSON.parse(buf);

        if (buf.type === 'genre') {
            if (genreInfo) {
                /* Can queue chunks?? */
                this.queue(JSON.stringify(genreInfo) + '\n');
            } 
            
            /* Create an object */
            genreInfo = {
                name: buf.name,
                books: []
            }

        } else {
            genreInfo.books.push(buf.name);
        }
    }

    function end() {
        this.queue(JSON.stringify(genreInfo) + '\n');
        this.queue(null);
    };

    return combine(split(),
                   through(write, end),
                   zlib.createGzip()
                   );
};


        
