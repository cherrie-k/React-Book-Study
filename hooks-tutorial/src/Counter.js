import { useState } from "react";
// useState는 가장 기본적인 Hook이고, 상태 관리에 사용. 함수 컴포넌트도 가변적인 상태를 지닐 수 있게 해줌.

const Counter = () => {
  // useState 사용 방법. 함수 파라미터에는 상태의 기본값을 넣어줌
  const [value, setValue] = useState(0); // 카운터 기본값이 0
  // useState 호출시 배열 반환.첫 번째 원소는 상태값, 두 번째 원소는 상태 설정 함수
  // 상태 설정 함수에 파라미터를 넣어서 호출시 전달받은 파라미터로 값이 바뀌고 컴포넌트가 정상적으로 리렌더링됨.

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
