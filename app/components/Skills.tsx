"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { category: "Técnicas", items: ["Modelamiento de optimización", "Análisis de datos", "Python", "AMPL"] },
    { category: "Gestión", items: ["Scrum", "BPM", "Design Thinking", "Liderazgo"] },
    { category: "Herramientas", items: ["Excel avanzado", "Power BI", "Transformación Digital"] },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Habilidades</h2>
        </motion.div>
        <div className="space-y-8">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-4">
                {skillGroup.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}