import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

import { Send, Mail, User, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success / error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const currentTime = new Date().toLocaleString();

    emailjs
      .send(
        "service_l52et3o", // ✅ EmailJS service ID
        "template_fgotve7", // ✅ template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: currentTime,
        },
        "Ff5fIKcIFABfFuRHi" // ✅ public key
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
      })
      .finally(() => setLoading(false));
  };

  // Hide status after 5 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">Let's start creating something amazing together</p>
        </motion.div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <User className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full outline-none text-gray-700"
                  />
                </div>
              </div>

              <div className="w-full">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <Mail className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full outline-none text-gray-700"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                className="w-full border rounded-lg px-4 py-3 h-32 outline-none text-gray-700 resize-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-full hover:shadow-lg transition-all"
            >
              {loading ? "Sending..." : (<><Send className="w-5 h-5" />Send Message</>)}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

            {/* Location */}
            <div className="flex items-start gap-4 hover:translate-x-1 transition-transform">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Our Office</p>
                <a
                  href="https://maps.app.goo.gl/qdgcciHkPSBQrt4R6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Creative World, Sétif, Algeria
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 hover:translate-x-1 transition-transform">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Phone</p>
                <p className="text-gray-600">0770391126 / 0555548308</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 hover:translate-x-1 transition-transform">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Email</p>
                <a
                  href="mailto:creative.world.setif@gmail.com"
                  className="text-gray-600 hover:text-purple-600 transition"
                >
                  creative.world.setif@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6">
              <p className="font-semibold text-gray-800 mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/creative.world.setif" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition"><Facebook className="w-5 h-5" /></a>
                <a href="https://x.com/cw_setif" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition"><Twitter className="w-5 h-5" /></a>
                <a href="https://www.instagram.com/cw.creative.world/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition"><Instagram className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/company/creative-world-dz/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition"><Linkedin className="w-5 h-5" /></a>
                <a href="https://www.behance.net/creative-world" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition">
      <FontAwesomeIcon icon={faBehance} className="w-5 h-5" />
    </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Notification Popup */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-xl text-white font-medium ${
              status === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {status === "success"
              ? "Message sent successfully!"
              : "Failed to send message. Please try again."}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
