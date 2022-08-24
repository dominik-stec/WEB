/* jshint globalstrict: true, devel: true, node: true */
'use strict';

String.prototype.isEquals = function(text) {
    let longerTxt = this.length >= text.length ? this : text;
    let shorterTxt = this.length < text.length ? this : text;
    let counterTxt = 0;
    let flagTxt = false;
    let result = true;

    for(let i=0, j=0; i<=longerTxt.length; i++, j++) {
        counterTxt++;

        i = i > longerTxt.length ? longerTxt.length : i;
        j = j > shorterTxt.length ? shorterTxt.length : j;

        flagTxt = false;
        switch(longerTxt[i]) {
            case "é" :
            case "è" :
            case "ê" :
            case "e" :
            case "é".toUpperCase() :
            case "è".toUpperCase() :
            case "ê".toUpperCase() :
            case "e".toUpperCase() :{
                switch (shorterTxt[i]) {
                    case "é" :
                    case "è" :
                    case "ê" :
                    case "e" :
                    case "é".toUpperCase() :
                    case "è".toUpperCase() :
                    case "ê".toUpperCase() :
                    case "e".toUpperCase() :{
                        flagTxt = true;
                        break;
                    }
                }
            }
        }

        switch(longerTxt[i]) {
            case "é".toUpperCase() :
            case "è".toUpperCase() :
            case "ê".toUpperCase() :
            case "e".toUpperCase() :{
                switch (shorterTxt[i]) {
                    case "é".toUpperCase() :
                    case "è".toUpperCase() :
                    case "ê".toUpperCase() :
                    case "e".toUpperCase() :{
                                 flagTxt = true;
                                  break;
                    }
                }
            }
        }

        switch(longerTxt[i]) {
            case "ó" :
            case "ò" :
            case "ô" :
            case "o" :  {
                switch (shorterTxt[i]) {
                    case "ó" :
                    case "ò" :
                    case "ô" :
                    case "o" :  {
                        flagTxt = true;
                        break;
                    }
                }
            }
        }

        switch(longerTxt[i]) {
            case "ó".toUpperCase() :
            case "ò".toUpperCase() :
            case "ô".toUpperCase() :
            case "o".toUpperCase() :  {
                switch (shorterTxt[i]) {
                    case "ó".toUpperCase() :
                    case "ò".toUpperCase() :
                    case "ô".toUpperCase() :
                    case "o".toUpperCase() :  {
                                flagTxt = true;
                                break;
                    }
                }
            }
        }

        if(flagTxt) continue;

        if(counterTxt !== shorterTxt.length) {
            if (longerTxt[i] === "å" && shorterTxt[j] === "a" && shorterTxt[j + 1] === "a") {
                j++;
                continue;
            }
            if(shorterTxt[j] === "å" && longerTxt[i] === "a" && longerTxt[i + 1] === "a") {
                i++;
                continue;
            }

            if (longerTxt[i] === "å".toUpperCase() && shorterTxt[j] === "a".toUpperCase() && shorterTxt[j + 1] === "a") {
                j++;
                continue;
            }
            if(shorterTxt[j] === "å".toUpperCase() && longerTxt[i] === "a".toUpperCase() && longerTxt[i + 1] === "a") {
                i++;
                continue;
            }

            if (longerTxt[i] === "æ" && shorterTxt[j] === "a" && shorterTxt[j + 1] === "e") {
                j++;
                continue;
            }
            if(shorterTxt[j] === "æ" && longerTxt[i] === "a" && longerTxt[i + 1] === "e") {
                i++;
                continue;
            }

            if (longerTxt[i] === "æ".toUpperCase() && shorterTxt[j] === "a".toUpperCase() && shorterTxt[j + 1] === "e") {
                j++;
                continue;
            }
            if(shorterTxt[j] === "æ".toUpperCase() && longerTxt[i] === "a".toUpperCase() && longerTxt[i + 1] === "e") {
                i++;
                continue;
            }

            if (longerTxt[i] === "ø" && shorterTxt[j] === "o" && shorterTxt[j + 1] === "e") {
                j++;
                continue;
            }
            if(shorterTxt[j] === "ø" && longerTxt[i] === "o" && longerTxt[i + 1] === "e") {
                i++;
                continue;
            }

            if (longerTxt[i] === "ø".toUpperCase() && shorterTxt[j] === "o".toUpperCase() && shorterTxt[j + 1] === "e") {
                j++;
                continue;
            }
            if (shorterTxt[j] === "ø".toUpperCase() && longerTxt[i] === "o".toUpperCase() && longerTxt[i + 1] === "e") {
                i++;
                continue;
            }
        }

        if(longerTxt[i] !== shorterTxt[j]) {
            result = false;
            break;
        }
    }

    return result;
};

//alert(String.prototype.erLik("è text textxtè ø AS is"))
alert('proto.js: ' + 'some_text === some_text ? ' + 'some_text'.isEquals('some_text'))
