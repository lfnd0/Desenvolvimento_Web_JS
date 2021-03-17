let mTitle1 = document.getElementById("mTitle1");
let mTitle2 = document.getElementById("mTitle2");

mTitle1.onclick = mUpperCase;
mTitle2.onclick = mUpperCase;

function mUpperCase() {
    this.innerHTML = this.innerHTML.toUpperCase();
}