import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import EventPractice from './EventPractice';
import Counter2 from './Counter';
import MyComponent from './MyComponent';
import Input2 from './Input';

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/"> MyComponent </Link> |
        <Link to="/eventpractice"> Event Prtc </Link> |
        <Link to="/counter"> Counter </Link> | <Link to="/input"> Input </Link>{' '}
        |
      </nav>
      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/eventpractice" element={<EventPractice />} />
        <Route path="/counter" element={<Counter2 />} />
        <Route path="/input" element={<Input2 />} />
      </Routes>
    </div>
  );
};

export default App;
