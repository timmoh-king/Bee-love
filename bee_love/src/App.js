import { Route, Routes } from "react-router-dom";
import Aboutpage from "./components/pages/Aboutpage";
import Contactpage from "./components/pages/Contactpage";
import Productpage from "./components/pages/Productpage";
import Servicespage from "./components/pages/Servicespage";
import Testimonialpage from "./components/pages/Testimonialpage";
import Webpage from "./components/pages/Webpage";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Webpage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="products" element={<Productpage  />} />
        <Route path="services" element={<Servicespage />} />
        <Route path="testimonials" element={<Testimonialpage />} />
        <Route path="contact" element={<Contactpage />} />
      <Route path="*" element={<Webpage />} />
      </Routes>
    </div>
  );
}

export default App;
