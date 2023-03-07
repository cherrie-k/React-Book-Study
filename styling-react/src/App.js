// import "./App.css";
import { Component } from "react";
// react-router-dom 쓸 때 꼭 index.js에서 <BrowserRouter>로 <App> 감싸주기.
import { Routes, Route, Link } from "react-router-dom";
import CSSModule from "./CSSModule";
import SassComponent from "./SassComponent";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Sass Component</Link> |{" "}
          <Link to="/cssmodule">CSS Module</Link> |
        </nav>
        <Routes>
          <Route path="/" element={<SassComponent />} />
          <Route path="/cssmodule" element={<CSSModule />} />
        </Routes>
      </div>
    );
  }
}

export default App;
