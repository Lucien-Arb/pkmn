// Initialisation du joueur
export function Player(name, posX, posY, image) {
    this.name = name  
    this.posX = posX
    this.posY = posY
    this.image = image 
}

// Récupération d'un pokémon ennemi
const fetchPkmnEnnemi = () => {
	return fetch(`https://pokeapi.co/api/v2/pokemon/` + randomPkmn())
	.then(response => response.json())
	.then(data => {
		return data;
	})
}

// Définition d'un id pour récupérer le pokémon ennemi
function randomPkmn () {
    let pkmnId = Math.floor(Math.random() * (900 - 1 + 1)) + 1;
    return pkmnId;
}

async function startFight () {
    let tdCell = document.getElementsByClassName('map-back');
    document.onkeydown = null;
    for (let td of tdCell) {
        let addClass = td.classList.add('black-td');
        await sleep(50);
    }
    removeMap.classList.add("is-hidden")
    printFightContainer();
    fetchPkmnEnnemi().then(data => {pkmnEnnemi(data)})
    fetchPkmnEnnemi().then(data => {myPkmn(data)})
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


let displayFight = document.getElementById('displayFight');
let removeMap = document.getElementById('displayGame');
// Si au déplacement le nombre aléatoire donné est 1 alors lance le combat
export function fightOrNot () {
    let zeroOrOne = Math.round(Math.random())
    if (zeroOrOne == 1) {
        fetchPkmnEnnemi().then(
            displayFight.classList.remove("is-hidden"),
            startFight(),
        )
    } 
}


async function printFightContainer() {
    let templateFight = document.getElementById("fight");
    let templateFightClone = templateFight.content.cloneNode(true);
    let containerFight = document.getElementById("containerFight");

    containerFight.appendChild(templateFightClone);
}

async function pkmnEnnemi(ennemi) {
    let templateDisplayEnnemi = document.getElementById("displayEnnemi");
    let templateDisplayEnnemiClone = templateDisplayEnnemi.content.cloneNode(true);
    let containerEnnemi = document.getElementById("containerEnnemi");

    // Nom du pokemon ennemi
    let ennemiName = templateDisplayEnnemiClone.getElementById("ennemiName");
    ennemiName.innerText = ennemi.name

    // Lvl du pokemon ennemi
    let ennemiLvl = templateDisplayEnnemiClone.getElementById("ennemiLvl");
    ennemiLvl.innerText = ennemi.base_experience

    // Lvl du pokemon ennemi
    let ennemiHP = templateDisplayEnnemiClone.getElementById("ennemiHP");
    ennemiHP.innerText = ennemi.stats[0].base_stat

    // Img du pokemon ennemi
    let ennemiImg = templateDisplayEnnemiClone.getElementById("ennemiImg");
    ennemiImg.src = ennemi.sprites.front_default

    // Append le template
    containerEnnemi.appendChild(templateDisplayEnnemiClone);
}

function myPkmn(pkmn) {
    let templateMyPkmn = document.getElementById("displayMyPkmn");
    let templateMyPkmnClone = templateMyPkmn.content.cloneNode(true);
    let containerMyPkmn = document.getElementById("containerMyPkmn");

    // Nom du pokemon ennemi
    let pkmnName = templateMyPkmnClone.getElementById("myPkmnName");
    pkmnName.innerText = pkmn.name

    // Lvl du pokemon ennemi
    let pkmnLvl = templateMyPkmnClone.getElementById("myPkmnLvl");
    pkmnLvl.innerText = pkmn.base_experience

    // Lvl du pokemon pkmn
    let pkmnHP = templateMyPkmnClone.getElementById("myPkmnHP");
    pkmnHP.innerText = pkmn.stats[0].base_stat

    // Img du pokemon pkmn
    let pkmnImg = templateMyPkmnClone.getElementById("myPkmnImg");
    pkmnImg.src = pkmn.sprites.back_default

    containerMyPkmn.appendChild(templateMyPkmnClone);
}

