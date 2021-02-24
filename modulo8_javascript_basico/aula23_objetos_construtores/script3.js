// Módulo 8 - Aula 23

function student(name, note1, note2) {
    this.name = name;
    this.note1 = note1;
    this.note2 = note2;

    this.average = function () {
        return (this.note1 + this.note2) / 2;
    }
}

var student1 = new student("George", 7.7, 9.6);
console.log("#Script 3");
console.log(student1);
console.log("MEDIA: " + student1.average());