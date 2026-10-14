import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  FaBook, FaFire, FaTrophy, FaCertificate, FaCrown,
  FaSearch, FaBell, FaBars, FaTimes, FaCog, FaComments,
  FaRocket, FaChartLine, FaLaptopCode, FaGraduationCap,
  FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import Button from '../components/ui/Button';
import logo from '../assets/logo.png';

const DashboardLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userName, setUserName] = useState('Jane Doe');

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const user = localStorage.getItem('codelearn_user') || localStorage.getItem('user');
    if (user) {
      try {
        const parsed = JSON.parse(user);
        if (parsed?.name) setUserName(parsed.name);
      } catch {
        setUserName('Jane Doe');
      }
    }
  }, []);

  const navItems = [
    { id: 'overview', label: 'Overview', path: '/dashboard', icon: FaChartLine },
    { id: 'courses', label: 'My Courses', path: '/my-courses', icon: FaBook, count: '4' },
    { id: 'projects', label: 'My Projects & Tasks', path: '/my-projects-tasks', icon: FaLaptopCode, count: '3' },
    { id: 'certificates', label: 'My Certificates', path: '/my-certifications', icon: FaCertificate, count: '5' },
    { id: 'leaderboard', label: 'Leaderboard', path: '/leaderboard', icon: FaTrophy },
  ];

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-emerald-50/20 text-gray-800 font-sans">
      
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200/80 px-4 sm:px-8 py-2.5 flex items-center justify-between shadow-xs shrink-0">
        <div className="flex items-center gap-3 sm:gap-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            {sidebarOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
          
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="CodeLearn Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          
          <span className="hidden sm:inline-block px-3 py-1 bg-emerald-100/80 text-emerald-800 font-semibold text-xs rounded-full border border-emerald-200">
            Student Portal
          </span>

          {/* Sidebar Collapse Toggle Button (Desktop) */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex items-center justify-center p-2 rounded-xl text-gray-500 hover:bg-emerald-50 hover:text-emerald-700 transition-colors cursor-pointer border border-gray-200/80"
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar to Icon View"}
          >
            {isCollapsed ? <FaChevronRight className="text-sm" /> : <FaChevronLeft className="text-sm" />}
          </button>
        </div>

        {/* Global Search Bar */}
        <div className="hidden lg:flex items-center relative w-96">
          <FaSearch className="absolute left-3.5 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search courses, lessons, assignments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100/80 focus:bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all placeholder-gray-400"
          />
        </div>

        {/* Right Action Icons & Profile */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden sm:flex items-center gap-2 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl shadow-2xs">
            <FaFire className="text-amber-500 text-base animate-bounce" />
            <span className="text-xs font-bold text-amber-800">14 Day Streak</span>
          </div>

          <Link to="/notifications">
            <button className="relative p-2.5 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-emerald-600 transition-colors cursor-pointer" title="Notifications">
              <FaBell className="text-lg" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>
          </Link>

          <div className="flex items-center gap-3 pl-3 sm:pl-5 border-l border-gray-200">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[2px] shadow-sm">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-black text-emerald-700 text-sm">
                  {userName.charAt(0).toUpperCase()}
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white"></span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-bold text-gray-900 leading-tight">{userName}</p>
              <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                <FaCrown className="text-amber-500 text-[10px]" /> Pro Student
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container with Sidebar + Outlet View */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Mobile Navigation Drawer Backdrop */}
        {sidebarOpen && (
          <div 
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-xs z-40 md:hidden"
          />
        )}

        {/* Left Sidebar Navigation Menu - Collapsible (Full vs Icon Only) */}
        <aside className={`
          fixed md:static top-0 bottom-0 left-0 z-50 bg-white border-r border-emerald-100/80 flex flex-col justify-between
          transform transition-all duration-300 ease-in-out shadow-2xl md:shadow-none shrink-0 h-full
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          ${isCollapsed ? 'md:w-20 p-3' : 'md:w-64 p-5'}
        `}>
          <div className="space-y-6">
            <div>
              {!isCollapsed && (
                <p className="px-3 text-[11px] font-extrabold uppercase tracking-wider text-emerald-800/70 mb-3">Main Menu</p>
              )}
              <nav className="space-y-1.5">
                {navItems.map(item => {
                  const Icon = item.icon;
                  const active = location.pathname === item.path || 
                                 (item.path === '/my-projects-tasks' && location.pathname.includes('/myproject-task')) ||
                                 (item.path === '/my-certifications' && location.pathname.includes('/certification'));

                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      title={isCollapsed ? item.label : undefined}
                      onClick={() => setSidebarOpen(false)}
                      className={`w-full flex items-center ${isCollapsed ? 'justify-center p-3' : 'justify-between px-3.5 py-3'} rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 group cursor-pointer ${
                        active
                          ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-lg shadow-emerald-600/25'
                          : 'text-gray-700 hover:bg-emerald-50/80 hover:text-emerald-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`text-base transition-colors ${active ? 'text-white' : 'text-emerald-600/70 group-hover:text-emerald-700'}`} />
                        {!isCollapsed && (
                          <span className={active ? 'text-white font-extrabold' : 'text-gray-700 font-bold'}>
                            {item.label}
                          </span>
                        )}
                      </div>

                      {!isCollapsed && item.count && (
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-extrabold ${
                          active ? 'bg-white/20 text-white' : 'bg-emerald-100/80 text-emerald-800'
                        }`}>
                          {item.count}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div>
              {!isCollapsed && (
                <p className="px-3 text-[11px] font-extrabold uppercase tracking-wider text-emerald-800/70 mb-3">Settings & Support</p>
              )}
              <nav className="space-y-1.5">
                <Link 
                  to="/settings" 
                  title={isCollapsed ? "Account Settings" : undefined}
                  onClick={() => setSidebarOpen(false)}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center p-3' : 'gap-3 px-3.5 py-3'} rounded-2xl text-xs sm:text-sm font-bold transition-colors group cursor-pointer ${
                    location.pathname === '/settings' ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md' : 'text-gray-700 hover:bg-emerald-50/80 hover:text-emerald-800'
                  }`}
                >
                  <FaCog className={location.pathname === '/settings' ? 'text-white' : 'text-emerald-600/70 group-hover:text-emerald-700'} />
                  {!isCollapsed && (
                    <span className={location.pathname === '/settings' ? 'text-white font-extrabold' : 'text-gray-700 font-bold'}>
                      Account Settings
                    </span>
                  )}
                </Link>
                <Link 
                  to="/community" 
                  title={isCollapsed ? "Help & Community" : undefined}
                  onClick={() => setSidebarOpen(false)}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center p-3' : 'gap-3 px-3.5 py-3'} rounded-2xl text-xs sm:text-sm font-bold transition-colors group cursor-pointer ${
                    location.pathname === '/community' ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md' : 'text-gray-700 hover:bg-emerald-50/80 hover:text-emerald-800'
                  }`}
                >
                  <FaComments className={location.pathname === '/community' ? 'text-white' : 'text-emerald-600/70 group-hover:text-emerald-700'} />
                  {!isCollapsed && (
                    <span className={location.pathname === '/community' ? 'text-white font-extrabold' : 'text-gray-700 font-bold'}>
                      Help & Community
                    </span>
                  )}
                </Link>
              </nav>
            </div>
          </div>

          {/* Upgrade Banner in Sidebar */}
          <div className="mt-8 pt-5 border-t border-emerald-100/80">
            {!isCollapsed ? (
              <div className="bg-gradient-to-br from-emerald-950 via-teal-950 to-emerald-900 p-4.5 rounded-2xl text-white shadow-xl relative overflow-hidden border border-emerald-500/30">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl pointer-events-none"></div>
                <div className="flex items-center gap-2 mb-2">
                  <FaRocket className="text-amber-400 text-base" />
                  <span className="font-extrabold text-sm tracking-wide text-white">CodeLearn Pro</span>
                </div>
                <p className="text-[11px] text-emerald-100/80 mb-4 leading-relaxed font-light">
                  Unlock 500+ premium courses & 1-on-1 code reviews.
                </p>
                <Link to="/courses">
                  <Button className="w-full py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-950 font-black text-xs rounded-xl shadow-md border-none cursor-pointer transition-transform hover:scale-105">
                    Explore Premium
                  </Button>
                </Link>
              </div>
            ) : (
              <Link to="/courses" title="Upgrade to CodeLearn Pro">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-950 to-teal-900 text-amber-400 flex items-center justify-center text-xl mx-auto shadow-md hover:scale-110 transition-transform cursor-pointer border border-emerald-500/30">
                  <FaRocket />
                </div>
              </Link>
            )}
          </div>
        </aside>

        {/* Dynamic Outlet View Container */}
        <main className="flex-1 overflow-y-auto h-full w-full">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;
