/* jshint globalstrict: true, devel: true, node: true */
'use strict';

function sum() {
    let s = 0;
    for(let i=0; i<arguments.length; i++) {
        s += arguments[i]
    }
    return s
}

alert("sum.js: sum 123 + 123 = " + sum(123, 123))
