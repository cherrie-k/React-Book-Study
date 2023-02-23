// 간이 카운터
import React, { useState } from 'react';

const Counter2 = () => {
  const [num, setNumber] = useState(0);

  const increase = () => {
    setNumber(num + 1);
  };

  const decrease = () => {
    setNumber(num - 1);
  };

  const divideByTwo = () => {
    setNumber(num / 1);
  };

  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <button onClick={divideByTwo}>나누기2</button>
      <p>{num}</p>
    </div>
  );
};

export default Counter2;
