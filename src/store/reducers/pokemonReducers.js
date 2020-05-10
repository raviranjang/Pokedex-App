import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    data: [],
};

const pokemonListReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_POKEMON_LIST:
            return {
                ...state,
                data: [...action.data.result]
            }

            case actionTypes.GET_POKEMON_LIST:
                return {
                    ...state,
                    data: [...action.data.result]
                }

        default:
            return state;
    }
};

export default pokemonListReducers