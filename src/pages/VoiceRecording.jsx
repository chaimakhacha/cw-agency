import React from "react";
import {
  Globe,
  Check,
  Calendar,
  Layers,
  Code,
  Zap,
  Megaphone,
  Headphones,
  Users,
  Book,
  Phone,
  Mic,
  FileAudio,
  Settings,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";

const offers = [
  { title: "Commercial Voice-overs", icon: Megaphone },
  { title: "Audiobook Narration", icon: Book },
  { title: "E-learning Content", icon: Layers },
  { title: "IVR & Phone Systems", icon: Phone },
  { title: "Character Voices", icon: Users },
  { title: "Multiple Language Options", icon: Globe },
];

const processSteps = [
  { title: "Script Review", desc: "Analyzing content and tone requirements", icon: FileAudio },
  { title: "Voice Matching", desc: "Selecting the perfect voice for your project", icon: Users },
  { title: "Recording", desc: "Professional studio recording", icon: Mic },
  { title: "Direction", desc: "Real-time feedback and adjustments", icon: Zap },
  { title: "Post-Production", desc: "Audio cleanup and enhancement", icon: Settings },
  { title: "Delivery", desc: "Final audio files in required formats", icon: Truck },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function VoiceRecording() {
  return (
    <div className="relative min-h-screen text-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-blue-500/10 p-4 rounded-full inline-flex"
            >
              <Headphones size={36} className="text-blue-300" />
            </motion.div>
          </div>
          <h1 className="text-5xl font-extrabold text-blue-300 tracking-tight">
            Voice Services
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Expert voice-over services for commercials, audiobooks, e-learning, and multimedia content.
          </p>
        </motion.header>

        {/* WHAT WE OFFER */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-center text-blue-300 mb-6">
            What We Offer
          </h2>
          <p className="text-center text-gray-700 mb-10">
            Comprehensive voice service solutions tailored to your unique needs and creative vision.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((o, i) => {
              const Icon = o.icon || Check;
              return (
                <motion.article
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={i}
                  className="relative"
                >
                  <div className="absolute -top-3 right-6 w-20 h-2 rounded-md shadow-sm bg-blue-500" />
                  <div className="bg-white/90 rounded-2xl shadow-lg p-6 min-h-[120px] relative overflow-hidden">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-lg flex items-center justify-center border border-blue-100 bg-blue-50">
                        <Icon size={20} className="text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-blue-700 text-[20px] font-semibold">
                          {o.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* OUR CREATIVE PROCESS */}
        <section>
          <h2 className="text-3xl font-semibold text-center text-blue-300 mb-6">
            Our Creative Process
          </h2>
          <p className="text-center text-gray-700 mb-10">
            Our proven creative workflow ensures professional quality and fast delivery.
          </p>

          <div className="relative">
            {/* Central timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-300/50 to-transparent" />

            <div className="space-y-12">
              {processSteps.map((step, idx) => {
                const isLeft = idx % 2 === 0;
                const Icon = step.icon;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative"
                  >
                    {/* Circle on center line */}
                    <div
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block"
                      aria-hidden
                    >
                      <div className="w-5 h-5 rounded-full bg-white border-4 border-blue-300 shadow-sm" />
                    </div>

                    <div
                      className={`flex flex-col md:flex-row items-center ${
                        isLeft ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      {/* Left side */}
                      <div
                        className={`w-full md:w-1/2 ${
                          isLeft ? "md:mr-16" : "md:ml-16"
                        }`}
                      >
                        {isLeft && (
                          <div className="bg-white rounded-xl p-6 shadow-md">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-blue-50 border border-blue-100">
                                <Icon size={18} className="text-blue-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-blue-700">
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

                      {/* Right side */}
                      <div
                        className={`w-full md:w-1/2 ${
                          isLeft ? "md:pl-16" : "md:pr-16"
                        }`}
                      >
                        {!isLeft && (
                          <div className="bg-white rounded-xl p-6 shadow-md">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-blue-50 border border-blue-100">
                                <Icon size={18} className="text-blue-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-blue-700">
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
    </div>
  );
}
