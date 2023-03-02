import { Routes, Route, Link } from "react-router-dom";

import Counter from "./Counter";
import InfoParent from "./InfoParent";
import Counter2 from "./Counter2";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/"> Counter </Link> | <Link to="/info"> Info </Link> |{" "}
        <Link to="/counter2"> Counter2 </Link> |
      </nav>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/info" element={<InfoParent />} />
        <Route path="/counter2" element={<Counter2 />} />
      </Routes>
    </div>
  );
};

export default App;
