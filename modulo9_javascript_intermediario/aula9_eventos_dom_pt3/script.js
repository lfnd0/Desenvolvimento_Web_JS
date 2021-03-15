function loaded() {
    let mTitle = document.getElementById("mTitle");
    // mTitle.onclick = changeTitle;
    mTitle.addEventListener("mouseover", changeTitle);
    mTitle.addEventListener("mouseout", backTitle);
}

function changeTitle() {
    this.innerHTML = "Título 2";
}

function backTitle() {
    this.innerHTML = "Título 1";
}