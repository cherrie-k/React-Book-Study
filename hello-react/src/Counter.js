import { Component } from 'react';

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

// 간이 카운터 끝

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 7,
  };
  render() {
    const { number, fixedNumber } = this.state; // state을 조회할 때는 this.state으로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button //onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 setState가 호출되었슴다.');
                console.log(this.state);
              }
            );
          }}
        >
          Click To +1
        </button>
      </div>
    );
  }
}

export default Counter;
