var num = 0;
var count;

function updateText() {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML += " " + num;
    num++;
}


function start() {
    count = setInterval(updateText, 1000);
    // count = setTimeout(updateText, 3000);
}

function stop() {
    clearInterval(count);
    // clearTimeout(count);
}