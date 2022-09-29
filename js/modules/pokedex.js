let pokedexOrMap = document.getElementById('pokedexOrMap');
let switchPages = document.getElementById('switchPages');
let displayPokedex = document.getElementById('displayPokedex');
let displayGame = document.getElementById('displayGame');
let togglePokedexOrMap = true
pokedexOrMap.innerText = "Pokédex"

export function ToggleGame () {
    if (!togglePokedexOrMap) {
        displayGame.classList.remove("is-hidden")
        displayPokedex.classList.add("is-hidden")
        togglePokedexOrMap = true
        pokedexOrMap.innerText = "Map"
    } else {
        displayGame.classList.add("is-hidden")
        displayPokedex.classList.remove("is-hidden")
        togglePokedexOrMap = false
        pokedexOrMap.innerText = "Pokédex"
    }
}

switchPages.onclick = ToggleGame

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