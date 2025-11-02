import React from "react";
import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">CW Creative World</h3>
            <p className="text-gray-400 mb-4">
              Creating innovative digital experiences that inspire and engage.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/WebDevelopment" className="hover:text-white transition">Web Development</Link></li>
              <li><Link to="/DesignServices" className="hover:text-white transition">Design Services</Link></li>
              <li><Link to="/Photography" className="hover:text-white transition">Photography</Link></li>
              <li><Link to="/Communication" className="hover:text-white transition">Communication</Link></li>
              <li><Link to="/InteriorArchi" className="hover:text-white transition">Interior Design & Architecture</Link></li>
              <li><Link to="/AdvertisingDesign" className="hover:text-white transition">Advertising Design</Link></li>
              <li><Link to="/RecordingServices" className="hover:text-white transition">Recording Services</Link></li>
              <li><Link to="/VoiceServices" className="hover:text-white transition">Voice Services</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-white transition">Portfolio</Link></li>
              <li><Link to="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CW Creative World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
