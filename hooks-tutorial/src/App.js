import { Routes, Route, Link } from "react-router-dom";

import Counter from "./Counter";
import InfoParent from "./InfoParent";
import Counter2 from "./Counter2";
import Info2 from "./Info2";
import Average from "./Average";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/"> Counter </Link> | <Link to="/info"> Info </Link> |{" "}
        <Link to="/counter2"> Counter2 </Link> |{" "}
        <Link to="/info2"> Info2 </Link> | <Link to="/average"> Average </Link>{" "}
        |
      </nav>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/info" element={<InfoParent />} />
        <Route path="/counter2" element={<Counter2 />} />
        <Route path="/info2" element={<Info2 />} />
        <Route path="/average" element={<Average />} />
      </Routes>
    </div>
  );
};

export default App;
