import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Hero from '@/app/sections/Hero';
import About from '@/app/sections/About';
import Skills from '@/app/sections/Skills';
import Projects from '@/app/sections/Projects';
import Experience from '@/app/sections/Experience';
import Education from '@/app/sections/Education';
import Contact from '@/app/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
