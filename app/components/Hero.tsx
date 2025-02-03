"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Imagen de perfil */}
        <Image
          src="https://media.licdn.com/dms/image/v2/D4E03AQE2V4wDeaA1uw/profile-displayphoto-shrink_200_200/B4EZRWwtfwHEAs-/0/1736622398242?e=1744243200&v=beta&t=Ak2zShD1VfPJtqVaifdF1xuiJVlvPfrlq3pAN2EWlQk"
          alt="Raúl Vergara Leiva"
          width={200}
          height={200}
          className="rounded-full shadow-lg mb-8 object-cover"
        />
        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Raúl Vergara Leiva
        </h1>
        {/* Subtítulo */}
        <p className="text-xl text-gray-600 mb-8">
          Estudiante de Ingeniería Civil Industrial | Innovación, Optimización y Sostenibilidad
        </p>
        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Botón "Contáctame" */}
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Contáctame
          </a>
          {/* Botón "Descargar CV" */}
          <a
            href="/cv/Raul_Vergara_CV.pdf" // Ruta al archivo PDF de tu CV
            download="Raul_Vergara_CV.pdf" // Nombre del archivo al descargar
            className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition duration-300"
          >
            Descargar CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}