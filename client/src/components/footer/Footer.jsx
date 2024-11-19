import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cyan-400 text-white py-6 px-4 lg:px-8 xl:px-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Branding */}
        <div className="text-xl lg:text-2xl font-bold mb-4 md:mb-0">
          <a href="/">FlickNest</a>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6 text-sm lg:text-base mb-4 md:mb-0">
          <a href="/about" className="hover:text-cyan-200 transition">
            About
          </a>
          <a href="/contact" className="hover:text-cyan-200 transition">
            Contact
          </a>
          <a href="/privacy" className="hover:text-cyan-200 transition">
            Privacy Policy
          </a>
          <a href="/privacy" className="hover:text-cyan-200 transition">
            Privacy Policy
          </a>
          <a href="/privacy" className="hover:text-cyan-200 transition">
            Privacy Policy
          </a>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/prince.yamaan.3?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-200 transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://github.com/meharyamaan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-200 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/usama.yamaan/profilecard/?igsh=MTVpeW5xb2R4ajg1cw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-200 transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/usama-yamaan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-200 transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-4 lg:mt-6 lg:text-base">
        © {new Date().getFullYear()} FlickNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
