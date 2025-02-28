import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Volunteering from "./components/Volunteering"; // Nuevo componente
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Componentes principales */}
      <Header />
      <Hero />
      <About />
      <Experience />
      <Volunteering /> {/* Añade esta línea */}
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}