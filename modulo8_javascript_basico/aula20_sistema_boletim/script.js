var students = ["George", "Logan", "Spencer"];

var notes1 = [5.0, 6.8, 9.5];
var notes2 = [3.0, 7, 8.5];

function average(n1, n2) {
    return (n1 + n2) / 2;
}

function status(avg) {
    if (avg <= 4) {
        return "Reprovado(a)";
    } else if (avg >= 5 && avg < 7) {
        return "Recuperacao";
    } else {
        return "Aprovado(a)";
    }
}

for (var student in students) {
    var note1 = notes1[student];
    var note2 = notes2[student];
    var avg = average(note1, note2);

    console.log("NOME: " + students[student] +
        "\nNOTA 1: " + note1 +
        "\nNOTA 2: " + note2 +
        "\nMEDIA: " + avg +
        "\nSTATUS: " + status(avg));
}