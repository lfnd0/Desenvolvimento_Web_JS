let peopleList = ["Marcus", "Spencer", "Grenny", "Logan", "Mary", "Robbie"]

function draw() {
    let people = peopleList.length;
    let name = Math.floor(Math.random() * people);

    document.getElementById("name").innerHTML = peopleList[name];
}