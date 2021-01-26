var loop = 5;

for (var i = 0; i < loop; i++) {
    console.log("For-" + i);
}
console.log("Fim do for");

var i = 0;
while (loop < 10) {
    console.log("While-" + i);
    loop++;
    i += 1;
}
console.log("Fim do while");

var randomNum = Math.floor(Math.random() * 100);
while (randomNum < 90) {
    console.log("Numero sorteado: " + randomNum);
    randomNum = Math.floor(Math.random() * 100);
}
console.log("Ultimo numero sorteado: " + randomNum);