import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import About from "./Pages/ About";
import Services from "./Components/Services/Services";
import Contact from "./Pages/Contact";
import Residential from "./Components/Services/Residential";
import Office from "./Components/Services/Office";
import Hospitaly from "./Components/Services/Hospitaly";
import Commercial from "./Components/Services/Commercial";
import Default from "./Components/Services/Default";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Default />}> */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/residential" element={<Residential />} />
          <Route path="/services/office" element={<Office />} />
          <Route path="/services/hospitaly" element={<Hospitaly />} />
          <Route path="/services/commercial" element={<Commercial />} />
          {/* </Route> */}
          {/* </Route> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
