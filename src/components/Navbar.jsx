import React from "react";
import {
  ChevronDown,
  Mailbox,
  SendHorizonal,
  Info,
  UsersRound,
  BriefcaseBusiness,
} from "lucide-react";
import { motion } from "framer-motion";

// Scroll suave sin mostrar #
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const Navbar = () => {
  const navLinks = [
    {
      label: "Info",
      icon: <Info size={17} />,
      target: "info",
    },
    {
      label: "FAQs",
      icon: <BriefcaseBusiness size={17} />,
      target: "faq",
    },
  ];

  const teamLinks = [
    { name: "Nacho", id: "nacho" },
    { name: "Seba", id: "seba" },
    { name: "Tomi", id: "tomi" },
    { name: "Joaco", id: "joaco" },
  ];

  return (
    <motion.nav
      className="navbar justify-between bg-base-300 px-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <a className="btn btn-ghost text-lg" href="/">
        <img alt="Logo" src="/images/logo.png" className="w-12" />
      </a>

      {/* Mobile menu */}
      <div className="dropdown dropdown-end sm:hidden">
        <button className="btn btn-ghost" tabIndex={0}>
          <ChevronDown />
        </button>

        <ul className="dropdown-content menu z-[1] bg-base-200 p-4 rounded-box shadow w-64 gap-2 mt-3">
          {navLinks.map((link, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(link.target)}
                className="flex items-center gap-2"
              >
                {link.icon}
                {link.label}
              </button>
            </li>
          ))}
          <li tabIndex={0}>
            <details>
              <summary className="menu-title flex items-center gap-2">
                <UsersRound size={17} />
                Equipo
              </summary>
              <ul className="p-2">
                {teamLinks.map((person) => (
                  <li key={person.id}>
                    <button onClick={() => scrollToSection(person.id)}>
                      {person.name}
                    </button>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            <a className="btn btn-primary btn-sm flex justify-between items-center gap-2">
              Contacto
              <Mailbox size={15} />
            </a>
          </li>
        </ul>
      </div>

      {/* Desktop menu */}
      <div className="hidden sm:flex items-center gap-2">
        {navLinks.map((link, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(link.target)}
            className="btn btn-ghost btn-sm flex items-center gap-1"
          >
            {link.icon}
            {link.label}
          </button>
        ))}

        <div className="dropdown dropdown-end">
          <button
            className="btn btn-ghost btn-sm flex items-center gap-1"
            tabIndex={0}
          >
            <UsersRound size={17} />
            Equipo
            <ChevronDown size={17} />
          </button>
          <ul className="dropdown-content menu z-[1] bg-base-200 p-4 rounded-box shadow w-56 gap-2 mt-3">
            {teamLinks.map((person) => (
              <li key={person.id}>
                <button onClick={() => scrollToSection(person.id)}>
                  {person.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <a className="btn btn-primary btn-sm flex items-center gap-1">
          <SendHorizonal size={17} />
          Contacto
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
