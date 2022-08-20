import Home from "./Routes/Home";
import WorldCup from "./Routes/WorldCup";
import { createGlobalStyle } from "styled-components";
const { Routes, Route } = require("react-router-dom");

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/w" element={<WorldCup />} />
      </Routes>
    </>
  );
}

export default App;
