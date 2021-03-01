let paragraphID = document.getElementById("paragraph-1");
console.log(paragraphID);

let paragraphsClass = document.getElementsByClassName("paragraph");
console.log(paragraphsClass);

for (let paragraph of paragraphsClass) {
    console.log(paragraph);
}

let titles = document.getElementsByTagName("h1");
console.log(titles);

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

console.log(paragraphs[0]);
console.log(paragraphs[1]);
console.log(paragraphs[2]);