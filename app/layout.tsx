import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Configuración de la fuente Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Variable CSS para usar la fuente globalmente
});

export const metadata: Metadata = {
  title: "Raúl Vergara Leiva - Estudiante de Ingeniería Civil Industrial",
  description:
    "Portfolio profesional de Raúl Vergara Leiva, estudiante de Ingeniería Civil Industrial con experiencia en gestión de proyectos, optimización de procesos y transformación digital.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* Añadimos la clase de la fuente Inter como variable global */}
      <body
        className={`${inter.variable} font-sans bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}