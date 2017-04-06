// return last character of a string
function getLastChar(str) {
    return str[str.length-1];
}

// return char at idx location in a string
function findChar(str, idx) {
    return str[idx];
}

//
function calculate(int1, int2, str) {
    switch (str) {
        case 'add':
            console.log(int1 + int2);
            break;
        case 'sub':
            console.log(int1 - int2);
            break;
        case 'mult':
            console.log(int1 * int2);
            break;
        case 'div':
            console.log(int1 / int2);
        }
}

// repeat a string str int times
function repeater(int, str) {
    console.log(new Array(int +1).join(str));

}

// reverse a string
function reverseWord(str){
    var rWord = [];
    for (var i = str.length; i>-1; i--){
        rWord.push(str[i]);
    }
    console.log(rWord.join(""));
}

// factorial of a number
function factorial(int) {
    var num = 1;
    for (var i = int; i>0; i--){
        num *= i;
    }
    console.log(num);

}

// return the longest word of a phrase
function longestString(phrase) {
    splits = phrase.split(" ");
    for (var i = 0; i < splits.length; i++) {
        temp = 0;
        if (temp < splits[i].length)
        temp = splits[i];
        }
    console.log(temp);
    }

// take an array, return a filtered Array
function getTruthy(arr) {
    outArr =[];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i]) {
            outArr.push(arr[i]);
        }
    }
    console.log(outArr);
}

// get unique chars from two arrays
function getUnique(arr1, arr2) {
    var arr = arr1.concat(arr2);
    console.log(Array.from(new Set(arr)));
}
