import React from "react";
import {
  Globe,
  Check,
  Layers,
  Users,
  Star,
  Palette,
  Camera,
} from "lucide-react";
import { motion } from "framer-motion";

const offers = [
  { title: "Commercial Photography" },
  { title: "Product Photography" },
  { title: "Event Photography" },
  { title: "Portrait Photography" },
  { title: "Real Estate Photography" },
  { title: "Photo Editing & Retouching" },
];

const processSteps = [
  { title: "Consultation", desc: "Understanding your vision and requirements", icon: Users },
  { title: "Planning", desc: "Location scouting and shoot preparation", icon: Layers },
  { title: "Shooting", desc: "Professional photography session", icon: Camera },
  { title: "Selection", desc: "Curating the best shots", icon: Star },
  { title: "Editing", desc: "Professional retouching and enhancement", icon: Palette },
  { title: "Delivery", desc: "High-resolution final images", icon: Globe },
];

export default function Photography() {
  return (
    <div className="relative min-h-screen text-gray-900 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* HEADER */}
        <motion.header
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-6">
            <motion.div
              className="bg-rose-100 p-4 rounded-full inline-flex"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Camera size={36} className="text-rose-600" />
            </motion.div>
          </div>
          <h1 className="text-5xl font-extrabold text-rose-600 tracking-tight">
            Photography
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Capturing moments that tell your story.  
            Professional photography with artistic vision and technical excellence.
          </p>
        </motion.header>

        {/* WHAT WE OFFER */}
        <section className="mb-24">
          <motion.h2
            className="text-3xl font-semibold text-center text-rose-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>

          <motion.p
            className="text-center text-gray-600 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive photography solutions tailored to your creative goals.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((o, i) => (
              <motion.article
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-3 right-6 w-20 h-2 rounded-md shadow-sm bg-rose-400" />
                <div className="bg-white rounded-2xl shadow-lg p-6 min-h-[120px] relative overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center border border-rose-100 bg-rose-50">
                      <Check size={18} className="text-rose-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-rose-700 text-[22px] font-semibold">
                        {o.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* OUR CREATIVE PROCESS */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-center text-rose-600 mb-6">
            Our Creative Process
          </h2>
          <p className="text-center text-gray-700 mb-10">
            Our proven artistic methodology ensures exceptional results for every project.
          </p>

          <div className="relative">
            {/* central vertical rod */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-6 bottom-6 w-[2px] bg-gradient-to-b from-rose-400 to-transparent" />

            <div className="space-y-12">
              {processSteps.map((step, idx) => {
                const isLeft = idx % 2 === 0;
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    className="relative"
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Circle marker */}
                    <div
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block"
                      aria-hidden
                    >
                      <div className="w-5 h-5 rounded-full bg-white border-4 border-rose-400 shadow-sm" />
                    </div>

                    <div
                      className={`flex flex-col md:flex-row items-center ${
                        isLeft ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      {/* LEFT side */}
                      <div className={`w-full md:w-1/2 ${isLeft ? "md:mr-16" : "md:ml-16"}`}>
                        {isLeft && (
                          <div className="bg-white rounded-xl p-6 shadow-md transition-colors duration-300">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-rose-50 border border-rose-200">
                                <Icon size={18} className="text-rose-700" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-rose-700">{step.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Spacer (center line space) */}
                      <div className="hidden md:block w-[2px]" />

                      {/* RIGHT side */}
                      <div className={`w-full md:w-1/2 ${isLeft ? "md:pl-16" : "md:pr-16"}`}>
                        {!isLeft && (
                          <div className="bg-white rounded-xl p-6 shadow-md transition-colors duration-300">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-rose-50 border border-rose-200">
                                <Icon size={18} className="text-rose-700" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-rose-700">{step.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
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
    </div>
  );
}
