let studentOBJ1 = {
    name: "George",
    point: 9.7
}
console.log(studentOBJ1);

let studentJSON = JSON.stringify(studentOBJ1);
console.log(studentJSON);
console.log(studentJSON.name);

let studentSTR = '{"name": "Spencer", "point": 9.4}';
console.log(studentSTR);

let studentOBJ2 = JSON.parse(studentSTR);
console.log(studentOBJ2);
console.log(studentOBJ2.name);