// Módulo 9 - Aula 6

let newParagraph1 = document.getElementById("paragraph-1");
newParagraph1.innerHTML = "Placeat suscipit veniam, ea expedita tenetur provident adipisci?";

let newParagraph2 = document.getElementById("paragraph-2");
newParagraph2.innerText = "Sequi exercitationem voluptatibus provident, doloribus numquam doloremque quos officia.";

let newParagraph3 = document.getElementById("paragraph-3");
newParagraph3.textContent = "Saepe, facilis. Vitae, tempora aliquid."

let newParagraph4 = document.getElementById("paragraph-4");
console.log(newParagraph4.textContent)
console.log(newParagraph4.innerText)

newParagraph1.className = "";

console.log(newParagraph2.myAttribute);

newParagraph2.style = "font-size: 22px;";

let myAttribute1 = newParagraph2.getAttribute("myAttribute");
console.log(myAttribute1);

// Novo valor para o atributo personalizado
newParagraph2.setAttribute("myAttribute", "lfnd1");

// Novo atributo/valor personalizado
newParagraph2.setAttribute("newMyAtribute", "lfnd2");

console.log(newParagraph2);

newParagraph2.style.backgroundColor = "black";