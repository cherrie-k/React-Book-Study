import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  // 아무 값 없을 때 0 리턴
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b); // 더하고
  return sum / numbers.length; // 평균값 리턴
};

const Average = () => {
  const [list, setList] = useState([]); // 초기값이 빈 배열임
  const [number, setNumber] = useState("");

  // useRef를 사용해서 ref를 설정하면 useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가리킴.
  const inputEl = useRef(null);

  /* useCallback으로 최적화 하기 전 onChange
  const onChange = (e) => {
    // onChange일 때 useState의 setNumber 세터함수로 e.target.value 전달
    setNumber(e.target.value);
  }; */
  // useCallback을 활용한 onChange 최적화
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  /* useCallback으로 최적화 하기 전 onInsert
  const onInsert = (e) => {
    // nextList는 concat 함수가 새로 생성해서 전달한 숫자들의 함수
    const nextList = list.concat(parseInt(number));
    // onInsert일 때 useState의 setList 세터함수로 nextList 전달
    setList(nextList);
    setNumber(""); // number는 다시 ""으로...
  }; */
  // useCallback을 활용한 onInsert 최적화
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

  // 여기서 useMemo를 추가해보자!!
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      {/* input에 들어오는 value는 number이고 */}
      <input value={number} onChange={onChange} ref={inputEl} />
      {/* 버튼 클릭하면 onInsert 함수 실행. list 업데이트. */}
      <button onClick={onInsert}>등록</button>
      <ul>
        {/* map 함수를 통해 li 요소 반복. */}
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;

/*
import React, { useState, useMemo } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  }; // 컴포넌트가 처음 렌더링 될 때만 함수 생성

  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  }; // number 혹은 list 가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
*/
