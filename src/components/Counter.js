/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

const Counter = () => {
  // const [increment, setIncrement] = useState(0);
  // const [decrement, setdecrement] = useState(0);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button disabled={count === 5} onClick={handleIncrement} className="btn card__btn">
            +
          </button>
          <button disabled={count === -5} onClick={handleDecrement} className="btn card__btn">
            -
          </button>
          <button onClick={handleReset} className="btn card__btn">
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
