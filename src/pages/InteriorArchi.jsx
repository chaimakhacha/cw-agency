import React from "react";
import {
  Home,
  Building2,
  Check,
  Eye,
  FileText,
  Hammer,
  Handshake,
  PencilRuler,
  Wrench,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";

export default function InteriorArchi() {
  const interiorServices = [
    "Residential Design",
    "Space Planning",
    "Project Management",
    "Lighting Design",
    "Custom Furniture & Functional Development",
    "Commercial Spaces",
    "3D Visualization",
    "Material Selection",
    "Color Consultation",
  ];

  const architectureServices = [
    "Residential Architecture",
    "Sustainable Design",
    "Project Planning",
    "Building Permits",
    "Innovative Architectural Solutions for Modern Living",
    "Commercial Buildings",
    "3D Modeling & Visualization",
    "Construction Documentation",
    "Site Analysis",
  ];

  const processSteps = [
    {
      title: "Consultation",
      desc: "Understanding your vision, needs, and lifestyle requirements",
      icon: Handshake,
    },
    {
      title: "Concept Design",
      desc: "Initial architectural concepts and interior mood boards",
      icon: PencilRuler,
    },
    {
      title: "Development",
      desc: "Detailed design development and space planning",
      icon: Wrench,
    },
    {
      title: "Visualization",
      desc: "3D modeling and realistic renderings of the design",
      icon: Eye,
    },
    {
      title: "Documentation",
      desc: "Technical drawings and construction specifications",
      icon: FileText,
    },
    {
      title: "Implementation",
      desc: "Project management and construction oversight",
      icon: Hammer,
    },
    {
      title: "Finishing",
      desc: "Interior styling and final touches",
      icon: Palette,
    },
  ];

  return (
    <div className="min-h-screen text-black bg-white overflow-hidden py-20">
      {/* ICONS HEADER */}
      <div className="flex items-center justify-center gap-4 pt-8 pb-4">
        <button className="w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-500 flex items-center justify-center hover:bg-amber-200 transition">
          <Home className="w-6 h-6 text-amber-600" />
        </button>
        <button className="w-12 h-12 rounded-full bg-transparent border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
          <span className="text-gray-500 text-2xl">+</span>
        </button>
        <button className="w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-500 flex items-center justify-center hover:bg-amber-200 transition">
          <Building2 className="w-6 h-6 text-amber-600" />
        </button>
      </div>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
          Interior Design <span className="text-amber-500">&</span> Architecture
        </h1>
        <p className="text-gray-600 text-lg mb-4 max-w-3xl mx-auto">
          Complete design solutions blending architectural innovation with interior design mastery.
        </p>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          From conceptual design to final implementation, we deliver integrated spaces that inspire.
        </p>
      </motion.section>

      {/* INTEGRATED DESIGN SERVICES */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-amber-500">Integrated</span> Design Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our approach combines architectural expertise with design finesse for cohesive results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* INTERIOR DESIGN CARD */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-amber-700">Interior Design</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Transforming spaces into timeless, functional environments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {interiorServices.map((name, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ARCHITECTURE CARD */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-amber-700">Architecture</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Innovative architectural solutions for modern living.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {architectureServices.map((name, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold text-center text-amber-500 mb-6">
          Our Design Process
        </h2>
        <p className="text-center text-gray-600 mb-10">
          A seamless journey from concept to completion.
        </p>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-6 bottom-6 w-[2px] bg-amber-300" />

          <div className="space-y-12">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Center circle */}
                  <div
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block"
                    aria-hidden
                  >
                    <div className="w-5 h-5 rounded-full bg-amber-400 border-4 border-amber-200 shadow-sm" />
                  </div>

                  <div
                    className={`flex flex-col md:flex-row items-center ${
                      isLeft ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Left Side */}
                    <div
                      className={`w-full md:w-1/2 ${
                        isLeft ? "md:mr-16" : "md:ml-16"
                      }`}
                    >
                      {isLeft && (
                        <div className="bg-white rounded-xl p-6 shadow-md">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-md flex items-center justify-center bg-amber-50 border">
                              <Icon size={18} className="text-amber-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-amber-700">
                                {step.title}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Side */}
                    <div
                      className={`w-full md:w-1/2 ${
                        isLeft ? "md:pl-16" : "md:pr-16"
                      }`}
                    >
                      {!isLeft && (
                        <div className="bg-white rounded-xl p-6 shadow-md">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-md flex items-center justify-center bg-amber-50 border">
                              <Icon size={18} className="text-amber-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-amber-700">
                                {step.title}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
