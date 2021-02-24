// Módulo 8 - Aula 23

function createStudent(name, note1, note2) {
    return {
        name: name,
        note1: note1,
        note2: note2,
        average: function () {
            return (this.note1 + this.note2) / 2;
        }
    }
}

var classroom = [
    createStudent("George", 7.7, 9.6),
    createStudent("Magnus", 8.5, 6.3),
    createStudent("Sonny", 9.2, 7.8)
];

var student1 = classroom[0]
console.log("#Script 2");
console.log(student1);
console.log("MEDIA:" + student1.average());

classroom.forEach(function (student) {
    console.log("NOME: " + student.name + "\nMEDIA: " + student.average());
})