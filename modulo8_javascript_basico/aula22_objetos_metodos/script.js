function averageCalculate() {
    return (this.notes[0] + this.notes[1]) / 2;
}

var student1 = {
    name: "Gaby",
    notes: [9.8, 8.1],
    average: averageCalculate
}

console.log(`NOME: ${student1.name}
MEDIA: ${student1.average(student1.notes[0], student1.notes[1])}`);

var student2 = {
    name: "Robert",
    notes: [6.4, 9.1],
    average: averageCalculate
}

console.log(`NOME: ${student2.name}
MEDIA: ${student2.average(student2.notes[0], student2.notes[1])}`);