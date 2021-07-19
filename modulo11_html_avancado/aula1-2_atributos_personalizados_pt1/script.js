let img = document.getElementById("like");

img.addEventListener("click", function () {
    let lastImg = img.getAttribute("src");

    img.setAttribute("src", "./img/thumbs-down.png");

    console.log(lastImg);
});