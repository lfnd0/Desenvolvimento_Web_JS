function average1(value1, value2) {
    // console.log((value1 + value2) / 2);
    return ((value1 + value2) / 2);
}

var result1 = average1(9, 10);
var result2 = average1(10, 7);
console.log("Resultado 1 = " + result1 + "\nResultado 2 = " + result2);

function salutation() {
    return "Oi!";
}

// var s = salutation;
// console.log(s());

var s = salutation();
console.log(s);

var average2 = function (value1, value2) {
    return ((value1 + value2) / 2);
}
console.log("Resultado 3 = ", average2(10, 10));