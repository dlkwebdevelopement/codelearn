import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaTasks, FaCheckCircle, FaClock, FaUpload, FaGithub,
  FaCode, FaRocket, FaTrophy, FaPlus, FaTimes, FaLaptopCode,
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython,
  FaArrowLeft, FaCheck, FaExclamationCircle
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb } from 'react-icons/si';

const MyProjectsTasks = () => {
  const [filter, setFilter] = useState('All');
  const [activeSubmitModal, setActiveSubmitModal] = useState(null);
  const [repoUrl, setRepoUrl] = useState('');
  const [codeNotes, setCodeNotes] = useState('');
  const [submittedTaskIds, setSubmittedTaskIds] = useState(new Set([1, 4]));
  const [completedSubTaskIds, setCompletedSubTaskIds] = useState(new Set([101, 102, 103, 201, 202, 301, 401, 402]));
  const [successToast, setSuccessToast] = useState('');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Storefront Platform',
      category: 'Full Stack',
      status: 'Submitted',
      progress: 100,
      xp: 450,
      dueDate: 'Jul 25, 2026',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80',
      tech: [
        { name: 'React', icon: FaReact, color: 'text-cyan-400' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-emerald-500' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-sky-400' }
      ],
      tasks: [
        { id: 101, title: 'Build Product Catalog Grid with Filters' },
        { id: 102, title: 'Integrate Shopping Cart Context & State' },
        { id: 103, title: 'Setup Stripe Checkout API Simulation' }
      ]
    },
    {
      id: 2,
      title: 'Personal Portfolio & Tech Blog',
      category: 'Frontend',
      status: 'In Progress',
      progress: 65,
      xp: 250,
      dueDate: 'Jul 28, 2026',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      tech: [
        { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' }
      ],
      tasks: [
        { id: 201, title: 'Responsive Flexbox Hero Banner' },
        { id: 202, title: 'Interactive Projects Showcase Modal' },
        { id: 203, title: 'Form Validation & Contact Handler' }
      ]
    },
    {
      id: 3,
      title: 'Node.js JWT Authentication REST API',
      category: 'Backend',
      status: 'In Progress',
      progress: 40,
      xp: 350,
      dueDate: 'Aug 02, 2026',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
      tech: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-emerald-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-600' }
      ],
      tasks: [
        { id: 301, title: 'MongoDB User Model & Bcrypt Hashing' },
        { id: 302, title: 'JWT Login & Refresh Token Middleware' },
        { id: 303, title: 'Role-Based Authorization Guards' }
      ]
    },
    {
      id: 4,
      title: 'Python Data Science Analytics Dashboard',
      category: 'Data Science',
      status: 'Completed',
      progress: 100,
      xp: 400,
      dueDate: 'Jul 20, 2026',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      tech: [
        { name: 'Python', icon: FaPython, color: 'text-amber-400' }
      ],
      tasks: [
        { id: 401, title: 'Clean & Parse CSV Datasets with Pandas' },
        { id: 402, title: 'Matplotlib Interactive Charts Generator' }
      ]
    }
  ];

  const toggleSubTask = (taskId) => {
    setCompletedSubTaskIds(prev => {
      const next = new Set(prev);
      if (next.has(taskId)) {
        next.delete(taskId);
      } else {
        next.add(taskId);
      }
      return next;
    });
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (activeSubmitModal) {
      setSubmittedTaskIds(prev => new Set([...prev, activeSubmitModal.id]));
      setSuccessToast(`Project "${activeSubmitModal.title}" submitted successfully! +${activeSubmitModal.xp} XP awarded.`);
      setActiveSubmitModal(null);
      setRepoUrl('');
      setCodeNotes('');
      setTimeout(() => setSuccessToast(''), 4000);
    }
  };

  const filteredProjects = projects.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'Submitted') return submittedTaskIds.has(p.id) || p.status === 'Submitted';
    return p.status === filter;
  });

  return (
    <div className="w-full h-full min-h-screen overflow-y-auto p-4 sm:p-8 lg:p-10 space-y-8 bg-slate-50/90 font-sans pb-24">
      <div className="w-full max-w-full space-y-8">
        
        {/* Navigation Back & Header Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <Link to="/dashboard">
                <button className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border border-white/20 cursor-pointer">
                  <FaArrowLeft /> Back to Dashboard
                </button>
              </Link>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-400/40 rounded-full text-emerald-300 text-xs font-bold">
                <FaTasks /> Student Project Portal
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              My Enrolled Projects & Tasks
            </h1>
            <p className="text-emerald-100/90 text-sm max-w-3xl font-medium leading-relaxed">
              Manage your real-world coding assignments, complete interactive checklist tasks, upload your GitHub repository links, and claim verified skill XP badges.
            </p>
          </div>

          {/* Decorative Graphic Icon */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
            <FaLaptopCode className="text-9xl text-white" />
          </div>
        </div>

        {/* Success Alert Banner */}
        {successToast && (
          <div className="bg-emerald-600 text-white p-4 rounded-2xl flex items-center gap-3 text-sm font-bold shadow-xl animate-fadeIn">
            <FaCheckCircle className="text-2xl shrink-0" />
            <span>{successToast}</span>
          </div>
        )}

        {/* Student Performance Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold shrink-0">
              <FaTasks />
            </div>
            <div>
              <p className="text-3xl font-black text-gray-900">4</p>
              <p className="text-xs font-bold text-gray-500 mt-0.5">Projects Enrolled</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold shrink-0">
              <FaCheckCircle />
            </div>
            <div>
              <p className="text-3xl font-black text-gray-900">{completedSubTaskIds.size} / 11</p>
              <p className="text-xs font-bold text-gray-500 mt-0.5">Tasks Completed</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center text-2xl font-bold shrink-0">
              <FaTrophy />
            </div>
            <div>
              <p className="text-3xl font-black text-gray-900">+1,450</p>
              <p className="text-xs font-bold text-gray-500 mt-0.5">Earned XP Badges</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl font-bold shrink-0">
              <FaRocket />
            </div>
            <div>
              <p className="text-3xl font-black text-gray-900">82%</p>
              <p className="text-xs font-bold text-gray-500 mt-0.5">Completion Rate</p>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-between gap-4 flex-wrap border-b border-gray-200 pb-4">
          <div className="flex items-center gap-2">
            {['All', 'In Progress', 'Submitted', 'Completed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  filter === tab
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <Link to="/projects">
            <button className="px-5 py-2.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center gap-2 cursor-pointer">
              <FaPlus /> Explore More Projects
            </button>
          </Link>
        </div>

        {/* Projects Cards Grid (Full Responsive Width) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
          {filteredProjects.map((project) => {
            const isSubmitted = submittedTaskIds.has(project.id);
            const projectCompletedCount = project.tasks.filter(t => completedSubTaskIds.has(t.id) || isSubmitted).length;
            const computedProgress = isSubmitted ? 100 : Math.round((projectCompletedCount / project.tasks.length) * 100);

            return (
              <div
                key={project.id}
                className="bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6 sm:p-8 space-y-5">
                  
                  {/* Card Header & Status Badge */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 px-3 py-1 bg-emerald-50 rounded-lg border border-emerald-200/60">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2.5 leading-snug">{project.title}</h3>
                    </div>
                    <span
                      className={`text-xs font-extrabold px-3.5 py-1.5 rounded-full shrink-0 ${
                        isSubmitted || project.status === 'Completed'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-amber-100 text-amber-800 border border-amber-300'
                      }`}
                    >
                      {isSubmitted ? 'Submitted' : project.status}
                    </span>
                  </div>

                  {/* Tech Stack Icons */}
                  <div className="flex items-center gap-2.5 pt-1">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Stack:</span>
                    {project.tech.map((t, idx) => {
                      const IconComp = t.icon;
                      return (
                        <div key={idx} className="flex items-center gap-1 px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-lg text-xs font-bold text-gray-700">
                          <IconComp className={`text-sm ${t.color}`} />
                          <span>{t.name}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Dynamic Progress Bar */}
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-xs font-bold text-gray-600">
                      <span>Sub-Tasks Progress ({projectCompletedCount}/{project.tasks.length})</span>
                      <span className="text-emerald-600 font-extrabold">{computedProgress}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500 rounded-full"
                        style={{ width: `${computedProgress}%` }}
                      />
                    </div>
                  </div>

                  {/* Interactive Sub-Task Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <p className="text-xs font-extrabold text-gray-800 uppercase tracking-wider">Interactive Task Checklist:</p>
                    <div className="space-y-2">
                      {project.tasks.map((task) => {
                        const isDone = completedSubTaskIds.has(task.id) || isSubmitted;

                        return (
                          <div
                            key={task.id}
                            onClick={() => toggleSubTask(task.id)}
                            className={`flex items-center gap-3 p-3 rounded-2xl border transition-all cursor-pointer ${
                              isDone ? 'bg-emerald-50/60 border-emerald-200' : 'bg-gray-50 border-gray-200 hover:bg-gray-100/80'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                              isDone ? 'bg-emerald-600 text-white' : 'border-2 border-gray-300 text-transparent'
                            }`}>
                              <FaCheck />
                            </div>
                            <span className={`text-xs font-semibold ${isDone ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                              {task.title}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* Card Footer Actions */}
                <div className="bg-gray-50/90 px-6 sm:px-8 py-4 border-t border-gray-100 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                    <FaClock className="text-emerald-500" />
                    <span>Due: {project.dueDate}</span>
                  </div>

                  {isSubmitted ? (
                    <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1.5">
                      <FaCheckCircle className="text-base" /> Submission Verified (+{project.xp} XP)
                    </span>
                  ) : (
                    <button
                      onClick={() => setActiveSubmitModal(project)}
                      className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-emerald-600/20 flex items-center gap-2 cursor-pointer transform hover:scale-105"
                    >
                      <FaUpload /> Submit Task Code
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Task Code Submission Modal */}
      {activeSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-fadeIn">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase text-emerald-600">Submit Project Task</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{activeSubmitModal.title}</h3>
              </div>
              <button
                onClick={() => setActiveSubmitModal(null)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-xl hover:bg-gray-100 cursor-pointer"
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleTaskSubmit} className="space-y-4 text-xs font-semibold">
              <div>
                <label className="block text-gray-700 mb-1 font-bold">GitHub Repository URL</label>
                <div className="relative">
                  <FaGithub className="absolute left-3 top-3 text-base text-gray-400" />
                  <input
                    type="url"
                    required
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    placeholder="https://github.com/username/project-repo"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-1 font-bold">Code Notes / Live Demo URL</label>
                <textarea
                  rows={3}
                  value={codeNotes}
                  onChange={(e) => setCodeNotes(e.target.value)}
                  placeholder="Optional notes or Netlify/Vercel live link..."
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveSubmitModal(null)}
                  className="px-4 py-2.5 text-gray-600 hover:bg-gray-100 rounded-xl font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <FaUpload /> Submit & Earn +{activeSubmitModal.xp} XP
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProjectsTasks;
