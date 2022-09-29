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
		console.log(data)
	})
}

// Définition d'un id pour récupérer le pokémon ennemi
function randomPkmn () {
    console.log(Math.floor(Math.random() * (900 - 1 + 1)) + 1);
    let pkmnId = Math.floor(Math.random() * (900 - 1 + 1)) + 1;
    console.log(pkmnId)
    return pkmnId;
}

async function startFight () {
    let tdCell = document.getElementsByTagName('td');
    document.onkeydown = null;
    for (let td of tdCell) {
        let addClass = td.classList.add('black-td');
        await sleep(50);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// Si au déplacement le nombre aléatoire donné est 1 alors lance le combat
export function fightOrNot () {
    let zeroOrOne = Math.round(Math.random())
    console.log(zeroOrOne)
    if (zeroOrOne == 1) {
        fetchPkmnEnnemi().then(
            console.log("FIGHT !!!!"),
            startFight()
        )
    } 
}

// Initialisation du joueur
let player = new Player('Sacha', 0, 0, '<img id="img-dresseur" src="assets/ sacha-pikachu.png">')
document.getElementById('C' + player.posX + player.posY ).innerHTML = player.image

document.onkeydown = checkKey;

// Gestion du déplacement du joueur
function checkKey(e) {
    // console.log(e)
    e = e || window.event;
    let playerSprite = document.getElementById('img-dresseur')

    if (e.keyCode == 38) {
        if (player.posY > 0) {
            // up arrow
            player.posY -= 1
            document.getElementById('C' + player.posY + player.posX ).appendChild(playerSprite)
            fightOrNot()
        }
        
    }
    else if (e.keyCode == 40) {
        if (player.posY < 3) {
            // down arrow
            player.posY += 1
            document.getElementById('C' + player.posY + player.posX ).appendChild(playerSprite)
            fightOrNot()
        }
        
    }
    else if (e.keyCode == 37) {
        if (player.posX > 0) {
            // left arrow
            player.posX -= 1
            document.getElementById('C' + player.posY + player.posX ).appendChild(playerSprite)
            fightOrNot()
        }
    }
    else if (e.keyCode == 39) {
        if (player.posX < 3) {
            // right arrow
            player.posX += 1
            document.getElementById('C' + player.posY + player.posX ).appendChild(playerSprite)
            fightOrNot()
        }
    }
}




