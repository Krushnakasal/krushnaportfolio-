import About from "./components/About";
import Contactus from "./components/Contactus";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <About />
      <Portfolio />
      <Experience />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;
