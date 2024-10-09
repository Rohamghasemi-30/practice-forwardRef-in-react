import React, { useState, forwardRef } from 'react';
import "../Game/Game.css"
const Game = forwardRef((props, ref) => {
  const [result, setResult] = useState('');

  const rockPaperScissorsGame = ['سنگ', 'کاغذ', 'قیچی'];

  const playGame = (userChoice) => {
    const computerChoice = rockPaperScissorsGame[Math.floor(Math.random() * rockPaperScissorsGame.length)];
    let gameResult = '';

    if (userChoice === computerChoice) {
      gameResult = 'مساوی شد';
    } else if (
      (userChoice === 'سنگ' && computerChoice === 'قیچی') ||
      (userChoice === 'کاغذ' && computerChoice === 'سنگ') ||
      (userChoice === 'قیچی' && computerChoice === 'کاغذ')
    ) {
      gameResult = 'شما بردید';

    } else {
      gameResult = 'کامپیوتر برد';
    }

    setResult(`شما: ${userChoice} | کامپیوتر: ${computerChoice} = ${gameResult}`);
  };

  return (
    <div className="game-container">
      <h1>بازی سنگ کاغذ قیچی</h1>
      <div className="buttons">
        <button onClick={() => playGame('سنگ')}>✊ سنگ</button>
        <button onClick={() => playGame('کاغذ')}>🖐 کاغذ</button>
        <button onClick={() => playGame('قیچی')}>✌ قیچی</button>
      </div>
      <h2>{result}</h2>
    </div>
  );
});

export default Game;
