import React from "react";
import {
  Mic,
  Music,
  Headphones,
  SlidersHorizontal,
  AudioWaveform,
  Check,
  Calendar,
  Wrench,
  Scissors,
  SlidersVertical,
  Disc,
} from "lucide-react";
import { motion } from "framer-motion";

const offers = [
  { title: "Music Recording & Production", icon: Music },
  { title: "Podcast Recording", icon: Mic },
  { title: "Voice-over Recording", icon: Headphones },
  { title: "Audio Mixing & Mastering", icon: SlidersHorizontal },
  { title: "Sound Design", icon: AudioWaveform },
  { title: "Multi-track Recording", icon: Check },
];

const processSteps = [
  { title: "Pre-Production", desc: "Planning and script review", icon: Calendar },
  { title: "Set Up", desc: "Studio preparation and equipment setup", icon: Wrench },
  { title: "Editing", desc: "Audio editing and cleanup", icon: Scissors },
  { title: "Mixing", desc: "Professional mixing and balancing", icon: SlidersVertical },
  { title: "Mastering", desc: "Final mastering and delivery", icon: Disc },
];

export default function RecordingServices() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* HEADER */}
        <motion.header
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 p-4 rounded-full inline-flex border border-purple-300">
              <Mic size={36} className="text-purple-600" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-purple-700 tracking-tight">
            Recording Services
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Professional audio recording services for music, podcasts, voiceovers, and multimedia projects using state-of-the-art equipment.
          </p>
        </motion.header>

        {/* WHAT WE OFFER */}
        <section className="mb-24">
          <motion.h2
            className="text-3xl font-semibold text-center text-purple-700 mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            What We Offer
          </motion.h2>
          <p className="text-center text-gray-600 mb-10">
            Comprehensive recording services tailored to your creative vision.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {offers.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.article
                  key={i}
                  className="relative bg-white border border-purple-100 rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-[1.02] transition-transform"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center border border-purple-200 bg-purple-50">
                      <Icon size={20} className="text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-purple-700 text-[20px] font-semibold">{o.title}</h3>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* OUR CREATIVE PROCESS */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-center text-purple-700 mb-6">
            Our Creative Process
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Our proven process ensures smooth production and professional-quality results.
          </p>

          <div className="relative">
            {/* central vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-6 bottom-6 w-[2px] bg-gradient-to-b from-purple-300 to-transparent" />

            <div className="space-y-12">
              {processSteps.map((step, idx) => {
                const isLeft = idx % 2 === 0;
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    className="relative"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15, duration: 0.7 }}
                  >
                    {/* center circle */}
                    <div
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block"
                      aria-hidden
                    >
                      <div className="w-5 h-5 rounded-full bg-purple-600 border-4 border-purple-200 shadow-sm" />
                    </div>

                    <div
                      className={`flex flex-col md:flex-row items-center ${
                        isLeft ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      {/* LEFT side */}
                      <div className={`w-full md:w-1/2 ${isLeft ? "md:mr-16" : "md:ml-16"}`}>
                        {isLeft && (
                          <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-purple-50 border border-purple-200">
                                <Icon size={18} className="text-purple-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-purple-700">{step.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* RIGHT side */}
                      <div className={`w-full md:w-1/2 ${isLeft ? "md:pl-16" : "md:pr-16"}`}>
                        {!isLeft && (
                          <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-purple-50 border border-purple-200">
                                <Icon size={18} className="text-purple-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-purple-700">{step.title}</h4>
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
