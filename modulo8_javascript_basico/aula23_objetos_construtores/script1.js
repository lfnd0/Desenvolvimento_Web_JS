// Módulo 8 - Aula 23

var averageCalculate = function () {
    return (this.note1 + this.note2) / 2;
}

var classroom = [
    { name: "George", note1: 7.7, note2: 9.6, average: averageCalculate },
    { name: "Sonny", note1: 9.2, note2: 7.3, average: averageCalculate }
]

var student1 = classroom[0];
console.log("#Script 1");
console.log(student1);
console.log("MEDIA:" + student1.average());

var student2 = classroom[1];
console.log(student2);
console.log("MEDIA:" + student2.average());