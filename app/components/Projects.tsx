"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const recognitions = [
    {
      title: "Ganador premio al esfuerzo Business Camp UDP - ANID",
      description:
        "Desafío de la 'Agencia Nacional de Investigación y Desarrollo' (ANID), para potenciar el acceso y apropiabilidad de las investigaciones en el sector productivo, con estándares de desarrollo y sustentabilidad.",
      date: "Noviembre 2021",
      organization: "Universidad Diego Portales",
    },
    {
      title: "Ganador Business Camp UDP - Cementos Melón",
      description:
        "Desafío de Transformación Digital de la empresa 'Cementos Melón', orientado a mejorar la comunicación y coordinación con las obras, aumentando la productividad tanto del cliente como de la empresa.",
      date: "Noviembre 2020",
      organization: "Universidad Diego Portales",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Reconocimientos y Premios</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {recognitions.map((recognition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md p-6"
            >
              {/* Título */}
              <h3 className="text-xl font-semibold mb-2">{recognition.title}</h3>
              {/* Organización */}
              <p className="text-gray-600 text-sm mb-2">{recognition.organization}</p>
              {/* Fecha */}
              <p className="text-gray-500 text-sm mb-4">{recognition.date}</p>
              {/* Descripción */}
              <p className="text-gray-700">{recognition.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}