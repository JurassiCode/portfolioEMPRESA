import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mt-10 flex justify-center">
      <motion.div
        className="flex flex-col items-center text-center gap-6 max-w-xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="text-sm text-accent flex items-center gap-2"
          variants={fadeUp}
        >
          ¡JurassiDraft llega pronto! 🔜🔜
        </motion.span>

        <motion.h1 className="text-5xl font-bold" variants={fadeUp}>
          JurassiCode, desarrollando ideas{" "}
          <span className="text-primary">intuitivas</span> para la web
        </motion.h1>

        <motion.span className="" variants={fadeUp}>
          En <strong>JurassiCode</strong> unimos la tecnología con la educación
          y el juego. Creamos soluciones digitales accesibles, creativas y
          hechas para durar.
        </motion.span>

        <motion.div className="flex gap-4" variants={fadeUp}>
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection("info")}
          >
            Conocé nuestro trabajo
          </button>
          <button
            className="btn btn-outline"
            onClick={() => scrollToSection("team")}
          >
            Sobre nosotros
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
