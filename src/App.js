
import './App.css';
import axios from 'axios'
import { useState } from 'react';


function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const handleClick = (() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => setPokemonList(response.data.results))
  })
  return (
    <div className="App">
      <button onClick={handleClick}>Fetch Pokemon</button>
      <ul className="d-flex flex-column align-items-center">
        {
          pokemonList.length > 0 && pokemonList.map((pokemon, i) => {
            return (
              <li key={i}>
                {pokemon.name}
              </li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
