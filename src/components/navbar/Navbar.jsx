import { Link, useLocation } from 'react-router-dom';
import {
  FaHome, FaBook, FaProjectDiagram, FaCode,
  FaInfoCircle, FaUser, FaClock, FaSignOutAlt,
  FaBookOpen, FaBars, FaTimes, FaGraduationCap, FaChevronDown,
  FaLaptopCode, FaAward, FaComments
} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [sessionTime, setSessionTime] = useState(51);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userName, setUserName] = useState('Prithuapp');

  // Nav links
  const navLinks = [
    { name: 'Home', path: '/', icon: FaHome, color: 'text-emerald-500' },
    { name: 'Tutorials', path: '/tutorials', icon: FaBookOpen, color: 'text-teal-500' },
    { name: 'Courses', path: '/courses', icon: FaBook, color: 'text-blue-500' },
    { name: 'Projects', path: '/projects', icon: FaProjectDiagram, color: 'text-purple-500' },
    { name: 'Certifications', path: '/certification', icon: FaAward, color: 'text-amber-500' },
  ];

  // Resources dropdown list with descriptions
  const resourceSubItems = [
    { name: 'Coding Practice Arena', desc: 'Solve live algorithm challenges', path: '/practice', icon: FaCode, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { name: 'Live Online Playground', desc: 'Write & test code in browser', path: '/playground', icon: FaLaptopCode, color: 'text-rose-500', bg: 'bg-rose-500/10' },
    { name: 'Certificates Verification', desc: 'Verify proctored diplomas', path: '/certification', icon: FaAward, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { name: 'Developer Help Community', desc: 'Join coding discussions & Q&A', path: '/community', icon: FaComments, color: 'text-emerald-500', bg: 'bg-emerald-500/10' }
  ];

  // Sync auth & profile
  const syncAuth = () => {
    const user = localStorage.getItem('codelearn_user') || localStorage.getItem('user');
    const logged = localStorage.getItem('isLoggedIn');
    if (user) {
      setIsLoggedIn(true);
      try {
        const parsed = JSON.parse(user);
        if (parsed?.name) setUserName(parsed.name);
      } catch {
        setUserName('Prithuapp');
      }
    } else if (logged === 'true') {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    syncAuth();
    window.addEventListener('storage', syncAuth);
    return () => window.removeEventListener('storage', syncAuth);
  }, [location.pathname]);

  // Session timer
  useEffect(() => {
    let interval;
    if (isLoggedIn) {
      interval = setInterval(() => {
        setSessionTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isLoggedIn]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('codelearn_user');
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setShowUserMenu(false);
    window.location.href = '/';
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-gray-200/80 px-4 sm:px-6 lg:px-8 py-3 shadow-xs transition-all w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <img
            src={logo}
            alt="CodeLearn Logo"
            className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 bg-gray-100/60 p-1.5 rounded-2xl border border-gray-200/60 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-emerald-800 font-extrabold shadow-sm border border-gray-200/80'
                    : 'text-gray-600 hover:text-gray-950 hover:bg-white/50'
                }`}
              >
                <Icon className={`text-sm ${link.color}`} />
                <span>{link.name}</span>
              </Link>
            );
          })}

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all cursor-pointer ${
                isResourcesOpen ? 'bg-white text-emerald-800 shadow-sm border border-gray-200/80' : 'text-gray-600 hover:bg-white/50'
              }`}
            >
              <FaLaptopCode className="text-amber-500 text-sm" />
              <span>Resources</span>
              <FaChevronDown className={`text-[10px] transition-transform duration-200 ${isResourcesOpen ? 'rotate-180 text-emerald-600' : 'text-gray-400'}`} />
            </button>

            {/* Resources Icon Dropdown List */}
            {isResourcesOpen && (
              <div className="absolute top-full right-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/80 p-3 z-50 animate-fadeIn space-y-1.5">
                <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-gray-400">
                  Developer Resources
                </div>

                {resourceSubItems.map((sub, sIdx) => {
                  const SubIcon = sub.icon;

                  return (
                    <Link
                      key={sIdx}
                      to={sub.path}
                      target={sub.path === '/playground' ? '_blank' : undefined}
                      rel={sub.path === '/playground' ? 'noopener noreferrer' : undefined}
                      onClick={() => setIsResourcesOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-2xl hover:bg-emerald-50/80 transition-all duration-200 group cursor-pointer border border-transparent hover:border-emerald-200/60"
                    >
                      <div className={`w-9 h-9 rounded-xl ${sub.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <SubIcon className={`text-base ${sub.color}`} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                          {sub.name}
                        </p>
                        <p className="text-[10px] text-gray-400 font-medium">
                          {sub.desc}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right CTA / Session Timer / Profile */}
        <div className="flex items-center gap-2.5 sm:gap-3">

          {/* Active Session Timer */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50/80 border border-emerald-200/80 rounded-xl text-xs font-mono font-bold text-emerald-800 shadow-2xs">
            <FaClock className="text-emerald-500 text-xs animate-pulse" />
            <span>{formatTime(sessionTime)}</span>
          </div>

          {/* Dashboard CTA Button */}
          <Link to="/dashboard" className="hidden sm:inline-block">
            <button className="px-4 py-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-600/20 transition-all duration-300 flex items-center gap-2 cursor-pointer transform hover:scale-105 active:scale-95 border-none">
              <FaUser className="text-sm text-amber-300" />
              <span>Dashboard</span>
            </button>
          </Link>

          {/* User Profile Badge & Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="p-1 rounded-xl border border-gray-200/80 bg-gray-50/80 hover:bg-gray-100 transition-all cursor-pointer shadow-2xs"
              title={userName}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 font-black flex items-center justify-center text-sm shadow-xs">
                <FaUser className="text-slate-900 text-xs" />
              </div>
            </button>

            {/* Profile Dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-60 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/80 p-2 z-50 text-xs font-semibold animate-fadeIn space-y-1">
                <div className="px-4 py-3 border-b border-gray-100 bg-emerald-50/50 rounded-2xl mb-1">
                  <p className="font-extrabold text-gray-900 text-sm">{userName}</p>
                  <p className="text-[10px] text-emerald-700 font-bold flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" /> Active Student Account
                  </p>
                </div>

                <div className="py-1 space-y-0.5">
                  <Link
                    to="/dashboard"
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-emerald-50 text-gray-800 hover:text-emerald-700 font-bold transition-colors"
                  >
                    <FaUser className="text-emerald-500" /> Student Dashboard
                  </Link>
                  <Link
                    to="/my-courses"
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-emerald-50 text-gray-800 hover:text-emerald-700 font-bold transition-colors"
                  >
                    <FaGraduationCap className="text-emerald-500" /> My Enrolled Courses
                  </Link>
                  <Link
                    to="/my-projects-tasks"
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-emerald-50 text-gray-800 hover:text-emerald-700 font-bold transition-colors"
                  >
                    <FaProjectDiagram className="text-purple-500" /> My Projects & Tasks
                  </Link>
                  <Link
                    to="/my-certifications"
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-emerald-50 text-gray-800 hover:text-emerald-700 font-bold transition-colors"
                  >
                    <FaAward className="text-amber-500" /> My Verified Certificates
                  </Link>
                </div>

                <div className="border-t border-gray-100 pt-1">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-red-600 hover:bg-red-50 font-bold cursor-pointer transition-colors"
                  >
                    <FaSignOutAlt /> Log Out
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            {isMobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-gray-100 space-y-1.5 pb-2 animate-fadeIn">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-xs font-bold text-gray-800 hover:bg-gray-100"
              >
                <Icon className={`text-base ${link.color}`} />
                <span>{link.name}</span>
              </Link>
            );
          })}

          <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200">
              <FaUser className="text-base text-emerald-600" />
              <span>Dashboard</span>
            </div>
          </Link>
        </div>
      )}

    </nav>
  );
};

export default Navbar;