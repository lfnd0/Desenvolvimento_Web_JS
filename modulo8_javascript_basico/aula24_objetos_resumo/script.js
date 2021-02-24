var person1 = {
    name: "Juan",
    surname: "Diaz"
};
console.log(person1);

function createPerson1(name, surname) {
    return { name: name, surname: surname }
}
var person2 = createPerson1("Joey", "Marshal");
console.log(person2);

function createPerson2(name, surname) {
    this.name = name;
    this.surname = surname
}
var person3 = new createPerson2("Robbie", "Yahn");
console.log(person3);