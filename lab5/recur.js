/* jshint globalstrict: true, devel: true, node: true */
'use strict';

    function cached(cache, fun)  {

    cached.memo = {};
    cached.memo = cache;
        if(cache.length===1){
            cached.memo[0]--;
        }

    return function(n) {


           return fun(function recur() {

                if(cache.length===1) {

                    if(arguments[0]>cached.memo[0]) {
                        return arguments[0] *(recur(arguments[0] -1));
                    }
                    else if(arguments[0] === cached.memo[0]) {
                        return 1;
                    }
                    else if(arguments[0] < cached.memo[0]) {
                        return 0;
                    }

                }

                if(cache.length===2) {

                        if(arguments[0]===0) {
                            return 0;
                        }
                        if(arguments[0]<=2) {
                            return 1;
                        }

                        return recur(arguments[0]-1) + recur(arguments[0]-2);

                    }

            }, n);

        }

}


