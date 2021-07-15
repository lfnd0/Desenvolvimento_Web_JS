onload = function () {
    let name = localStorage.getItem("name");
    let h1 = document.getElementById("title");
    h1.innerHTML = name;
}

function update(element) {
    let value = element.value;

    let h1 = document.getElementById("title");
    h1.innerHTML = value

    localStorage.setItem("name", value);
}

let student = { name: "Jake", point: 8.2 }
localStorage.setItem("student", JSON.stringify(student))

let s = localStorage.getItem("student");
console.log(JSON.parse(s));

localStorage.clear();