import React from 'react';
import PokedexBG from "./assets/pokedex-bg.png";
import PokedexScreen from "./components/PokedexScreen.tsx"; 
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="absolute left-1/4" src={PokedexBG} alt="Pokedex"></img>
      <PokedexScreen />
    </div>
  );
}

export default App;
