import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './common/header';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import ClasesCharacter from './components/ClasesCharacter';
import ClaseEpisode from './components/ClaseEpisode';
import DetallesEpisode from './components/DetallesEpisode';


function App() {
  return (
    <div className="container">
      <Header></Header>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ClasesCharacter}></Route>
        <Route path="/episode" component={DetallesEpisode}></Route>
      </Switch>
      </BrowserRouter>
      {/* <ClasesCharacter></ClasesCharacter>
      <ClaseEpisode></ClaseEpisode> */}
    </div>
  );
}

export default App;
function props(props: any) {
  throw new Error('Function not implemented.');
}

