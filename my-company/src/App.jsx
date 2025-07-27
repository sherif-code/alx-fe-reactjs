
import "./App.css";
import { Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Routes path="/home" element={<Home />} />
        <Routes path="/about" element={<About />} />
        <Routes path="/services" element={<Services />} />
        <Routes path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
