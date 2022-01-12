console.log("script is geladen");

const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById("fruit");

function zetInFruitLa(fruit){
    console.log(fruit);

    const nieuwElement = document.createElement('h2')
    nieuwElement.innerHTML = fruit;
    fruitvak.appendChild(nieuwElement);
    nieuwElement.className = 'rood'; 

}

function zetInGroenteLa(groente){
    console.log(groente);

    const nieuwElement = document.createElement('h2')
    nieuwElement.innerHTML = groente;
    groentevak.appendChild(nieuwElement);
    nieuwElement.className = 'groen';
}
