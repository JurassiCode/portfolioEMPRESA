import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content text-center text-sm py-6">
      Web hecha con <Heart size={15 } className="inline mx-1 text-error" /> por Nacho, Seba, Tomi y Joaco — &copy; JurassiCode 2025
    </footer>
  );
};

export default Footer;
