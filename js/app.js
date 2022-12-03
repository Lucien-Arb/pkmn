import "https://lucien34000.github.io/pkmn/js/modules/movement.js";

import { getOnePokemon } from "https://lucien34000.github.io/pkmn/js/modules/pokedex.js";

let offset = 0
let limit = 30

const fetchPokemons = () => {
	fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=` + offset*limit)
	.then(response => response.json())
	.then( data => {
			getOnePokemon(data.results)
			offset += 1
	})
  	.catch (error => console.log(error));
};

fetchPokemons();

window.onscroll = function() {
	if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2) {
		fetchPokemons()
	}
}

