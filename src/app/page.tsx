import Hero from './components/home/Hero';
import About from './components/home/About';
import Projects from './components/home/Projects';
import Skills from './components/home/Skills';
import Contact from './components/home/Contact';

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
