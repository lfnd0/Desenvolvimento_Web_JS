var a = true;
var b = false;

var c = a && b;
console.log(c);

var age = 20;
var youth = age >= 20;
var adulthood = age <= 30;
var ageBetween = youth && adulthood;
console.log("Idade: ", age);
console.log("Maior que 20 anos: ", youth);
console.log("Menor que 30 anos: ", adulthood);
console.log("Idade entre 20-30 anos: ", ageBetween);

age = 9;
var young = age <= 10;
var aged = age >= 65;
var isFree = young || aged;
console.log("Idade: ", age);
console.log("Menor que 10 anos: ", young);
console.log("Maior que 65 anos: ", aged);
console.log("Gratuito: ", isFree);