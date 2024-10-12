import React from 'react';
import Game from './components/Game/Game';
import Timer from './components/Timer/Timer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Timer /><br />
      <Game />
    </div>
  );
}

export default App;
