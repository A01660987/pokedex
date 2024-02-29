import React from 'react';
import './App.css';
import {PokeApi} from './api/PokeAPI';
import {Pokemon} from './models/Pokemon';
import Button from './components/Button';
import PokemonComponent from './components/Pokemon';

function App() {
  
  const [pokemonNumber, setPokemonNumber] = React.useState<number>(1);
  const [pokemon,setPokemon]=React.useState<Pokemon|undefined>(undefined);
  const [loading,setLoading]=React.useState<boolean>(false);
  const [error,setError]=React.useState<string|undefined>(undefined);
  
  function buscar(i: number){
    setLoading(true);
    setError(undefined);
    setPokemonNumber(pokemonNumber+i);
    PokeApi.getPokemonById(pokemonNumber).then((response)=>{
      setPokemon(response.data);
      setLoading(false);
    }).catch((error)=>{
      console.log(error)
      setLoading(false);
      setError("Pokemon no encontrado");
    });
  }

  return (
    <div className="App">
      <div className='buttons flex justify-center'>
        <Button label="<" onClick={() => buscar(-1)}></Button>
        <Button label=">" onClick={() => buscar(+1)}></Button> 
      </div>
      {(!loading && pokemon &&!error) && <>
        <PokemonComponent pokemon={pokemon}></PokemonComponent>
      </>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
