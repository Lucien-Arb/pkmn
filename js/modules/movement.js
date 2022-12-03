import {Player, fightOrNot} from './game.js';

// Initialisation du joueur
let player = new Player('Sacha', 0, 0, '<img id="img-dresseur" src="https://lucien34000.github.io/pkmn/assets/sacha-pikachu.png" width="200%">')
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