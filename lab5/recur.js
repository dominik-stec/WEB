/* jshint globalstrict: true, devel: true, node: true */
'use strict';

    function factorial(n)  {

     if (n > 1)
    return n * factorial(n-1);
  else
    return 1;
}


function arithmeticSequence(n) {
     if (n > 1)
    return n + arithmeticSequence(n-1);
  else
    return 1;
}

function arithmeticSequence(n) {
     if (n > 1)
    return n + arithmeticSequence(n-1);
  else
    return 1;
}

function geometricSequence(n, step) {
     if (n > 1)
    return n*step + geometricSequence(n-1, step);
  else
    return 1;
}

alert('recur.js: factorial of ' + 4 + " = " + factorial(4))
alert('recur.js: arithemic sequence of ' + 3 + " = " + arithmeticSequence(3))
alert('recur.js: geometric sequence of ' + 3 + ' with step 2' + " = " + geometricSequence(3, 2))


