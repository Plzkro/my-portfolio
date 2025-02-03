"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Sobre mí</h2>
        </motion.div>
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="text-gray-700">
            Soy un estudiante de Ingeniería Civil Industrial con experiencia en liderazgo, gestión de proyectos y optimización de procesos. Apasionado por integrar tecnología, innovación y sostenibilidad para generar impacto positivo.
          </p>
          <p className="text-gray-700">
            Certificado en gestión de proyectos y técnicas avanzadas de Inteligencia Artificial, con habilidades en modelamiento matemático, análisis de datos y uso de herramientas tecnológicas aplicadas a la eficiencia operativa.
          </p>
          <p className="text-gray-700">
            Mi enfoque está en resolver problemas complejos mediante soluciones innovadoras y colaborativas. Siempre busco aprender nuevas tecnologías y metodologías para mejorar mis habilidades y contribuir al éxito de los proyectos en los que participo. ¡Explora mi portfolio para conocer más sobre mi experiencia y logros!
          </p>
        </div>
      </div>
    </section>
  );
}