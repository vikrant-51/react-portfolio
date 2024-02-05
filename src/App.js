import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import TimeLine from "./components/Timeline";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import {useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <TimeLine />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
