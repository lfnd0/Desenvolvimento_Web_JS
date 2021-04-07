function mFunction1(e) {
    console.log("Click-1!");
    console.log(e);
    console.log(this);
}

function mFunction2(e) {
    console.log("Click-2!");
    console.log(e);
    console.log(e.target);
    console.log(this);
}

window.onload = function () {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.addEventListener("click", mFunction2);
}