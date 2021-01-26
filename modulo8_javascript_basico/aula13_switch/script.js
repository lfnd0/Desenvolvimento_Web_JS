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

switch (status) {
    case "Muito bom":
        console.log("Conceito: " + status + "\nSua media e: " + average);
        break;
    case "Bom":
        console.log("Conceito: " + status + "\nSua media e: " + average);
        break;
    case "Regular":
        console.log("Conceito: " + status + "\nSua media e: " + average);
        break;
    case "Insipiente":
        console.log("Conceito: " + status + "\nSua media e: " + average);
        break;
    default:
        console.log("Error")
        break;
}