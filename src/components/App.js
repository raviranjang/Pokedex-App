import React, { Component } from 'react';
import axios from 'axios'
import PokeList from './PokeList/PokeList';
import DetailView from '../components/DetailView/DetailView';
import Pokemon from './Pokemon';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [{
        ThumbnailAltText: "",
        ThumbnailImage: "",
        abilities: [],
        collectibles_slug: "",
        detailPageURL: "",
        featured: "",
        fullImage: "",
        height: 0,
        id: 0,
        name: "",
        number: "",
        slug: "",
        type: [],
        weakness: [],
        weight: 0
      }]
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);
        console.log(data)
        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }


  componentDidMount() {
    axios
      .get("./pokemonlist.json")
      .then(response => {
        response.data = response.data.filter((x, xi) => !response.data.slice(xi + 1).some(y => y['number'] === x['number']));
        

        // store the new state object in the component's state
        this.setState(response.data);
      })
      .catch(error => console.log(error));
  }




  render() {
    return (
      <div className="App">
        <PokeList  />
        <DetailView pokemon={this.state.pokemonList} />
      </div>
    );
  }
}

export default App;