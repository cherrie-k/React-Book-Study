// useReducer를 사용한 Counter 컴포넌트이다!

import { useReducer } from "react";

// useReducer를 사용했을 때의 가장 큰 장점: 컴포넌트 업데이트 로직을 컴포넌트 바같으로 빼낼 수 있다!
function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무것도 해당 안될 때 기존 상태 반환
      return state;
  }
}

const Counter2 = () => {
  // useReducer의 첫 번째 파라미터에는 리듀서 함수를, 두 번째 파라미터에는 해당 리듀서의 기본값을 넣어줌.
  // 이 Hook를 사용하면 state 값과 dispatch 함수를 받아오는데, state는 현재 가리키고 있는 상태, dispatch는 액션을 발생시키는 함수.
  //    ㄴ dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션 값을 넣어 주면 리듀서 함수가 호출되는 구조.
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <div>useReducer를 사용하여 기존의 Counter 컴포넌트 재구성</div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter2;
