import * as actionTypes from "./actionTypes";

const setPokemon = (data) => ({
    type: actionTypes.SET_POKEMON_LIST,
    data
})

export const getPokemonDetails = (axiosInstance) => (dispatch) => {
    axiosInstance({
        method: "GET",
        data: {}
    })
    .then((res) => {
        dispatch(setPokemon(res.data));
    })
    .catch((err) => { });
}