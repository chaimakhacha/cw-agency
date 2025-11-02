import React, { useState } from "react";
import { Sun, Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; 
import DarkModeToggle from "./DarkmodeToggle";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center mb-6 justify-between px-8 py-4 z-50 bg-white shadow-md">
      {/* Logo + Title */}
      <div className="flex items-center space-x-3">
  <a href="/" className="flex items-center space-x-3">
    <img src={logo} alt="CW Logo" className="h-12 w-auto rounded-full" />
    <span className="text-xl font-bold text-black">Creative World</span>
  </a>
</div>


      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-8 ml-16">
        <a href="#services" className="text-gray-500 hover:text-black transition">Services</a>
        <a href="#portfolio" className="text-gray-500 hover:text-black transition">Projects</a>
        <a href="https://cwalgerie.com/?fbclid=PAZXh0bgNhZW0CMTEAAacrw_UcbHmHpZOyoUUjQwRqWJIig77Afb029gIkUQc43-l_hsHl0nzmqxtN0g_aem_ArXM4UyEmM6x39PK3WjUzw" className="text-gray-500 hover:text-black transition">Photo Booking</a>
        <a href="#contact" className="text-gray-500 hover:text-black transition">Contact</a>
        <Sun className="w-5 h-5 cursor-pointer text-orange-300 hover:text-black" />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full flex flex-col space-y-4 py-6 px-6 md:hidden bg-white">
          <a href="#services" className="text-gray-500 pl-4">Services</a>
          <a href="#portfolio" className="text-gray-500 pl-4">Projects</a>
          <a href="https://cwalgerie.com/?fbclid=PAZXh0bgNhZW0CMTEAAacrw_UcbHmHpZOyoUUjQwRqWJIig77Afb029gIkUQc43-l_hsHl0nzmqxtN0g_aem_ArXM4UyEmM6x39PK3WjUzw" 
                 className="text-gray-500 pl-4"  target="_blank"  rel="noopener noreferrer">
                    Photo Booking</a>

          <a href="#contact" className="text-gray-500 pl-4">Contact</a>
          <Sun className="w-5 h-5 cursor-pointer text-gray-500 pl-4" />
            <div className="pl-4 pt-2">
            <Sun className="w-5 h-5 cursor-pointer text-orange-300 hover:text-black" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

