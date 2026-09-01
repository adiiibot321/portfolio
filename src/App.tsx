import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Resume } from './components/Resume';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { CareerGoal } from './components/CareerGoal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-textMain selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Certifications />
        <Education />
        <Experience />
        <Achievements />
        <CareerGoal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
