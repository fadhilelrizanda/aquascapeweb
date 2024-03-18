import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Statpage from "./pages/Statpage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/statistics" element={<Statpage />} />
        <Route path="/table" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
