import "antd/dist/antd.css";
import "./App.scss";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
