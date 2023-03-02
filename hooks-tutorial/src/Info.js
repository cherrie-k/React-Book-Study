import { useState } from "react";

const Info = () => {
  const [name, setName] = useState(""); // name의 기본값이 ''
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    // 세터 함수 setName을 통한 state 변경
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    // 세터 함수 setNickname을 통한 state 변경
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
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

export default Info;
