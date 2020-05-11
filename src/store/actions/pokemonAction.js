import * as actionTypes from './actionTypes'
import pokemonApi from '../../utils/apis/PokemonApi'

// const setPokemon = (data) => ({
//     type: actionTypes.SET_POKEMON_LIST,
//     data
// })

// export const getPokemonDetails = (axiosInstance) => (dispatch) => {
    
//     axiosInstance.get("./pokemonlist.json")
//       .then(res => res.json())
//       .then(data => {
//         dispatch(setPokemon(res.data));
//       })
//       .catch(err => console.log(err));
    
// }

export function loadPokemonsSuccess(pokemons) {
    return {type: actionTypes.LOAD_POKEMON_SUCCESS, pokemons}
  }
  
  export function createPokemonSuccess(pokemon) {
    return {type: actionTypes.CREATE_POKEMON_SUCCESS, pokemon}
  }
  
  export function deletePokemonSuccess(pokemon) {
    return {type: actionTypes.DELETE_POKEMON_SUCCESS, pokemon}
  }
  
  export function loadPokemons() {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function(dispatch) {
      return pokemonApi.getAllPokemons()
      .then(pokemons => {
        dispatch(loadPokemonsSuccess(pokemons))
      }).catch(error => {
        throw(error)
      })
    };
  }
  
  
// export function createCat(cat) {
//     return function (dispatch) {
//         return catApi.createCat(cat).then(responseCat => {
//             dispatch(createCatSuccess(responseCat));
//             return responseCat
//         }).catch(error => {
//             throw(error)
//         })
//     }
// }
  
// export function deleteCat(cat) {
//     return function(dispatch) {
//       return catApi.deleteCat(cat).then(() => {
//         console.log(`Deleted ${cat.id}`)
//         dispatch(deleteCatSuccess(cat));
//         return;
//       }).catch(error => {
//         throw(error);
//       })
//     }
//   }