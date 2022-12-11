import Home from "./components/Home/index.Home";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import Projects from "./components/Projects";

AOS.init();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
