import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-6 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-fakhwang font-bold text-white mb-4">GlobeSprints</h2>
          <p className="text-sm leading-relaxed font-poppins">
            We are a travel agency dedicated to providing the best tour packages at affordable prices. Explore the world with us and create unforgettable memories.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300">
              <FaFacebookF className="text-white text-sm" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300">
              <FaTwitter className="text-white text-sm" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300">
              <FaInstagram className="text-white text-sm" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300">
              <FaYoutube className="text-white text-sm" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm font-poppins">
            <li><a href="#hero" className="hover:text-orange-500 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
            <li><a href="#packages" className="hover:text-orange-500 transition-colors">Packages</a></li>
            <li><a href="#features" className="hover:text-orange-500 transition-colors">Features</a></li>
          </ul>
        </div>

        {/* Popular Tours */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Popular Tours</h3>
          <ul className="space-y-3 text-sm font-poppins">
            <li><a href="#" className="hover:text-orange-500 transition-colors">Thailand Temples & Beach</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Swiss Alps Journey</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">New York City Escape</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Iceland Northern Lights</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Egypt Pyramids & Nile</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm font-poppins">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <span>123 Travel Street, Adventure City, CA 90210</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-orange-500" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              <span>info@globesprints.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-6 text-center text-sm font-poppins">
        <p>&copy; 2026 GlobeSprints. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer