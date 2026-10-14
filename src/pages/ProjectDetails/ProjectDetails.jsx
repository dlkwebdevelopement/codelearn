import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FaArrowLeft, FaRocket, FaClock, FaStar, FaCheckCircle,
  FaFileDownload, FaGithub, FaLaptopCode, FaCheck, FaTimes,
  FaPlay, FaCopy, FaExternalLinkAlt, FaCode, FaAward, FaChevronRight
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const projectDetailsMap = {
  1: {
    id: 1,
    title: 'Personal Portfolio Website with HTML5 & CSS Grid',
    category: 'Frontend Web',
    difficulty: 'Beginner',
    xp: 150,
    time: '4 Hours',
    tags: ['HTML5', 'CSS Grid', 'Flexbox', 'Responsive'],
    overview: 'Build a production-ready personal developer portfolio website from scratch using semantic HTML5 tags, CSS Flexbox & Grid layouts, dynamic hover animations, and a responsive contact form.',
    milestones: [
      { id: 1, title: 'Milestone 1: HTML5 Document Architecture', done: true, desc: 'Setup semantic HTML5 layout with <header>, <nav>, <main>, <section>, and <footer> tags.' },
      { id: 2, title: 'Milestone 2: Navigation & Hero Section', done: true, desc: 'Style fixed navigation header with logo, links, and responsive flexbox alignment.' },
      { id: 3, title: 'Milestone 3: CSS Grid Project Cards', done: false, desc: 'Create 3-column responsive CSS Grid cards with image hover zoom effects.' },
      { id: 4, title: 'Milestone 4: Contact Form Validation', done: false, desc: 'Build an accessible HTML5 contact form with pattern validation and submission styles.' }
    ],
    starterCode: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Portfolio</title>\n  <style>\n    body { font-family: sans-serif; background: #0f172a; color: #fff; margin: 0; padding: 2rem; }\n    .hero { text-align: center; padding: 4rem 1rem; }\n    .hero h1 { color: #10b981; font-size: 3rem; }\n  </style>\n</head>\n<body>\n  <div class="hero">\n    <h1>Jane Doe - Frontend Developer</h1>\n    <p>Building beautiful web experiences.</p>\n  </div>\n</body>\n</html>`,
    resources: [
      { name: 'Starter ZIP Assets (Images & Fonts)', size: '2.4 MB' },
      { name: 'Figma UI Design Spec Mockup', size: 'Web Link' },
      { name: 'HTML5 Semantic Cheat Sheet PDF', size: '1.1 MB' }
    ]
  }
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectDetailsMap[projectId] || projectDetailsMap[1];

  const [milestones, setMilestones] = useState(project.milestones);
  const [editorCode, setEditorCode] = useState(project.starterCode);
  const [githubUrl, setGithubUrl] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleMilestone = (id) => {
    setMilestones(milestones.map(m => m.id === id ? { ...m, done: !m.done } : m));
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(editorCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const completedCount = milestones.filter(m => m.done).length;
  const progressPercent = Math.round((completedCount / milestones.length) * 100);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-30 bg-slate-900 border-b border-slate-800 px-6 py-3.5 flex items-center justify-between">
        <Link to="/projects" className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors">
          <FaArrowLeft /> Back to Projects & Tasks
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
            +{project.xp} XP Reward
          </span>
          <button
            onClick={() => document.getElementById('project-submit-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-md transition-all cursor-pointer"
          >
            Submit Project →
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              {project.category} • {project.difficulty}
            </span>
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
              <FaClock className="text-emerald-400" /> Est. Time: {project.time}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed font-light">
            {project.overview}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 rounded-lg">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Workspace (Left Specs & Right Editor) */}
      <main className="max-w-7xl mx-auto p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Milestones & Specs */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Milestone Progress Card */}
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FaRocket className="text-emerald-400" /> Project Milestones
              </h2>
              <span className="text-xs font-bold text-emerald-400">{completedCount} of {milestones.length} Done ({progressPercent}%)</span>
            </div>

            <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="space-y-3 pt-2">
              {milestones.map(m => (
                <div
                  key={m.id}
                  onClick={() => toggleMilestone(m.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    m.done
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs mt-0.5 shrink-0 ${
                    m.done ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-bold' : 'border-slate-700 text-transparent'
                  }`}>
                    <FaCheck className="text-[10px]" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">{m.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Starter Resources Download */}
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FaFileDownload className="text-emerald-400" /> Downloads & Resources
            </h2>
            <div className="space-y-2.5">
              {project.resources.map((res, i) => (
                <div key={i} className="flex items-center justify-between p-3.5 bg-slate-950 rounded-2xl border border-slate-800 text-xs font-semibold text-slate-300 hover:border-emerald-500/40 transition-colors">
                  <span>{res.name}</span>
                  <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2.5 py-1 rounded-md">{res.size}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Code Playground & Submission */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Interactive Code Editor Console */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="px-5 py-3.5 bg-slate-950 flex items-center justify-between border-b border-slate-800 text-xs font-bold text-slate-300">
              <div className="flex items-center gap-2">
                <FaCode className="text-emerald-400" />
                <span>index.html (Starter Workspace)</span>
              </div>
              <button
                onClick={handleCopyCode}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-sans font-bold flex items-center gap-1 transition-colors"
              >
                <FaCopy /> {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>

            <textarea
              value={editorCode}
              onChange={e => setEditorCode(e.target.value)}
              className="w-full bg-slate-950 text-emerald-400 font-mono text-xs p-5 outline-none resize-none leading-relaxed h-72"
            />
          </div>

          {/* Submission Form */}
          <div id="project-submit-section" className="bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-bold">
                <FaGithub />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Submit Project Repository</h2>
                <p className="text-xs text-slate-400">Paste your GitHub link or live preview URL to claim your +{project.xp} XP.</p>
              </div>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">GitHub Repository URL</label>
                  <input
                    type="url"
                    required
                    value={githubUrl}
                    onChange={e => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/username/portfolio-project"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-white focus:border-emerald-500 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <FaAward className="text-sm" /> Submit Final Code & Claim +{project.xp} XP
                </button>
              </form>
            ) : (
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mx-auto">
                  <FaCheckCircle />
                </div>
                <h3 className="text-base font-bold text-white">Project Submitted Successfully! 🎉</h3>
                <p className="text-xs text-slate-300">You earned <span className="text-emerald-400 font-bold">+{project.xp} XP</span>. Your code has been submitted for peer review.</p>
                <Link to="/projects">
                  <button className="px-5 py-2.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl mt-2">
                    Back to Projects Dashboard →
                  </button>
                </Link>
              </div>
            )}
          </div>

        </div>

      </main>

    </div>
  );
};

export default ProjectDetails;
