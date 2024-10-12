import React, { useState, useEffect } from 'react';
import '../Timer/Timer.css'
function Timer() {
  const [timeEnd, setTimeEnd] = useState(120);

  useEffect(() => {
    const everySecond = setInterval(() => {
        setTimeEnd((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(everySecond);
  }, [timeEnd]);

  return (
    <div className='time'>
      <h2 className='text-time'>زمان باقی‌مانده: {timeEnd}</h2>
    </div>
  );
};

export default Timer;
