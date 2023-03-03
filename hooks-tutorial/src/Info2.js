// useReducer를 사용한 Info 컴포넌트이다!

// 이제 useReducer 대신 useInputs.js 내에 있는 커스텀 Hook 사용!
/*
import { useReducer } from "react";
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
*/

import useInputs from "./useInputs";

const Info2 = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        {/* useState 사용할 때와 달리 onCHange 함수 하나로 name과 nickname 모두 관리 가능 */}
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info2;
