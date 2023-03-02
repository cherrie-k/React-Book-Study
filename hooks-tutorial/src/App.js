import { Routes, Route, Link } from "react-router-dom";

import Counter from "./Counter";
import Info from "./Info";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/"> Counter </Link> | <Link to="/info"> Info </Link> |
      </nav>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
};

export default App;
