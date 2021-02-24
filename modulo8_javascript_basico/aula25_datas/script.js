// Módulo 8 - Aula 25

var date1 = new Date();
console.log(date1);

var date2 = new Date(2021, 1, 23, 22, 00);
console.log(date2);

var date3 = new Date(1000 * 60 * 60 * 24);
console.log(date3);

var date4 = new Date("Feb 23 2021 13:00");
console.log(date4);

var date5 = new Date("07/26/1994 9:00");
console.log(date5);

var date6 = new Date();
date6.setDate(22);
date6.setFullYear(2022);
date6.setHours(9);
console.log(date6);

console.log(date1.getTime());
console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1.getDate());
console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(date1.getMilliseconds());

var days = ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sab."];
console.log(days[date1.getDay()]);