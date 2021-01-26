var score1 = 10;
var score2 = 10;

var average = (score1 + score2) / 2;

var status = "";

if (average >= 8) {
    status = "Muito bom";
} else if (average >= 7) {
    status = "Bom";
} else if (average >= 6) {
    status = "Regular";
} else {
    status = "Insipiente";
}

// function print(status, average) {
//     console.log("Conceito: " + status + "\nSua media e: " + average);
// }

// var print = function(status, average) {
//     console.log("Conceito: " + status + "\nSua media e: " + average);
// }

var print = (status, average) => console.log("Conceito: " + status + "\nSua media e: " + average);

switch (status) {
    case "Muito bom":
        print(status, average);
        break;
    case "Bom":
        print(status, average);
        break;
    case "Regular":
        print(status, average);
        break;
    case "Insipiente":
        print(status, average);
        break;
    default:
        console.log("Error")
        break;
}