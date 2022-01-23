import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import EducationPage from "./pages/EducationPage/EducationPage";
import AbhinamPage from "./pages/ExperiencePage/AbhinamPage/AbhinamPage";
import CubeCloudPage from "./pages/ExperiencePage/CubeCloudPage/CubeCloudPage";
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage";
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/about-me" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/experience/cube-cloud" element={<CubeCloudPage />} />
        <Route path="/experience/abhinam" element={<AbhinamPage />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>
    </div>
  );
}

export default App;
