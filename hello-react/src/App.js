import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import EventPractice from './EventPractice';
import Counter from './Counter';
import MyComponent from './MyComponent';
import Input2 from './outsides/Input';
import UserList from './outsides/List';
import Say from './Say';

// JSX는 자바스크립트의 확장 문법. 코드 번들링 과정에서 '바벨'을 사용해서 일반 js 형태의 코드로 변환.
// 복수의 JSX 컴포넌트는 반드시 부모 요소 하나로 감싸져 있어야 함. 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문.
const App = () => {
  return (
    // JSX에선 class 대신 className
    <div className="App">
      <nav>
        <Link to="/"> MyComponent </Link> |
        <Link to="/eventpractice"> Event Prtc </Link> |
        <Link to="/counter"> Counter </Link> | <Link to="/input"> Input </Link>{' '}
        |<Link to="/say"> Say </Link> | <Link to="/list"> List </Link> |
      </nav>
      <Routes>
        <Route path="/" element={<MyComponent favoriteNumber={777} />} />
        <Route path="/eventpractice" element={<EventPractice />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input2 /> /*'self-closing tag'*/} />
        <Route path="/say" element={<Say />} />
        <Route path="/list" element={<UserList />} />
      </Routes>
    </div>
  );
};

export default App;

/*참고: 
- JSX 내부에선 if문 대신 {삼항 연산자} 사용
- 리액트 컴포넌트 함수에서 undefined만 반환한다면 렌더시 오류 발생, but JSX 내부에서 렌더링하는건 가능
*/
