import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Data from "./pages/Data";
import About from "./pages/About";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/api" element={<Data />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
