import {Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Team from "./components/Team";
import Internship from "./components/Internship";
import Navbar from "./components/Navbar";



const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/internship" element={<Internship/>} />
      </Routes>
    </>
  );
};

export default App;

