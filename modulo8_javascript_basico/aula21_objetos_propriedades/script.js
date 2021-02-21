var student1 = { name: "George", notes: [7.5, 9.2] }
// console.log("NOME: " + student1.name + "\nNOTAS: " + student1.notes);
// console.log("NOME: " + student1["name"] + "\nNOTA 1: " + student1["notes"][0]);
console.log("NOME: " + student1["name"] + "\nNOTAS: " + student1["notes"]);

// student1["lastName"] = "Wattson";
var newProperty = "lastName";
student1[newProperty] = "Watterson";
student1.registry = 6548;
console.log(student1);

// var student2 = new Object({ name: "Spencer", notes =[10.0, 8.2] });
var student2 = new Object();
student2.name = "Spencer";
student2.notes = [10.0, 8.2];
console.log("NOME: " + student2["name"] + "\nNOTAS: " + student2["notes"]);
console.log(student2);