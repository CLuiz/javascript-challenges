// return last character of a string
function getLastChar(str) {
    return str[str.length-1]
}

// return char at idx location in a string
function findChar(str, idx) {
    return str[idx]
}

//
function calculate(int1, int2, str) {
    var total = 0;
    switch (str) {
        case str === 'add':
            total = int1 + int2;
            console.log(total);
            break;
        case str === 'sub':
            total = int1 - int2;
            console.log(total);
            break;
        case str === 'mult':
            total = int1 * int2;
            console.log(total);
            break;
        case str === 'div':
            total = int1 / int2;
            console.log(total);
            break;


}

}
