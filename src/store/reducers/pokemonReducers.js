import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'
// import {browserHistory} from 'react-router';



const pokemonReducers = (state = initialState.pokemons, action) => {
    switch (action.type) {
        case actionTypes.LOAD_POKEMON_SUCCESS:
            // Object.assign(state.data, data)
            // console.log(state)
            // updatedConnectors = { ...state.pokemons }
            return  (
                 [...state, action.pokemons][0]
            )
            // console.log(action)
            // return (
            //     [...state,...action.pokemons]
            // )

        case actionTypes.DELETE_POKEMON_SUCCESS:
            return {
                ...state,
                data: [...action.data.result]
            }

        case actionTypes.CREATE_POKEMON_SUCCESS:
            return {
                ...state,
                data: [...action.data.result]
            }

        default:
            return state;
    }
};

export default pokemonReducers