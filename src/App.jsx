import Navbar from "./components/Navbar";
import CircuitTrace from "./components/CircuitTrace";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <CircuitTrace />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
