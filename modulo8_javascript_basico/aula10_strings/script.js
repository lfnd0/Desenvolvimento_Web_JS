// var str = 'Sou uma string'
var num = "42" * 1; // Funciona com '*', pois, há algarismos
var str = "'Sou uma string"; // Não funciona com '*', pois, não há algarismos
str += "!' " + num;
console.log(str)