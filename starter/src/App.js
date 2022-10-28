import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Logo from "./pages/Logo";
import Card from "./components/card/Card";
import data from "./helper/data";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/logo" element={<Logo />} />

        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="card/:id" element={<Card data={data} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
