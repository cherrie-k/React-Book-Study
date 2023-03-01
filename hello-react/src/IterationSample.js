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

  // onChange 함수 추가
  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    // 배열 내장 함수 concat 사용해서 새로운 항목을 추가한 배열 생성.
    // concat() 함수는 두 개의 문자열/배열을 하나의 문자열/배열로 만들어주는 역할 수행.
    const nextNames = names.concat({
      id: nextId, // nextId 값을 id로 설정
      text: inputText,
    });
    setNextId(nextId + 1); // 클릭 될 때 마다 nextId 값에 1 더해줌
    // setNaems를 통해 상태 업데이트
    setNames(nextNames); // 버튼 클릭시 names 값을 업데이트함
    setInputText(''); // 버튼 클릭시 inputText를 비움
  };

  const onRemove = (id) => {
    // 배열 내장함수 filter를 통해서 목표 id를 가진 애 제외한 배열을 다시 생성.
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames); // onRemove시 names 값을 업데이트함
  };

  const namesList = names.map((name) => (
    <li
      key={name.id}
      onDoubleClick={() =>
        onRemove(name.id)
      } /* onDoubleClick시 onRemove 함수 수행 */
    >
      {name.text}
    </li>
  ));
  // 이전과 달리 key 값으로 index 대신 name.id로 지정. 이전 nameList는 젤 밑에 있움

  return (
    <>
      <h3>더블클릭시 원소 삭제됨</h3>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;

/* const nameList = names.map((name, index) => (
    <li
      key={
        index
      } // key 값으로 map 함수에 전달되는 콜백 함수의 인수인 index 값 사용. 고유한 값이 없을 때만 index 값을 key로 사용할 것! 왜냐면 일케 하면 배열이 변경될 때 효율적으로 리렌더링 못함
    >
      {name}
    </li>
  )); */
