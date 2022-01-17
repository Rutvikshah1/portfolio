import { Route, Routes } from "react-router-dom";
import "./App.css";
import ExperiancePage from "./pages/ExperiancePage/ExperiancePage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiancePage />} />
      </Routes>
    </div>
  );
}

export default App;
