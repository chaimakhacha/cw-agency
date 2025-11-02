import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Events",
    "Product",
    "Commercial",
    "Advertisement",
  ];

  const projects = [
    // Events
    { id: 1, title: "HAG Event", category: "Events", video: "" },
    { id: 2, title: "INCG 10th Birthday", category: "Events", video: "" },
    { id: 3, title: "S.A.M.I", category: "Events", video: "" },
    { id: 4, title: "hidhab Pharma Expo J1", category: "Events", video: "" },
    { id: 5, title: "Hidhab Pharma Expo J2", category: "Events", video: "" },
    { id: 6, title: "Hidhab Pharma Expo J3", category: "Events", video: "" },
    { id: 7, title: "Le SACOT", category: "Events", video: "" },
    { id: 8, title: "Boehringer Veco Sante", category: "Events", video: "" },
    { id: 9, title: "BIOSET Opening", category: "Events", video: "" },
    { id: 10, title: "GEELY Setif", category: "Events", video: "" },
    { id: 11, title: "SADIAB", category: "Events", video: "" },
    { id: 12, title: "DENIZATI", category: "Events", video: "" },
    { id: 13, title: "Chefs Workshop INCG", category: "Events", video: "" },
    { id: 14, title: "Pain Pita", category: "Commercial", video: "https://www.youtube.com/shorts/1_Ga80ChYLk" },
    { id: 15, title: "Naturalia", category: "Commercial", video: "" },
    { id: 16, title: "Fashion show", category: "Advertisement", video: "" },
    { id: 17, title: "NBP Gym", category: "Advertisement", video: "" },
    { id: 18, title: "Naturalia CAF", category: "Advertisement", video: "" },
    { id: 19, title: "Maria Beauty Lab", category: "Advertisement", video: "" },
    { id: 20, title: "ML Beauty", category: "Advertisement", video: "" },
    { id: 21, title: "COTE Deco", category: "Advertisement", video: "" },
    { id: 22, title: "CASA Market", category: "Advertisement", video: "" },
    { id: 23, title: "BIOSET", category: "Advertisement", video: "" },
    { id: 24, title: "Allo mouton", category: "Advertisement", video: "" },
    { id: 25, title: "Maria Beauty NEON eyeshadaw", category: "Product", video: "" },
    { id: 26, title: "Maria Beauty Contour and Highlighter Stick", category: "Product", video: "" },
    { id: 27, title: "Maria Beauty Eyeliner", category: "Product", video: "" },
  

  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
  };

  return (
    <section className="py-20 px-4 bg-white min-h-screen relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Video Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing our best work and creative excellence
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-20">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleCategoryClick(cat);
              }}
              style={{
                pointerEvents: "auto",
                cursor: "pointer",
                position: "relative",
                zIndex: 100,
              }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-cyan-500 text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="text-center mb-8">
          <p className="text-gray-900 text-lg">
            Showing: <span className="text-cyan-500 font-bold">{activeCategory}</span>
            <span className="text-gray-600 ml-2">({filteredProjects.length} videos)</span>
          </p>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedVideo(project)}
              >
                {/* 🎥 Video Preview Thumbnail */}
                <video
                  src={project.video}
                  className="w-full h-64 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                  muted
                  preload="metadata"
                  playsInline
                  onLoadedMetadata={(e) => {
                    e.target.currentTime = 1; // show first second
                    e.target.pause();
                  }}
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 1;
                  }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-cyan-500 ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Title + Category */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-semibold text-cyan-400 mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No videos found in this category</p>
          </div>
        )}

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 mt-36"
              onClick={() => setSelectedVideo(null)}
              style={{ paddingTop: "80px" }} // 👈 small offset under navbar
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-0 right-0 text-white hover:text-cyan-400 transition-colors z-50"
                  style={{ pointerEvents: "auto" }}
                >
                  <X className="w-8 h-8" />
                </button>

                <video controls autoPlay className="w-full rounded-lg shadow-2xl">
                  <source src={selectedVideo.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="mt-4 text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
                  <p className="text-cyan-400">{selectedVideo.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
