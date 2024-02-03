import Header from "./components/Header"
import Home from "./components/Home";
import Work from "./components/Work";
import TimeLine from "./components/Timeline";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Work />
      <TimeLine />
      <Services />
      <Contact />
      <Footer/>
      <Toaster/>
    </div>
  );
}

export default App;
