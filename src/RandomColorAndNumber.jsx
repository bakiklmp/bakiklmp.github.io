import React, { useState, useEffect } from 'react';

function RandomColorAndNumber() {
  const [buttonColor, setButtonColor] = useState('#000');
  const [randomNumber, setRandomNumber] = useState(0); 

  const changeButtonColor = () => {
    const randomColor = getRandomColor();
    setButtonColor(randomColor);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 101); 
      setRandomNumber(newRandomNumber);
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={changeButtonColor}
      >
        Beni Değiştir!
      </button>
      <p>{randomNumber}</p>
    </div>
  );
}

export default RandomColorAndNumber;
