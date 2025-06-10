import React from "react";
import {
  Lightbulb,
  Gamepad2,
  Users,
  Code2,
  BrainCog,
  MonitorSmartphone,
} from "lucide-react";
import { motion } from "framer-motion";

const infoItems = [
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Innovación con propósito",
    text: "Creemos que la tecnología puede ser divertida y útil al mismo tiempo. Nos gusta pensar soluciones que realmente sumen.",
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-secondary" />,
    title: "Jugabilidad adaptada",
    text: "Con JurassiDraft, reimaginamos el juego Draftosaurus para hacerlo más accesible, digital y registrable.",
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: "Trabajo en equipo",
    text: "Seba, Tomi, Joaco y Nacho diseñamos cada parte con comunicación y objetivos en común, como un verdadero equipo dev.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-warning" />,
    title: "Código accesible",
    text: "JurassiDraft está construido con PHP, MySQL, Bootstrap y JavaScript. Usamos herramientas simples pero potentes, al alcance de cualquier estudiante.",
  },
  {
    icon: <BrainCog className="w-8 h-8 text-success" />,
    title: "Pensamiento educativo",
    text: "Nos motiva crear herramientas que también puedan usarse en contextos educativos y de aprendizaje lúdico.",
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-info" />,
    title: "Diseño responsive",
    text: "Nos aseguramos de que nuestras apps se vean bien en celulares, tablets y computadoras.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const InfoSection = () => {
  return (
    <section id="info" className="py-20 px-4 bg-base-100">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">¿Qué es JurassiCode?</h2>
        <p className="text-lg text-base-content">
          JurassiCode es una empresa ficticia nacida como proyecto de egreso de UTU, pero creada con toda la seriedad
          de un equipo real. Desarrollamos ideas web intuitivas, con foco en juegos, educación y tecnología accesible.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {infoItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-base-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            variants={cardVariants}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-base-content">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default InfoSection;
