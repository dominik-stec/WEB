/* jshint globalstrict: true, devel: true, node: true */
'use strict';

function createBuffer(){
    var buffer = '';
    var f = function(str) {
        if (arguments.length > 0) {
            buffer += str;
        }
        else {
            return buffer;
        }
    };
    return f;
}
