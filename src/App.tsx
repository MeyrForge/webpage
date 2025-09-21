import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function App() {
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
    </div>
  );
}

export default App;
