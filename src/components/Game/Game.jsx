import React, { useState, forwardRef } from 'react';
import "../Game/Game.css";

const Game = forwardRef((props, ref) => {
  const [result, setResult] = useState('');
  const [point, setPoint] = useState(0);
  const [Box, setBox] = useState(false);

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
      setPoint((prevPoint) => {
        const newPoint = prevPoint + 3;
        if (newPoint >= 12) {
          setBox(true);
        }
        return newPoint;
      });
    } else {
      gameResult = 'کامپیوتر برد';
      setPoint((prevPoint) => prevPoint - 3);
    }

    setResult(`شما: ${userChoice} | کامپیوتر: ${computerChoice} = ${gameResult}`);
  };

  const resetGame = () => {
    setPoint(0);
    setResult('');
    setBox(false);
  };

  return (
    <div className="game-container">
      <h1>بازی سنگ کاغذ قیچی</h1>
      <div className="buttons">
        <button onClick={() => playGame('سنگ')}>✊ سنگ</button>
        <button onClick={() => playGame('کاغذ')}>🖐 کاغذ</button>
        <button onClick={() => playGame('قیچی')}>✌ قیچی</button>
      </div>
      <h2 className='result'>{result}</h2>
      <h3>امتیاز: {point} ⭐</h3>
      {Box && 
        <div className="win-box">
          <h2>شما بردید</h2>
          <button onClick={resetGame}>شروع مجدد</button>
        </div>
      }
    </div>
  );
});

export default Game;
