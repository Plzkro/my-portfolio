"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar el scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition duration-300">
              Raúl Vergara Leiva
            </a>
          </motion.div>
          {/* Menú de navegación */}
          <ul className="hidden md:flex space-x-6">
            <NavItem href="#home">Inicio</NavItem>
            <NavItem href="#about">Sobre mí</NavItem>
            <NavItem href="#experience">Experiencia</NavItem>
            <NavItem href="#volunteering">Voluntariados</NavItem> {/* Nueva opción */}
            <NavItem href="#education">Educación</NavItem>
            <NavItem href="#skills">Habilidades</NavItem>
            <NavItem href="#projects">Proyectos</NavItem>
            <NavItem href="#contact">Contacto</NavItem>
          </ul>
          {/* Menú hamburguesa para dispositivos móviles */}
          <MobileMenu />
        </div>
      </nav>
    </motion.header>
  );
}

// Componente para los elementos del menú
function NavItem({
  href,
  children,
  onClick, // Añadimos esta propiedad
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void; // onClick es opcional
}) {
  return (
    <li>
      <a
        href={href}
        className="text-gray-800 hover:text-blue-600 transition duration-300"
        onClick={onClick} // Asignamos el onClick al elemento <a>
      >
        {children}
      </a>
    </li>
  );
}

// Componente para el menú hamburguesa (responsive)
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      {/* Botón del menú hamburguesa */}
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Menú desplegable */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 right-0 bg-white shadow-md rounded-md p-4 w-48"
        >
          <ul className="space-y-2">
            <NavItem href="#home" onClick={() => setIsOpen(false)}>
              Inicio
            </NavItem>
            <NavItem href="#about" onClick={() => setIsOpen(false)}>
              Sobre mí
            </NavItem>
            <NavItem href="#experience" onClick={() => setIsOpen(false)}>
              Experiencia
            </NavItem>
            <NavItem href="#volunteering" onClick={() => setIsOpen(false)}> {/* Nueva opción */}
              Voluntariados
            </NavItem>
            <NavItem href="#education" onClick={() => setIsOpen(false)}>
              Educación
            </NavItem>
            <NavItem href="#skills" onClick={() => setIsOpen(false)}>
              Habilidades
            </NavItem>
            <NavItem href="#projects" onClick={() => setIsOpen(false)}>
              Proyectos
            </NavItem>
            <NavItem href="#contact" onClick={() => setIsOpen(false)}>
              Contacto
            </NavItem>
          </ul>
        </motion.div>
      )}
    </div>
  );
}