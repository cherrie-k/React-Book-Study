import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState(""); // name의 기본값이 ''
  const [nickname, setNickname] = useState("");

  // useEffect는 리액트 컴포넌트가 렌더링될 때마다 수행!!!! 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태.

  /* 1. useEffect를 렌더링 될 때마다 수행하는 경우. 기본. 
   // Info 컴포넌트에 useEffect 적용. input 값이 변경(업데이트) 될 때 마다 console에 찍힌다.
    useEffect(() => {
    console.log("렌더링이 완료되었슴니다!");
    console.log({ name, nickname });
  });
  */

  /* 2. useEffect를 마운트될 때만 실행하는 경우
    // -> 함수의 두 번째 파라미터로 비어있는 배열 넣어줌
    useEffect(
      () => {
        console.log("useEffect 마운트될 때만 실행됩니다");
      },
      [] //useEffect 함수의 두 번째 파라미터로 비어 있는 배열을 넣어주어서 업뎃 될때마다 실행하지 않고 맨 처음 렌더링될 때만 실행하게 함
      );
  */

  /* 3. useEffect를 특정 값이 업데이트될 때만 실행하는 경우
    // -> 함수의 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값 넣어줌
    useEffect(
      () => {
        console.log(name);
      },
      [name] //useEffect 함수의 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값 넣어주면 특정 값이 업데이트될 때만 useEffect가 실행됨
      // 배열 안에는 useState를 통해 관리하고 있는 상태를 넣어줘도 되고, props로 전달받은 값을 넣어줘도 됨
      );
  */

  /* 뒷정리(cleanup) -> 컴포넌트가 언마운트 되기 전이나 업데이트되기 전에 어떠한 작업을 수행하고 싶다면 이를 활용함.*/
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  /*
    만약 오직 언마운트될 때만 뒷정리 함수를 호출하고 싶다면, useEffect 함수의 두 번째 파라미터에 비어있는 배열을 넣으면 된다!
    useEffect(() => {
    console.log("effect");
    return () => {
      console.log("cleanup");
    };
  }, []);
  */

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
