import React from "react";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const questions = [
  {
    q: "¿Quiénes están detrás de JurassiCode?",
    a: "JurassiCode está formado por Seba, Tomi, Joaco y Nacho. Somos estudiantes de UTU que decidimos encarar el proyecto de egreso como si fuera real: con marca, diseño, objetivos claros y muchas ganas de aprender haciendo."
  },
  {
    q: "¿Qué es JurassiDraft y cómo se juega?",
    a: "JurassiDraft es una aplicación web inspirada en el juego de mesa Draftosaurus. La versión digital está pensada para registrar partidas reales, simular el juego con reglas adaptadas y facilitar el seguimiento desde dispositivos móviles o computadora. Más información será revelada cerca de su entrega y lanzamiento oficial."
  },
  {
    q: "¿Está basado en Draftosaurus real?",
    a: "Sí, completamente. JurassiDraft toma como base el juego de mesa Draftosaurus, adaptándolo al mundo digital con pequeñas modificaciones para que sea más fluido en pantalla y fácil de registrar."
  },
  {
    q: "¿Se va a poder usar fuera de la UTU?",
    a: "Esa es la idea. Si bien nace como un proyecto de egreso, queremos que la app tenga calidad suficiente como para ser útil para docentes, estudiantes o simplemente fans del juego, más allá del ámbito educativo."
  }
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 px-4 sm:px-6 md:px-8 bg-base-200">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className="font-bold text-3xl sm:text-4xl text-center pb-10"
          variants={fadeUp}
        >
          Preguntas Frecuentes
        </motion.h1>

        {questions.map((item, i) => (
          <motion.div key={i} className="mb-8" variants={fadeUp}>
            <div className="flex gap-3 items-start">
              <HelpCircle className="text-secondary w-6 h-6 shrink-0 mt-1" />
              <div className="flex flex-col">
                <h2 className="font-semibold text-base sm:text-lg italic">{item.q}</h2>
                <p className="text-sm sm:text-base text-base-content mt-1">{item.a}</p>
              </div>
            </div>
            {i < questions.length - 1 && <div className="divider mt-6 mb-6" />}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FaqSection;
