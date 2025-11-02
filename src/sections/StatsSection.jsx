import { Building2, Globe, TrendingUp, Award, Star } from "lucide-react";
import { motion } from "framer-motion";


function StatsSection() {
  const stats = [
    {
      icon: Building2,
      number: "+400",
      label: "Satisfied Clients"
    },
    {
      icon: Globe,
      number: "5",
      label: "Countries Served"
    },
    {
      icon: TrendingUp,
      number: "340%",
      label: "Average ROI Increase"
    },
  ];

  return (
    
    <section className="relative z-10 bg-white  py-16 px-6 md:px-12 lg:px-20">
      {/* Top Icon */}
      <motion.div 
        className="flex justify-center mb-6"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <motion.div 
          className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg relative"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Star className="w-8 h-8 text-black" />
          <div className="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-30 animate-pulse"></div>
        </motion.div>
      </motion.div>

      {/* Heading */}
      <motion.h2 
        className="text-4xl md:text-4xl font-semibold text-center mb-4 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Trusted by Industry Leaders
      </motion.h2>
      <motion.p 
        className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        We've had the privilege of partnering with some of the world's most
        innovative companies, delivering transformative solutions that drive
        real business impact.
      </motion.p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-8 h-8 mx-auto mb-4 text-black" />
              </motion.div>
              <motion.h3 
                className="text-2xl text-black font-bold"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-500">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default StatsSection;