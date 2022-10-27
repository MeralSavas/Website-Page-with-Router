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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="About" element={<About />} />
        <Route path="Services" element={<Services />} />

        <Route path="Home" element={<Home />}>
          <Route path="Html" element={<Html />} />
          <Route path="Css" element={<Css />} />
          <Route path="Logo" element={<Logo />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
