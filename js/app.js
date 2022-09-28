import { getOnePokemon } from "./pokemon.js";


let offset = 0
let limit = 30

const fetchPokemons = () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=` + offset*limit)
  .then( response => {
    getOnePokemon(response.data.results)
    //   .then(response => {
    //     response
    //   })
    //   .catch(error => console.log(error));
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


