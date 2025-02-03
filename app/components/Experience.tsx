"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Práctica Ingeniero de Proyectos",
      company: "Unidad de Análisis Financiero",
      period: "Enero 2024 – Marzo 2024",
      description:
        "Diseñé e implementé un sistema de seguimiento y documentación para proyectos de TI y Transformación Digital (TD/TI), mejorando la eficiencia operativa.",
      impact:
        "Apliqué estándares de BPM y gestión de proyectos, analizando KPI estratégicos para procesos de adquisiciones.",
    },
    {
      title: "Monitor de Admisión",
      company: "Universidad Diego Portales",
      period: "Junio 2023 – Diciembre 2023",
      description:
        "Orienté a nuevos estudiantes durante el proceso de admisión, asegurando una experiencia fluida y positiva.",
      impact:
        "Colaboré en eventos institucionales y actividades de promoción.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Experiencia</h2>
        </motion.div>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{experience.company}</p>
              <p className="text-gray-500 text-sm mb-4">{experience.period}</p>
              <p className="text-gray-700 mb-4">{experience.description}</p>
              <p className="text-blue-600 font-medium">{experience.impact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}