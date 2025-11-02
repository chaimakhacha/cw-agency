import React from "react";
import { useDarkMode } from "../context/DarkModeContext.jsx";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md transition hover:scale-105 focus:outline-none"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-gray-800" />
      )}
    </button>
  );
}
