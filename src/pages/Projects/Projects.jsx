import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import {
  FaTasks, FaSearch, FaCode, FaRocket, FaClock,
  FaTimes, FaArrowRight, FaLaptopCode, FaReact,
  FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs,
  FaDocker, FaCheckCircle, FaUpload, FaLock,
  FaSignInAlt, FaUserCheck
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiExpress, SiTailwindcss
} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import Hero3DAnimation from '../../components/ui/Hero3DAnimation';

// High quality tech project card preview image URLs
const projectImagesMap = {
  1: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
  2: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80',
  3: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
  4: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  5: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
  6: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80'
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeTaskModal, setActiveTaskModal] = useState(null);
  const [submittedTaskIds, setSubmittedTaskIds] = useState(new Set([3]));
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  // Check user login state from localStorage
  const [isLoggedIn] = useState(() => {
    const user = localStorage.getItem('codelearn_user');
    const logged = localStorage.getItem('isLoggedIn');
    return Boolean(user || logged === 'true');
  });

  const categories = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Full Stack'];

  // Helper function to map tag names to actual program icons & colors
  const getTechIconsForTags = (tags = []) => {
    return tags.map(tag => {
      const t = tag.toLowerCase();
      if (t.includes('html')) return { name: 'HTML5', icon: FaHtml5, color: 'text-[#E34F26]', bg: 'bg-[#E34F26]/10' };
      if (t.includes('css') || t.includes('tailwind')) return { name: 'CSS3', icon: FaCss3Alt, color: 'text-[#1572B6]', bg: 'bg-[#1572B6]/10' };
      if (t.includes('javascript') || t.includes('js')) return { name: 'JavaScript', icon: FaJs, color: 'text-[#F7DF1E]', bg: 'bg-[#F7DF1E]/10' };
      if (t.includes('typescript') || t.includes('ts')) return { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]', bg: 'bg-[#3178C6]/10' };
      if (t.includes('react')) return { name: 'React', icon: FaReact, color: 'text-[#61DAFB]', bg: 'bg-[#61DAFB]/10' };
      if (t.includes('node')) return { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]', bg: 'bg-[#339933]/10' };
      if (t.includes('python')) return { name: 'Python', icon: FaPython, color: 'text-[#3776AB]', bg: 'bg-[#3776AB]/10' };
      if (t.includes('mongo')) return { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]', bg: 'bg-[#47A248]/10' };
      if (t.includes('docker')) return { name: 'Docker', icon: FaDocker, color: 'text-[#2496ED]', bg: 'bg-[#2496ED]/10' };
      return { name: tag, icon: FaCode, color: 'text-emerald-500', bg: 'bg-emerald-500/10' };
    });
  };

  // 3 Primary Student Tasks Data
  const studentTasks = [
    {
      id: 1,
      title: 'Personal Portfolio Website with HTML5 & CSS Grid',
      category: 'Frontend Web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      dueDate: 'July 25, 2026',
      progress: 75,
      status: 'In Progress',
      difficulty: 'Beginner',
      xp: 150,
      techStack: [
        { name: 'HTML5', icon: FaHtml5, color: 'text-[#E34F26]', bg: 'bg-[#E34F26]/10' },
        { name: 'CSS3', icon: FaCss3Alt, color: 'text-[#1572B6]', bg: 'bg-[#1572B6]/10' },
        { name: 'JavaScript', icon: FaJs, color: 'text-[#F7DF1E]', bg: 'bg-[#F7DF1E]/10' }
      ],
      description: 'Build a responsive personal portfolio showcase featuring flexbox layouts, CSS animation effects, and a working contact form.'
    },
    {
      id: 2,
      title: 'E-Commerce Product Storefront in React & Tailwind',
      category: 'React Frontend',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80',
      dueDate: 'July 28, 2026',
      progress: 40,
      status: 'In Progress',
      difficulty: 'Intermediate',
      xp: 250,
      techStack: [
        { name: 'React', icon: FaReact, color: 'text-[#61DAFB]', bg: 'bg-[#61DAFB]/10' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-[#38BDF8]', bg: 'bg-[#38BDF8]/10' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]', bg: 'bg-[#3178C6]/10' }
      ],
      description: 'Create an interactive shopping cart application with product filters, state management, and mock checkout system.'
    },
    {
      id: 3,
      title: 'Node.js Express & MongoDB RESTful Authentication API',
      category: 'Backend Dev',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
      dueDate: 'July 20, 2026',
      progress: 100,
      status: 'Completed',
      difficulty: 'Advanced',
      xp: 350,
      techStack: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]', bg: 'bg-[#339933]/10' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]', bg: 'bg-[#47A248]/10' },
        { name: 'Express', icon: SiExpress, color: 'text-gray-400', bg: 'bg-gray-500/10' }
      ],
      description: 'Develop a secure backend REST API service with JWT authentication middleware, password hashing, and Mongoose database schemas.'
    }
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeTab === 'All' || project.category === activeTab;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleTaskAction = (task) => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
    } else {
      setActiveTaskModal(task);
    }
  };

  const handleProjectWorkspaceClick = (projectId, e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setShowLoginPrompt(true);
    }
  };

  const handleSubmitTask = (taskId) => {
    const nextSubmitted = new Set(submittedTaskIds);
    nextSubmitted.add(taskId);
    setSubmittedTaskIds(nextSubmitted);
    setActiveTaskModal(null);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500' };
      case 'Medium': return { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200', dot: 'bg-amber-500' };
      case 'Hard': return { bg: 'bg-rose-100', text: 'text-rose-700', border: 'border-rose-200', dot: 'bg-rose-500' };
      case 'Expert': return { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200', dot: 'bg-purple-500' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200', dot: 'bg-gray-500' };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-800">
      
      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 flex flex-col lg:flex-row min-h-[400px] lg:min-h-[450px] w-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />
        </div>

        {/* Left Content */}
        <div className="relative z-10 w-full lg:w-1/2 px-8 md:px-16 py-10 md:py-14 flex flex-col justify-center">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <FaRocket className="text-amber-400 text-sm" />
                <span className="text-white/90 text-sm font-medium">3 Assigned Tasks • 10+ Projects</span>
              </div>

              <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border ${
                isLoggedIn ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
              }`}>
                {isLoggedIn ? <FaUserCheck /> : <FaLock />}
                <span>{isLoggedIn ? 'Student Access Active' : 'Public Visitor View'}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold !text-yellow-400 mb-4" style={{ color: '#FACC15' }}>
              Projects & Tasks
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-white mt-1">
                Portfolio Showcase
              </span>
            </h1>

            <p className="text-base text-emerald-100/90 max-w-xl mb-6 font-light">
              Complete assigned coding tasks, submit repository solutions, earn XP points, and build an industry-ready developer portfolio.
            </p>

            {/* Search Bar */}
            <div className="relative">
              <div className={`relative bg-white rounded-xl shadow-2xl transition-all duration-300 ${isSearchFocused ? 'scale-[1.02] ring-4 ring-emerald-500/30' : ''}`}>
                <div className="flex items-center p-1.5">
                  <div className="flex items-center pl-4 pr-2 text-gray-400">
                    <FaSearch className={`text-lg transition-colors duration-300 ${isSearchFocused ? 'text-emerald-500' : ''}`} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search projects, tasks, or technologies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => { setTimeout(() => setIsSearchFocused(false), 200); }}
                    className="flex-1 px-3 py-2.5 text-gray-800 bg-transparent border-none outline-none placeholder-gray-400 text-sm font-medium"
                    autoComplete="off"
                  />
                </div>
              </div>

              {/* Quick Link to My Projects & Tasks Page */}
              <div className="mt-4 flex items-center gap-3">
                <Link to="/my-projects-tasks">
                  <button className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-bold rounded-xl shadow-lg flex items-center gap-2 cursor-pointer transition-all">
                    <FaTasks /> View My Projects & Task Submissions →
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right - 3D Animation */}
        <Hero3DAnimation />
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">

        {/* 3 ACTIVE STUDENT TASKS SECTION */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 font-extrabold text-xs rounded-md uppercase tracking-wider mb-1">
                <FaTasks /> Active Student Assignments
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Your 3 Assigned Tasks</h2>
            </div>
            {isLoggedIn ? (
              <span className="text-xs font-bold text-gray-400">1 Completed • 2 In Progress</span>
            ) : (
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 flex items-center gap-1">
                <FaLock className="text-[10px]" /> Log in to submit solutions
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentTasks.map(task => {
              const isDone = submittedTaskIds.has(task.id);

              return (
                <div
                  key={task.id}
                  className="bg-white rounded-3xl border border-gray-200/80 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group"
                >
                  {/* PROJECT IMAGE CARD HEADER */}
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={task.image}
                      alt={task.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-emerald-500 text-slate-950 shadow-md">
                        {task.category}
                      </span>
                      <span className="text-xs font-bold text-amber-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-400/30">
                        +{task.xp} XP
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <h3 className="text-base font-bold text-white leading-snug line-clamp-1">
                        {task.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                      {task.description}
                    </p>

                    {/* PROGRAMMING TECH STACK ICONS BAR */}
                    <div className="flex items-center gap-2 pt-1">
                      {task.techStack.map((tech, tIdx) => {
                        const TechIcon = tech.icon;
                        return (
                          <div
                            key={tIdx}
                            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg ${tech.bg} border border-gray-200/60 text-[11px] font-bold`}
                          >
                            <TechIcon className={`text-sm ${tech.color}`} />
                            <span className="text-gray-700">{tech.name}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Task Progress & Action */}
                    <div className="space-y-3 pt-3 border-t border-gray-100">
                      <div>
                        <div className="flex items-center justify-between text-xs font-bold mb-1">
                          <span className="text-gray-700">{isDone ? '100% Completed' : `${task.progress}% Progress`}</span>
                          <span className="text-gray-400">Due {task.dueDate}</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${isDone ? 'bg-emerald-500' : 'bg-amber-500'}`}
                            style={{ width: `${isDone ? 100 : task.progress}%` }}
                          />
                        </div>
                      </div>

                      {isDone ? (
                        <button className="w-full py-2.5 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-default">
                          <FaCheckCircle className="text-emerald-600" /> Submitted & Verified
                        </button>
                      ) : (
                        <button
                          onClick={() => handleTaskAction(task)}
                          className={`w-full py-2.5 font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                            isLoggedIn
                              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white'
                              : 'bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-700'
                          }`}
                        >
                          {isLoggedIn ? <FaUpload className="text-xs" /> : <FaLock className="text-xs text-amber-400" />}
                          <span>{isLoggedIn ? 'Submit Task Solution' : 'Unlock & Submit Task'}</span>
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* ALL PROJECTS LIBRARY CATALOG */}
        <section className="space-y-6 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-2xl font-extrabold text-gray-900">Explore Project Library</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === category
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => {
              const diff = getDifficultyColor(project.difficulty);
              const techIcons = getTechIconsForTags(project.tags);
              const cardImg = projectImagesMap[(idx % 6) + 1];

              return (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl border border-gray-200 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group"
                >
                  {/* PROJECT IMAGE CARD HEADER */}
                  <div className="relative h-40 overflow-hidden bg-slate-900">
                    <img
                      src={cardImg}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md ${diff.bg} ${diff.text}`}>
                        {project.difficulty}
                      </span>
                      <span className="text-xs text-white font-semibold flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md">
                        <FaClock className="text-emerald-400" /> {project.timeToComplete}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <h3 className="text-base font-bold text-white leading-snug line-clamp-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* PROGRAMMING TECH STACK ICONS */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {techIcons.slice(0, 4).map((tech, tIdx) => {
                        const TechIcon = tech.icon;
                        return (
                          <div
                            key={tIdx}
                            className={`flex items-center gap-1 px-2 py-0.5 rounded-lg ${tech.bg} border border-gray-200/50 text-[10px] font-bold`}
                          >
                            <TechIcon className={`text-xs ${tech.color}`} />
                            <span className="text-gray-700">{tech.name}</span>
                          </div>
                        );
                      })}
                    </div>

                    <Link
                      to={`/project/${project.id}`}
                      onClick={(e) => handleProjectWorkspaceClick(project.id, e)}
                    >
                      <button className="w-full py-2.5 bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2">
                        <span>Start Project Workspace</span>
                        <FaArrowRight className="text-[10px]" />
                      </button>
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* QUICK LOGIN PROMPT MODAL FOR GUESTS */}
      <AnimatePresence>
        {showLoginPrompt && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100 relative text-center space-y-5">
              <button
                onClick={() => setShowLoginPrompt(false)}
                className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:bg-gray-100"
              >
                <FaTimes />
              </button>

              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto shadow-md">
                <FaSignInAlt />
              </div>

              <h3 className="text-xl font-bold text-gray-900">Sign In to Continue</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Please log in to your CodeLearn student account to access project workspace files, submit code tasks, and track your XP progress.
              </p>

              <div className="pt-2 flex flex-col gap-2.5">
                <Link to="/login">
                  <button className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer">
                    Log In to Student Portal →
                  </button>
                </Link>
                <Link to="/register">
                  <button className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-gray-800 font-bold text-xs rounded-xl cursor-pointer">
                    Create Free Student Account
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* TASK SUBMISSION MODAL FOR LOGGED-IN USERS */}
      <AnimatePresence>
        {activeTaskModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100 relative space-y-6">
              <button
                onClick={() => setActiveTaskModal(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:bg-gray-100"
              >
                <FaTimes />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl font-bold">
                  <FaLaptopCode />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                    Task Submission
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mt-0.5">{activeTaskModal.title}</h3>
                </div>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); handleSubmitTask(activeTaskModal.id); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">GitHub Repository / Live URL</label>
                  <input
                    type="url"
                    required
                    placeholder="https://github.com/username/project-repo"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500/30 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Project Notes / Comments</label>
                  <textarea
                    rows={3}
                    placeholder="Add any technical implementation notes..."
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500/30 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Submit Assignment & Claim +{activeTaskModal.xp} XP 🎉
                </button>
              </form>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Projects;