import React from "react";
import {
  Check,
  Search,
  Lightbulb,
  Palette,
  RefreshCw,
  Package,
} from "lucide-react";

const offers = [
  { title: "Brand Identity Design" },
  { title: "Logo Creation" },
  { title: "Marketing Materials" },
  { title: "UI/UX Design" },
  { title: "Print Design" },
  { title: "Digital Graphics" },
];

const processSteps = [
  { title: "Research", desc: "Market analysis and competitor research", icon: Search },
  { title: "Concept", desc: "Initial concepts and mood boards.", icon: Lightbulb },
  { title: "Design", desc: "Creating visual designs and iterations", icon: Palette },
  { title: "Refinement", desc: "Client feedback and design optimization", icon: RefreshCw },
  { title: "Delivery", desc: "Final assets and brand guidelines", icon: Package },
];

export default function DesignServices() {
  return (
    <div className="relative min-h-screen text-gray-900 bg-white transition-colors duration-300">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* HEADER */}
        <header className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full inline-flex">
              <Palette size={36} className="text-green-700" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-green-700 tracking-tight">
            Design Services
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Creative visual solutions that communicate your brand’s essence
            through innovative design thinking and user experience optimization.
          </p>
        </header>

        {/* WHAT WE OFFER */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
            What We Offer
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Comprehensive design solutions tailored to your unique needs and vision.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((o, i) => (
              <article
                key={i}
                className="relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* Decorative top accent */}
                <div className="absolute -top-3 right-6 w-20 h-2 bg-green-500 rounded-md shadow-sm" />

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center border border-green-100 bg-green-50">
                    <Check size={18} className="text-green-600" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-green-600 text-xl font-semibold">
                      {o.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* OUR CREATIVE PROCESS */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
            Our Creative Process
          </h2>
          <p className="text-center text-gray-700 mb-10">
            Our proven artistic methodology ensures exceptional results for every project.
          </p>

          <div className="relative">
            {/* vertical rod (hidden on mobile) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-6 bottom-6 w-[2px] bg-gradient-to-b from-green-400 to-green-500 hidden md:block" />

            <div className="space-y-12">
              {processSteps.map((step, idx) => {
                const isLeft = idx % 2 === 0;
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative">
                    {/* circle in center line */}
                    <div
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block"
                      aria-hidden
                    >
                      <div className="w-5 h-5 rounded-full bg-white border-4 border-green-400 shadow-sm" />
                    </div>

                    <div
                      className={`flex flex-col md:flex-row items-center ${
                        isLeft ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      {/* LEFT SIDE */}
                      <div
                        className={`w-full md:w-1/2 ${
                          isLeft ? "md:mr-16" : "md:ml-16"
                        }`}
                      >
                        {isLeft && (
                          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-green-50 border border-green-200">
                                <Icon size={18} className="text-green-700" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-green-700">
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

                      {/* RIGHT SIDE */}
                      <div
                        className={`w-full md:w-1/2 ${
                          isLeft ? "md:pl-16" : "md:pr-16"
                        }`}
                      >
                        {!isLeft && (
                          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-green-50 border border-green-200">
                                <Icon size={18} className="text-green-700" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-green-700">
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
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
