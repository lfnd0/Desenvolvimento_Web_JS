var students = new Array("Antonny", "Eliot", "Logan", "Mike", "Remmy", "Spencer");
console.log(students[0]);

var fruits = ["acerola", "banana", "jaca", "melancia"];
console.log(fruits);
console.log(fruits.length);

for (var i = 0; i < students.length; i++) {
    console.log(students[i]);
}

for (var i in fruits) {
    console.log(i + "-" + fruits[i]);
}

for (var student of students) {
    console.log(student);
}