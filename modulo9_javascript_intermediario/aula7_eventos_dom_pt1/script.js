// Módulo 9 - Aula 7

function pClick() {
    console.log("Click!");
}

function changeColor() {
    document.getElementById("change-color-red").style.color = "red";
}

function h1Change(input) {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerText = input.value;
}

function h2Change(input) {
    let h2 = document.getElementsByTagName("h2")[0];
    h2.innerText = input.value;
}

function h1Hidden() {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.style.display = "none";
}