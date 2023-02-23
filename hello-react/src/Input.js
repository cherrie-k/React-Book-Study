import React, { useState } from 'react';

const Input = () => {
  const [txtValue, setTextValue] = useState('');

  const onChangee = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={txtValue} onChange={onChangee} />
      <br />
      <p>{txtValue} </p>
    </div>
  );
};

const Input2 = () => {
  const [inputs, setInputs] = useState({
    // 복수의 오브젝트들 명시
    name: '',
    email: '',
    tel: '',
  });

  // 이걸 해줘야 JSX의 value 값 안에 {name} 등을 넣어서 쓸 수 있음
  const { name, email, tel } = inputs;

  const onChangee = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    // inputs[id] = value; 이런식으로 하면 리액트 상태관리가 불가. key로 접근 X.
    // 따라서 아래와 같이 해줘야함
    setInputs({
      // spread 문법을 통해 name, email, tel 오브젝트를 deep copy 해서 새로운 오브젝트를 만듦
      ...inputs,
      [id]: value,
    });
  };

  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={onChangee} />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" id="email" value={email} onChange={onChangee} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" id="tel" value={tel} onChange={onChangee} />
      </div>
      <p>이름: {name}</p>
      <p>이메일: {email}</p>
      <p>전화번호: {tel}</p>
    </div>
  );
};

export default Input2;
