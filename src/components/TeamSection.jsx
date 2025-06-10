import React from "react";
import TeamCard from "./TeamCard";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: "nacho",
    name: "Ignacio Fianza",
    bio: "Full Stack developer, fuerte enfoque en programación front-end. Amante de los autos y apasionado por las telecomunicaciones, estudiante de UTU.",
    org: "JurassiCode",
    location: "Montevideo, Uruguay",
    email: "ignacio@ignaciofianza.com",
    portfolio: "https://www.ignaciofianza.com",
  },
  {
    id: "seba",
    name: "Sebastián Benítez",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni vero veniam laborum nobis obcaecati tenetur.",
    org: "JurassiCode",
    location: "Montevideo, Uruguay",
    email: "seba@mail.com",
    portfolio: "https://sebastianbenitezwebdev.netlify.app/",
  },
  {
    id: "tomi",
    name: "Tomás Paz",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni vero veniam laborum nobis obcaecati tenetur.",
    org: "JurassiCode",
    location: "Montevideo, Uruguay",
    email: "tomi@mail.com",
  },
  {
    id: "joaco",
    name: "Joaquín Fleitas",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni vero veniam laborum nobis obcaecati tenetur.",
    org: "JurassiCode",
    location: "Montevideo, Uruguay",
    email: "joaco@mail.com",
  },
];

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
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const TeamSection = () => {
  return (
    <section id="team" className="py-20 px-4 bg-base-100">
      <motion.div
        className="w-[80%] mx-auto text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.h2 className="text-4xl font-bold" variants={fadeUp}>
          Nuestro equipo
        </motion.h2>
        <motion.p className="text-base-content mt-2" variants={fadeUp}>
          JurassiCode está formado por estudiantes comprometidos, con diferentes
          fortalezas pero el mismo objetivo: construir algo con impacto real.
        </motion.p>
      </motion.div>

      <motion.div
        className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            id={member.id}
            variants={fadeUp}
            className="scroll-mt-28"
          >
            <TeamCard {...member} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;
