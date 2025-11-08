import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer"; // <-- import Footer
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";3
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import SignLang from "./pages/projects/SignLang";
import SongRec from "./pages/projects/SongRec";
import Aero from "./pages/projects/Aero";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true, 
    });
  }, []);  

  return (
    <div className="app flex flex-col min-h-screen">
      <Navbar /> {/* Floating navbar across all pages */}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/SignLang" element={<SignLang />} />
          <Route path="/projects/SongRec" element={<SongRec />} />
          <Route path="/projects/Aero" element={<Aero />} />
        </Routes>
      </main>

      <Footer /> {/* Footer appears on all pages */}
    </div>
  );
};

export default App;
