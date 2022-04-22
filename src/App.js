import logo from './logo.svg';
import React from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <NavBar/>
      <ItemListContainer greeting="CATEGORIAS" />
    </div>
  );
}

export default App;
