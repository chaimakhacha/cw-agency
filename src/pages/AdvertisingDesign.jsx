import React from "react";
import {
  Globe,
  Check,
  Calendar,
  Layers,
  Code,
  Zap,
  Megaphone,
  Users,
  Award,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";

const offers = [
  { title: "Creative Campaigns" },
  { title: "Digital Advertising" },
  { title: "Print Advertisements" },
  { title: "Social Media Ads" },
  { title: "Brand Positioning" },
  { title: "Performance Analytics" },
];

const processSteps = [
  { title: "Strategy", desc: "Campaign strategy and target audience analysis", icon: Globe },
  { title: "Creative", desc: "Concept development and creative execution", icon: Palette },
  { title: "Production", desc: "Asset creation and campaign production", icon: Layers },
  { title: "Launch", desc: "Campaign launch and initial optimization", icon: Megaphone },
  { title: "Optimization", desc: "Performance monitoring and optimization", icon: Zap },
  { title: "Reporting", desc: "Data insights and performance reporting", icon: Award },
];

export default function AdvertisingDesign() {
  return (
    <div className="relative min-h-screen bg-white text-gray-800 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* HEADER */}
        <motion.header
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full inline-flex border border-red-300">
              <Megaphone size={36} className="text-red-500" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-red-600 tracking-tight">
            Advertising Design
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Compelling advertising materials that drive engagement and deliver measurable results
            across digital and traditional media.
          </p>
        </motion.header>

        {/* WHAT WE OFFER */}
        <section className="mb-24">
          <motion.h2
            className="text-3xl font-semibold text-center text-red-600 mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            What We Offer
          </motion.h2>
          <p className="text-center text-gray-600 mb-10">
            Comprehensive advertising design solutions tailored to your unique goals.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {offers.map((o, i) => (
              <motion.article
                key={i}
                className="relative bg-white border border-red-100 rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-[1.02] transition-transform"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center border border-red-300 bg-red-50">
                    <Check size={18} className="text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-red-600 text-[20px] font-semibold">{o.title}</h3>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* OUR CREATIVE PROCESS */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-center text-red-600 mb-6">
            Our Creative Process
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Our proven methodology ensures outstanding results for every campaign.
          </p>

          <div className="relative">
            {/* central vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-6 bottom-6 w-[2px] bg-gradient-to-b from-red-400 to-transparent" />

            <div className="space-y-12">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                const isLeft = idx % 2 === 0;

                return (
                  <motion.div
                    key={idx}
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: idx * 0.15 }}
                  >
                    {/* central circle */}
                    <div
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block"
                      aria-hidden
                    >
                      <div className="w-5 h-5 rounded-full bg-red-600 border-4 border-red-200 shadow-sm" />
                    </div>

                    <div
                      className={`flex flex-col md:flex-row items-center ${
                        isLeft ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      {/* LEFT side */}
                      <div className={`w-full md:w-1/2 ${isLeft ? "md:mr-16" : "md:ml-16"}`}>
                        {isLeft && (
                          <div className="bg-white rounded-xl p-6 shadow-md border border-red-100">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-red-50 border border-red-200">
                                <Icon size={18} className="text-red-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-red-600">{step.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* RIGHT side */}
                      <div className={`w-full md:w-1/2 ${isLeft ? "md:pl-16" : "md:pr-16"}`}>
                        {!isLeft && (
                          <div className="bg-white rounded-xl p-6 shadow-md border border-red-100">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-red-50 border border-red-200">
                                <Icon size={18} className="text-red-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-red-600">{step.title}</h4>
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
