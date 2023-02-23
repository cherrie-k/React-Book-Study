import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import EventPractice from './EventPractice';
import Counter2 from './Counter';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/"> MyComponent </Link> |
        <Link to="/eventpractice"> Event Prtc </Link> |
        <Link to="/counter"> Counter </Link> |
      </nav>
      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/eventpractice" element={<EventPractice />} />
        <Route path="/counter" element={<Counter2 />} />
      </Routes>
    </div>
  );
};

export default App;
