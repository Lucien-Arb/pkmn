export function Player(name, posX, posY, image) {
        this.name = name
        this.posX = posX
        this.posY = posY
        this.image = image 
    }


let player = new Player('Sacha', 0, 0, '<img id="img-dresseur" src="assets/ sacha-pikachu.png">')
document.getElementById('C' + player.posX + player.posY ).innerHTML = player.image

document.onkeydown = checkKey;

function checkKey(e) {
    // console.log(e)
    e = e || window.event;
    let playerSprite = document.getElementById('img-dresseur')

    if (e.keyCode == 38) {
        if (player.posY > 0) {
            // up arrow
            player.posY -= 1
            document.getElementById('C' + player.posY + player.posX ).appendChild(playerSprite)
        }
        
    }
    else if (e.keyCode == 40) {
        if (player.posY < 3) {
            // down arrow
            player.posY += 1
            document.getElementById('C' + player.posY + player.posX ).appendChild(playerSprite)
        }
        
    }
    else if (e.keyCode == 37) {
        if (player.posX > 0) {
            // left arrow
            player.posX -= 1
            document.getElementById('C' + player.posY + player.posX ).appendChild(playerSprite)
        }
    }
    else if (e.keyCode == 39) {
        if (player.posX < 3) {
            // right arrow
            player.posX += 1
            document.getElementById('C' + player.posY + player.posX ).appendChild(playerSprite)
        }
    }
}


