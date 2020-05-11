import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/pokemonAction'
import './PokeList.css';
import TableList from '../TableList/TableList'

function PokeList () {
  const pokemons  = useSelector( state  => state.pokemonReducers );
  const dispatch = useDispatch()
  
  if(!pokemons) dispatch(actions.loadPokemons())
 
  return (
    <div>
      {pokemons && pokemons.length > 0 && 
        <TableList itemList={pokemons} />

      }

      

    </div>
  )
}

export default PokeList