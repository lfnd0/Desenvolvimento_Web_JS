let inputAdults = document.getElementById("adults");
let inputChildren = document.getElementById("children");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("result");

function calculate() {
    let adults = inputAdults.value;
    let children = inputChildren.value;
    let duration = inputDuration.value;

    let amountMeat = meatPerPerson(duration) * adults + (meatPerPerson(duration) / 2 * children);
    let amountBeer = beerPerPerson(duration) * adults;
    let amountDrink = drinksPerPerson(duration) * adults + (drinksPerPerson(duration) / 2 * children);

    result.innerHTML = `<p>Resultado:</p>`
    result.innerHTML += `<p>${amountMeat / 1000}Kg de carne</p>`
    result.innerHTML += `<p>${Math.ceil(amountBeer / 355)} latinhas de cerveja</p>`
    result.innerHTML += `<p>${Math.ceil(amountDrink / 2000)} garrafas de 2L de bebidas</p>`
}

function meatPerPerson(duration) {
    if (duration >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function beerPerPerson(duration) {
    if (duration >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function drinksPerPerson(duration) {
    if (duration >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}