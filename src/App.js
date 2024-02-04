import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import TimeLine from "./components/Timeline";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
console.log(ratio);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);
    return ()=>{
      window.removeEventListener("resize", resizeRatio);

    }
  }, [ratio]);

  return ratio < 2 ? (
    <div className="App">
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio}/>
      <Work />
      <TimeLine />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  ): <em id="customMessage">Please change the ratio to view website!</em>
}

export default App;
