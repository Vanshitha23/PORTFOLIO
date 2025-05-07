// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ Removed 'Router'
import Layout from './components/Layout';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import ExtraCurricular from './pages/ExtraCurricular';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter> {/* ✅ Use BrowserRouter */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="education" element={<Education />} />
          <Route path="extra-curricular" element={<ExtraCurricular />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
