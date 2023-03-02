import { useState } from "react";
import Info from "./Info";

// Info 컴포넌트의 가시성을 바꿀 수 있게 해줌
const InfoParent = () => {
  const [visible, setVisible] = useState(false); // 기본값이 false
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default InfoParent;
