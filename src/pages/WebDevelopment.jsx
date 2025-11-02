import React, { useEffect } from "react";
import {
  Globe,
  Check,
  Code,
  Zap,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";

// What We Offer
const offers = [
  {
    title: "Responsive Web Design",
    desc: "Mobile-first interfaces with accessible UX and modern layouts.",
    tags: ["UI", "Accessibility"],
  },
  {
    title: "E-commerce Development",
    desc: "Secure checkout, product management, and payment integrations.",
    tags: ["Stripe", "Shopify", "WooCommerce"],
  },
  {
    title: "Custom Web Applications",
    desc: "Tailored apps for complex business workflows and automation.",
    tags: ["APIs", "Realtime"],
  },
  {
    title: "SEO Optimization",
    desc: "Technical SEO, structured data and performance optimizations.",
    tags: ["Core Web Vitals"],
  },
  {
    title: "Performance Optimization",
    desc: "Fast load times and optimized assets for happier users.",
    tags: ["Lighthouse"],
  },
  {
    title: "Cross-browser Compatibility",
    desc: "Polished experience across browsers and devices.",
    tags: ["Testing"],
  },
];

// Creative Process
const processSteps = [
  { title: "Discovery", desc: "Understanding your business goals and requirements.", icon: Globe },
  { title: "Design", desc: "Wireframes, visual systems and interaction design.", icon: Palette },
  { title: "Development", desc: "Building with modern technologies and clean code.", icon: Code },
  { title: "Testing", desc: "Comprehensive QA across devices and browsers.", icon: Check },
  { title: "Launch", desc: "Deployment, monitoring and performance tuning.", icon: Zap },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function WebDevelopment() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
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
              className="bg-blue-100 p-4 rounded-full inline-flex"
            >
              <Globe size={36} className="text-blue-800" />
            </motion.div>
          </div>
          <h1 className="text-5xl font-extrabold text-blue-900 tracking-tight">
            Web Development
          </h1>
          <p className="my-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Building Digital Experiences That Drive Results — modern, responsive websites
            and web applications built with cutting-edge technologies and industry best
            practices.
          </p>
        </motion.header>

        {/* WHAT WE OFFER */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-center text-blue-800 mb-6">
            What We Offer
          </h2>
          <p className="text-center text-gray-600 mb-18">
            Comprehensive web development solutions tailored to your unique needs and vision.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 lg:grid-cols-3 gap-8">
            {offers.map((o, i) => (
              <motion.article
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                className="relative"
              >
                {/* Accent bar */}
                <div className="absolute -top-3 right-6 w-20 h-2 rounded-md shadow-sm bg-blue-600/70" />
                <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 min-h-[120px] relative overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center border border-blue-200 bg-blue-50">
                      <Check size={20} className="text-blue-800" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-blue-900 text-[20px] font-semibold">{o.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{o.desc}</p>
                      <div className="mt-3 flex gap-2 flex-wrap">
                        {o.tags?.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-sm px-2 py-1 bg-blue-50 text-blue-800 rounded-full inline-block"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* OUR CREATIVE PROCESS */}
<section className="mb-24">
  <h2 className="text-3xl font-semibold text-center text-blue-800 mb-6">
    Our Creative Process
  </h2>
  <p className="text-center text-gray-600 mb-10">
    Our proven methodology ensures exceptional results for every project.
  </p>

  <div className="relative">
    {/* Center vertical rod for desktop */}
    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-200 to-transparent" />

    {/* Left vertical rod for mobile */}
    <div className="block md:hidden absolute left-4 top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-200 to-transparent" />

    <div className="space-y-12 relative">
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
            {/* timeline circle */}
            <div
              className="absolute z-20 top-6 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 left-[3px]"
              aria-hidden
            >
              <div className="w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
            </div>

            <div
              className={`flex flex-col md:flex-row items-center ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className={`w-full md:w-1/2 ${isLeft ? "md:mr-16" : "md:ml-16"}`}>
                {isLeft && (
                  <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-md ml-10 md:ml-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md flex items-center justify-center bg-blue-50 border">
                        <Icon size={18} className="text-blue-800" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900">{step.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="hidden md:block w-[2px]" />

              <div className={`w-full md:w-1/2 ${isLeft ? "md:pl-16" : "md:pr-16"}`}>
                {!isLeft && (
                  <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-md ml-10 md:ml-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md flex items-center justify-center bg-blue-50 border">
                        <Icon size={18} className="text-blue-800" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900">{step.title}</h4>
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
