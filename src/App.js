import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Example from './components/Example';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
      <Example/>
    </div>
  );
}

export default App;
