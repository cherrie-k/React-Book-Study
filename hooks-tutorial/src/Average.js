import { useState } from "react";

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

  const onChange = (e) => {
    // onChange일 때 useState의 setNumber 세터함수로 e.target.value 전달
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    // nextList는 concat 함수가 새로 생성해서 전달한 숫자들의 함수
    const nextList = list.concat(parseInt(number));
    // onInsert일 때 useState의 setList 세터함수로 nextList 전달
    setList(nextList);
    setNumber(""); // number는 다시 ""으로...
  };

  return (
    <div>
      {/* input에 들어오는 value는 number이고 */}
      <input value={number} onChange={onChange} />
      {/* 버튼 클릭하면 onInsert 함수 실행. list 업데이트. */}
      <button onClick={onInsert}>등록</button>
      <ul>
        {/* map 함수를 통해 li 요소 반복. */}
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;
