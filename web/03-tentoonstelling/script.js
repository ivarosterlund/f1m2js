const myImage = document.getElementById('myImage');
const myTitle = document.getElementById('myTitle');
const myInfo = document.getElementById('myInfo');


let paintings = [
"img/painting0.jpg",
"img/painting1.jpg",
"img/painting2.jpg",
"img/painting3.jpg",
"img/painting4.jpg",
"img/painting5.jpg"];

let titles = [
    "de schilderijen van van Gogh",
    "De rode wijngaaard",
    "De sterrennacht",
    "Sterrennacht boven de Rh�ne",
    "Zonnebloemen ",
    "Boerderij in de Provence"]; 

function changeImage(index){
    myTitle.innerHTML = titles[index];
    myImage.src = paintings[index];
    myInfo.innerHTML = info[index];

}


let info = [
    "Hier komt de informatie over het schilderij te staan",
    "november 1888, Pesjkinmuseum, Moskouw",
    "juni 1889, Museum of Modern Art, New York",
    "september 1888, musée d'Orsay, Parijs",
    "januari 1889, neue pinakothek, Munchen",
    "september 1888, national gallery of art, Washington D.C."
];