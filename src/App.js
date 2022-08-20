import Home from "./Routes/Home";
import WorldCup from "./Routes/WorldCup";

const { Routes, Route } = require("react-router-dom");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/w" element={<WorldCup />} />
    </Routes>
  );
}

export default App;
