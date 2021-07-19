let list = document.getElementById("list");
list.dataset.num = "5";

let num = parseInt(list.dataset.num)
let content = ``;

for (let i = 0; i <= num; i++) {
    content += `<li>${i}</li>`;
}

list.innerHTML = content;

let id = list.dataset.id;
console.log(id);

id = parseInt(id);
console.log(id);