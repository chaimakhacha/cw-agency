import React from 'react';
import { Link } from "react-router-dom";

import WebDevelopment from '../pages/WebDevelopment';
import { Code, Palette, Camera, Video, Building2, Megaphone,MessageSquare, Paintbrush, Mic, Globe, Lightbulb, ArrowRight, HeadphoneOff, Headphones } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Create stunning and functional websites tailored to your business needs with cutting-edge technology.",
      color: "bg-blue-400",
      path: "/WebDevelopment"

    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design services",
      description: "Design beautiful and intuitive user experiences that engage and delight your audience.",
      color: "bg-green-400",
      path: "/DesignServices"
    },
     {
      icon: <Camera className="w-8 h-8" />,
      title: "photography",
      description: "Professional photography capturing moments and products with artistic vision and technical excellence using industry-standard equipment.",
      color: "bg-rose-400",
      path: "/Photography"
    },
    {
      
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Communication",
      description: "Strategic communication campaigns that connect brands with their audiences effectively through multi-channel approaches.",
      color: "bg-teal-400",
      path: "/Communication"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Interior design & Architecture",
      description: "Complete design solutions combining interior design expertise with innovative architectural excellence and 3D visualization.",

      color: "bg-amber-400",
      path: "/InteriorArchi"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Advertising Design",
      description: "Compelling advertising materials that drive engagement and deliver measurable results across digital and traditional media.",
      color: "bg-red-400",
      path: "/AdvertisingDesign"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Recording Services",
      description: "Professional audio recording services for music, podcasts, voiceovers, and multimedia projects using state-of-the-art equipment.",
      color: "bg-violet-400",
      path: "/RecordingServices"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Voice Services",
      description: "Expert voice-over services for commercials, audiobooks, e-learning, and multimedia content with native and international talent.",
      color: "bg-orange-400",
      path: "/VoiceServices"
    }
  ];

  return (
    <section id='services' className="py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Comprehensive creative solutions to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-full">
          {services.map((service, index) => (
            <div key={index} className="bg-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className={`${service.color} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
               <Link
                to={service.path}
                className="text-blue-500 flex items-center gap-2 hover:gap-4 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}