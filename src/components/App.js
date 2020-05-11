import React, { Component } from 'react';
import PokeList from './PokeList/PokeList';
import DetailView from '../components/DetailView/DetailView';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    // fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
    //   .then(res => res.json())
    //   .then(data => {
    //     const pokemon = new Pokemon(data);
    //     console.log(data)
    //     this.setState({ pokemon });
    //   })
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <PokeList  />
        {/* <DetailView /> */}
      </div>
    );
  }
}

export default App;