import { useState } from 'react';

const IterationSample = () => {
  // useState을 사용한 상태 설정.
  const [names, setNames] = useState([
    // 객체 형태로 이루어진 배열 생성.객체에는 문자열과 고유 id값 있음.
    { id: 1, text: '딸기' },
    { id: 2, text: '체리' },
    { id: 3, text: '바나나' },
    { id: 4, text: '사과' },
  ]);

  // 문자열로 구성된 배열을 선언하고, 그 배열 값을 사용해서 <li>…</li> JSX 코드로 된 배열을 새로 생성한 후 nameList에 담아서 출력

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  /* const nameList = names.map((name, index) => (
    <li
      key={
        index
      } // key 값으로 map 함수에 전달되는 콜백 함수의 인수인 index 값 사용. 고유한 값이 없을 때만 index 값을 key로 사용할 것! 왜냐면 일케 하면 배열이 변경될 때 효율적으로 리렌더링 못함
    >
      {name}
    </li>
  )); */
  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);
  // 이전과 달리 key 값으로 index 대신 name.id로 지정.

  return <ul>{nameList}</ul>;
};

export default IterationSample;
