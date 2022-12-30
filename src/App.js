import styled from "styled-components";
import CountdownTimer from "./countdown/CountdownTimer";
import "./style.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Story from "./pages/Story";

function App() {
  const NOW_IN_MS = new Date("January 1, 2023 00:00:00:000");

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CountdownTimer targetDate={NOW_IN_MS} />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </Router>
  );
}

export default App;
