"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Contáctame</h2>
        </motion.div>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-gray-700">
            Estoy disponible para colaborar en nuevos proyectos, responder preguntas o simplemente charlar sobre tecnología. ¡No dudes en contactarme!
          </p>
          {/* Formulario integrado con Formspree */}
          <form
            action="https://formspree.io/f/xpwqadnr"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}