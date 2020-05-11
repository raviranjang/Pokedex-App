import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import  PokeList from './components/PokeList/PokeList'
// import CatPage from './components/cats/CatPage';
// import NewCatPage from './components/cats/NewCatPage';


export default (
  <Route path="/" component={App}>
    <Route exact path="/" component={PokeList} />
    {/* <Route path="/cats" component={CatsPage}>
      <Route path="/cats/new" component={NewCatPage} />
      <Route path="/cats/:id" component={CatPage} />
    </Route>
    <Route path="/about" component={AboutPage} /> */}
  </Route>
);
