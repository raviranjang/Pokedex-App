import React from "react"
import ReactDom from "react-dom"

import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
// import { Router } from 'react-router'
// import routes from './routes'

import App from './components/App'

import { loadPokemons } from './store/actions/pokemonAction'

const store = configureStore()

store.dispatch(loadPokemons())


ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)