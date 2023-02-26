import { useState } from 'react';
// useState 함수는 함수 컴포넌트 내에서도 state을 사용 할 수 있게 해줌.

const Say = () => {
  const [message, setMessage] = useState('');
  // useState 함수의 인자에는 상태의 초깃값을 넣어줌. 참고로 클래스형 컴포에서 state의 초기값은 객체 형태여야 하지만 useState은 값의 형태가 자유임.
  // 함수를 호출하면 배열을 반환하는데, 첫 원소(message)는 현재 상태, 두번째 원소(setMessage)는 상태를 바꾸어주는 함수(setter 함수라 부름). 이름은 자유.
  // state 값을 바꿔야 할 때는 반드시 setState 혹은 useState을 통해 전달받은 세터 함수를 사용해야 함

  const onClickEnter = () => setMessage('안녕하세요!');
  // 화살표 함수를 썼지만 따로 {}을 열어주지 않았으니 연산한 값을 그대로 반환한다는 의미..?
  const onClickLeave = () => setMessage('안녕히가세요!');

  // 한 컴포넌트에서 useState 여러번 사용 가능
  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;
