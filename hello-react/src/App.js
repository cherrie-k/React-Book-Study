import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import EventPractice from './EventPractice';
import Counter from './Counter';
import MyComponent from './MyComponent';
import Input2 from './outsides/Input';
import UserList from './outsides/List';

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/"> MyComponent </Link> |
        <Link to="/eventpractice"> Event Prtc </Link> |
        <Link to="/counter"> Counter </Link> | <Link to="/input"> Input </Link>{' '}
        |<Link to="/list"> List </Link> |
      </nav>
      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/eventpractice" element={<EventPractice />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input2 />} />
        <Route path="/list" element={<UserList />} />
      </Routes>
    </div>
  );
};

export default App;
