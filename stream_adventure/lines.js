var through = require('through2');
var split = require('split');

var line_counter = 1

process.stdin
       .pipe(split())
       .pipe(through(function (line, _, next) {
           if (line_counter == 1) {
               this.push(line.toString().toLowerCase() + '\n');
           } else {
               this.push(line.toString().toUpperCase() + '\n');
           }

           line_counter *= -1;
           next();
       }))
       .pipe(process.stdout);
   
