"use client";
import { motion } from "framer-motion";

export default function Volunteering() {
  const volunteerings = [
    {
      title: "Coordinador General",
      organization: "Federación de Estudiantes UDP",
      period: "Diciembre 2023 – Abril 2024",
      description:
        "Lideré equipos multidisciplinarios para gestionar proyectos centrados en bienestar estudiantil, igualdad de oportunidades y sostenibilidad.",
      impact:
        "Actué como enlace entre estudiantes y autoridades, fomentando comunicación efectiva y organizando eventos académicos y culturales.",
    },
    {
      title: "Presidente",
      organization: "Centro de Estudiantes de Ingeniería Civil Industrial",
      period: "Noviembre 2022 – Noviembre 2023",
      description:
        "Representé a 1,400 estudiantes, desarrollando iniciativas para mejorar la experiencia académica.",
      impact:
        "Gestioné recursos y coordiné actividades para fortalecer la participación estudiantil.",
    },
    {
      title: "Asociado de Gestión de Proyectos",
      organization: "Fundación Polis",
      period: "Mayo 2022 – Octubre 2022",
      description:
        "Gestión de Proyectos dentro de la Fundación, orientación hacia objetivos y valor en diversos procesos.",
    },
  ];

  return (
    <section id="volunteering" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Voluntariados</h2>
        </motion.div>
        <div className="space-y-8">
          {volunteerings.map((volunteering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{volunteering.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{volunteering.organization}</p>
              <p className="text-gray-500 text-sm mb-4">{volunteering.period}</p>
              <p className="text-gray-700 mb-4">{volunteering.description}</p>
              {volunteering.impact && (
                <p className="text-blue-600 font-medium">{volunteering.impact}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}