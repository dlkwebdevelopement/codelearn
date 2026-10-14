import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-deep-green text-white pt-16 pb-8 border-t-4 border-emerald-green">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="CodeLearn Logo"
                className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className="text-white text-sm leading-relaxed mb-6">
              Empowering the next generation of software developers with interactive, hands-on learning.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/DlkTechnologies/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://www.youtube.com/@dlktechnology" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all duration-300">
                <FaYoutube className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/company/13330788/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Platform Column */}
          <div>
            <h3 className="font-semibold !text-white mb-6 text-lg">Platform</h3>
            <ul className="space-y-3 text-sm !text-white">
              <li><Link to="/courses" className="!text-white hover:!text-mint-green transition-colors">Pro Courses</Link></li>
              <li><Link to="/projects" className="!text-white hover:!text-mint-green transition-colors">Real-world Projects</Link></li>
              <li><Link to="/certification" className="!text-white hover:!text-mint-green transition-colors">Certification</Link></li>
              <li><Link to="/playground" className="!text-white hover:!text-mint-green transition-colors">Code Playground</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold !text-white mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-sm !text-white">
              <li><Link to="/about" className="!text-white hover:!text-mint-green transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="!text-white hover:!text-mint-green transition-colors flex items-center gap-2">Careers <span className="text-[10px] bg-emerald-green !text-white px-2 py-0.5 rounded-full font-bold">HIRING</span></Link></li>
              <li><Link to="/blog" className="!text-white hover:!text-mint-green transition-colors">Blog & News</Link></li>
              <li><Link to="/contact" className="!text-white hover:!text-mint-green transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact/Newsletter Column */}
          <div>
            <h3 className="font-semibold !text-white mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm !text-white mb-6">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-mint-green text-lg" />
                <span>support@codelearn.com</span>
              </li>
            </ul>
            <p className="!text-white text-sm mb-3">Subscribe to our newsletter</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="bg-forest-green border border-forest-green outline-none text-sm text-white px-4 py-2 w-full rounded-l-lg placeholder-emerald-100/50 focus:border-mint-green focus:ring-0"
              />
              <button className="bg-emerald-green hover:bg-mint-green text-white hover:text-deep-green px-4 py-2 rounded-r-lg transition-colors font-bold text-sm">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-forest-green flex flex-col md:flex-row justify-between items-center gap-4 text-sm !text-white">
          <p>&copy; {new Date().getFullYear()} CodeLearn Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="!text-white hover:!text-mint-green transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="!text-white hover:!text-mint-green transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;