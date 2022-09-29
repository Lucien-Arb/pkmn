let pokedexBtn = document.getElementById('pokedex');
let gameBtn = document.getElementById('game');
let displayPokedex = document.getElementById('displayPokedex');
let displayGame = document.getElementById('displayGame');
let togglePokedex = true
let toggleGame = false

export function ToggleGame () {
    if (!toggleGame) {
        displayGame.classList.remove("is-hidden")
        displayPokedex.classList.add("is-hidden")
        toggleGame = true
    } else {
        displayGame.classList.add("is-hidden")
        displayPokedex.classList.remove("is-hidden")
        toggleGame = false
    }
}

pokedexBtn.onclick = ToggleGame
gameBtn.onclick = ToggleGame

export function getOnePokemon(pokemonUrl) {
    for (const pokemon of pokemonUrl) {
        fetch(pokemon.url)
        .then(response => response.json())
        .then(data => {
            drawOnePokemon(data)
        }) 
    }
}

function drawOnePokemon(pokemon) {
    let template = document.getElementById("pokemonList");
    // let templateClone = document.importNode(template.content, true)
    let templateClone = template.content.cloneNode(true);
    let container = document.getElementById("container");

    // Nom du pokemon
    let pokemonName = templateClone.getElementById("pkmnName");
    pokemonName.innerText = pokemon.forms[0].name;
    // Image du pokemon
    let pokemonImg = templateClone.getElementById("pkmnImg");
    pokemonImg.src = pokemon.sprites.front_default
    // Image du pokemon shiny
    let pokemonImgShiny = templateClone.getElementById("pkmnImgShiny");
    pokemonImgShiny.src = pokemon.sprites.front_shiny;
    // Type de pokemon
    let pokemonType = templateClone.getElementById("pkmnType");
    pokemonType.innerText = pokemon.types[0].type.name;
    // Nombres d'attaques (moves)
    let pokemonMoves = templateClone.getElementById("pkmnNbMoves");
    pokemonMoves.innerText = "Moves nb : " + pokemon.moves.length;
    // Taille du pokemon
    let pokemonHeight = templateClone.getElementById("pkmnHeight");
    pokemonHeight.innerText = "Height : " + pokemon.height;
    // Expérience de base du pokemon
    let pokemonXp = templateClone.getElementById("pkmnXp");
    pokemonXp.innerText = "Base experience : " + pokemon.base_experience;

    // Taille du pokemon
    let pokemonWeight = templateClone.getElementById("pkmnWeight");
    pokemonWeight.innerText = "Weight : " + pokemon.weight;

    container.appendChild(templateClone)

}