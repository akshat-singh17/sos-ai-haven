
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                SOS AI
              </h3>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-md">
              Your trusted AI Companion, always here for you. Experience 24/7 support, safety, and easy connection with our advanced AI technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-slate-300">
                <span className="mr-3">📧</span>
                <span>hello@sosai.com</span>
              </div>
              <div className="flex items-center text-slate-300">
                <span className="mr-3">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-slate-300">
                <span className="mr-3">📍</span>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">Features</a></li>
              <li><a href="#pricing" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">Pricing</a></li>
              <li><a href="#reviews" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">Reviews</a></li>
              <li><a href="#api" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">API</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#careers" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">Careers</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">Contact</a></li>
              <li><a href="#blog" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">Blog</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#privacy" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#terms" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#cookies" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">Cookie Policy</a></li>
              <li><a href="#gdpr" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2024 SOS AI. All rights reserved. Built with ❤️ for your wellbeing.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
