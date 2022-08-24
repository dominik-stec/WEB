/* jshint globalstrict: true, devel: true, node: true */
'use strict';

function createBuffer(){
    var buffer = '';
    var f = function() {
        var i = arguments.length;
        while (i > 0) {
            buffer += arguments[arguments.length - i];
            buffer += " "
            i = i-1;
        }
        return buffer;
    };
    return f;
}

alert('buffer.js: ' + createBuffer()('first', 'second', 'third'))