"use client";
import { motion } from "framer-motion";

export default function Education() {
  const educations = [
    {
      title: "Ingeniería Civil Industrial",
      institution: "Universidad Diego Portales",
      date: "2019 – En curso",
      description:
        "La Ingeniería Civil Industrial es una disciplina que combina principios de ingeniería, ciencias administrativas y economía para optimizar procesos, mejorar la eficiencia operativa y resolver problemas complejos en entornos industriales. Durante mi formación, he desarrollado habilidades en modelamiento matemático, análisis de datos, gestión de proyectos y transformación digital. Además, he aplicado metodologías como Design Thinking y Scrum para abordar desafíos reales en proyectos académicos y prácticas profesionales.",
    },
    {
      title: "Camino a la Excelencia en Gestión de Proyectos",
      institution: "Pontificia Universidad Católica de Chile",
      date: "Noviembre 2023",
      description:
        "Este curso intensivo explora metodologías avanzadas de gestión de proyectos, incluyendo enfoques ágiles (Scrum, Kanban) y tradicionales (PMBOK). Se enfatiza la importancia de liderazgo efectivo, comunicación clara y análisis estratégico para garantizar el éxito de los proyectos. Durante el curso, participé en simulaciones prácticas y casos de estudio que me permitieron aplicar herramientas como BPM (Business Process Management) y KPIs estratégicos.",
    },
    {
      title: "Design Thinking",
      institution: "Fundación Telefónica Movistar Chile",
      date: "Abril 2023",
      description:
        "El curso de Design Thinking se centra en la innovación centrada en el usuario, utilizando un enfoque iterativo para resolver problemas complejos. Aprendí técnicas como empatía, definición de problemas, ideación, prototipado y prueba. Estas habilidades son especialmente útiles para desarrollar soluciones creativas y sostenibles en entornos colaborativos.",
    },
    {
      title: "Scrum Fundamentals Professional Certificate (SFC™)",
      institution: "CertiProf",
      date: "Enero 2022",
      description:
        "Esta certificación internacional valida conocimientos en metodologías ágiles y Scrum, con un enfoque en la gestión de equipos autogestionados y entregables iterativos. Aprendí conceptos clave como roles (Product Owner, Scrum Master, Development Team), eventos (Sprints, Daily Standups) y artefactos (Product Backlog, Sprint Backlog). Esta certificación ha sido fundamental para gestionar proyectos de manera eficiente y adaptativa.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Educación</h2>
          <div className="space-y-6">
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md max-w-2xl mx-auto"
              >
                <h3 className="text-xl font-semibold">{edu.title}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-500 text-sm">{edu.date}</p>
                <p className="text-gray-700 mt-2">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}