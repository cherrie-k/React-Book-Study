// EventPractice.js

import React, { useState } from 'react';

const EventPractice = () => {
  // constructor로서 일함
  const [form, setForm] = useState({
    // form은 현재 상태, setForm은 상태를 바꾸어주는 setter 함수.

    // 초깃값 설정
    username: '',
    message: '',
  });

  const { username, message } = form;

  // 이벤트 사용 할 때 camelCase로 해야 JSX가 알아들음.
  // JSX에서는 HTML과 달리 이벤트에 실행할 js 코드를 전달하는게 아니라, 함수 형태의 값을 전달해야 함.
  //  ㄴ 화살표 함수 문법 사용하거나 렌더링 부분 외부에 미리 만들어서 전달!
  const onChange = (e) => {
    const nextForm = {
      // 객체에 대한 사본을 만들 때 spread 연산자 (...) 사용
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
      // 객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key로 사용됨!!!
      //  ㄴ 결과가 {'e.target.name의 값': 'e.target.value의 값'} 이 되는겨
      // e.target.name 값을 활용하려면 이렇게 useState를 쓸 때 input 값들이 들어있는 form 객체를 사용해주면 됨!
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };

  // 참고로 DOM 요소(div, button, input, form, span 등)에만 이벤트 설정 가능하고, 직접 만든 컴포넌트는 이벤트 자체적으로 설정 불가.
  //  ㄴ 그러한 컴포넌트에 이벤트 설정 하려면? 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정 ( <div onClick={this.props.onClick}>어쩌구</div> 이런 식으로.)
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      // comment input에서 엔터키 눌렀을 때 handleClick 메소드 호출
      onClick();
    }
  };
  // 리액트에서 지원하는 이벤트 종류는 여기서 확인 => https://ko.reactjs.org/docs/events.html
  // Clipboard, Mouse, Media, Selection, Transition, Focus, Form, Wheel, Composition, Image 등 아주 다양

  /* 참고로 임의 메소드는 여기에
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      message: '',
    });
  }
  이런식으로 정의해두고 밑에 render 함수에서 
  <input
    어쩌구s~~
    onChage = {this.handleChange} 
  />
  이런 식으로 사용 가능. 
  함수가 호출 될 때 this는 호출부에 따라 결정. 
  따라서 클래스의 임의 메소드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 메소드와 this의 관계가 끊어짐.
  이 끊어진걸 극복하고 임의 메소드가 이벤트로 등록돼도 this가 컴포넌트 자신으로 제대로 가리키기 위해서는 
  메소드를 this와 바인딩(binding)하는 작업 필요. 이거 안하면 this는 undefined 가리킴. 


  혹은,,,,,,,!! !
  메소드 바인딩을 constructor에서 하면(정석) 새 메소드 만들 때마다 constructor도 수정해야 함.
  이걸 간단하게 하기 위해 바벨에서 transform-class-properties 문법 사용해서 화살표 함수 형태로 메소드 정의 가능.
  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  요런 식으로 정의하고 마찬가지로 <input 내에서 onChange={this.handleChange} !!
  */

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        // onChange(좌항) 일 때 위에서 정의한 onChange(우항) 실행
        onChange={onChange}
        // onChange가 잘 일어나는지 보려면 onChange={(e) => {console.log(e /*혹은 e.target.value 일케 하면 값이 바뀔때마다 콘솔에 그 값 기록해줌*/)}}
        //  ㄴ 여기서 콘솔에 기록되는 e 객체는 SyntheticEvent 임.
        //     ㄴ 웹 브라우저의 네이티브 이벤트를 감싸는 객체. 네이티브 이벤트와 달리 이벤트가 끝나고 나면 초기화됨. 정보 참고 불가능.
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
      {/* 참고로 여기에 바로
      <button 
        onClick={() => {
          alert(username + ': ' + message);
          setForm({
            username: '',
            message: '',
          });
        }}
      > 확인 </button>
      이렇게도 가능 */}
    </div>
  );
};

export default EventPractice;
