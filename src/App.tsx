import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z"/>
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
