import React from 'react';
import Characters from './components/Characters';
import './App.css';

/* BASE EXERCICIO:
mostrar 10 nomes na primeira busca
qdo clico num nome dá os restantes dados
se clico num outro nome dá os dados dessa pessoa
e a anterior desaparece

API - https://swapi.dev/api/people
*/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Starwars Characters</h1>
        <Characters/>
      </header>
    </div>
  );
}

export default App;
