import { Link } from 'react-router-dom';
import {
  FaRocket, FaSearch, FaGraduationCap, FaUsers, FaCode,
  FaRegPlayCircle, FaArrowRight, FaMedal, FaStar, FaFolderOpen,
  FaNodeJs, FaReact, FaHtml5, FaCss3Alt,
  FaJs, FaPython, FaJava, FaDocker, FaAws, FaGithub, FaDatabase,
  FaMousePointer, FaSortAmountUp, FaRobot, FaComments, FaMobileAlt,
  FaGem, FaCrown, FaTrophy, FaLightbulb,
  FaCertificate, FaHeart
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiExpress, SiDjango, SiSpringboot,
  SiMongodb, SiPostgresql, SiKubernetes
} from 'react-icons/si';
import Button from '../../components/ui/Button';
import { useState } from 'react';
import Hero3DAnimation from '../../components/ui/Hero3DAnimation';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const categories = [
    { name: 'HTML', icon: FaHtml5, color: 'text-[#E34F26]', bg: 'bg-[#E34F26]/10', border: 'border-[#E34F26]/20' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-[#1572B6]', bg: 'bg-[#1572B6]/10', border: 'border-[#1572B6]/20' },
    { name: 'JavaScript', icon: FaJs, color: 'text-[#F7DF1E]', bg: 'bg-[#F7DF1E]/10', border: 'border-[#F7DF1E]/20' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]', bg: 'bg-[#3178C6]/10', border: 'border-[#3178C6]/20' },
    { name: 'React', icon: FaReact, color: 'text-[#61DAFB]', bg: 'bg-[#61DAFB]/10', border: 'border-[#61DAFB]/20' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black', bg: 'bg-gray-200', border: 'border-black/10' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]', bg: 'bg-[#339933]/10', border: 'border-[#339933]/20' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-700', bg: 'bg-gray-200', border: 'border-gray-500/20' },
    { name: 'Python', icon: FaPython, color: 'text-[#3776AB]', bg: 'bg-[#3776AB]/10', border: 'border-[#3776AB]/20' },
    { name: 'Django', icon: SiDjango, color: 'text-[#092E20]', bg: 'bg-[#092E20]/10', border: 'border-[#092E20]/20' },
    { name: 'Java', icon: FaJava, color: 'text-[#007396]', bg: 'bg-[#007396]/10', border: 'border-[#007396]/20' },
    { name: 'Spring Boot', icon: SiSpringboot, color: 'text-[#6DB33F]', bg: 'bg-[#6DB33F]/10', border: 'border-[#6DB33F]/20' },
    { name: 'C', icon: FaCode, color: 'text-[#A8B9CC]', bg: 'bg-[#A8B9CC]/10', border: 'border-[#A8B9CC]/20' },
    { name: 'C++', icon: FaCode, color: 'text-[#00599C]', bg: 'bg-[#00599C]/10', border: 'border-[#00599C]/20' },
    { name: 'C#', icon: FaCode, color: 'text-[#239120]', bg: 'bg-[#239120]/10', border: 'border-[#239120]/20' },
    { name: 'SQL', icon: FaDatabase, color: 'text-[#4479A1]', bg: 'bg-[#4479A1]/10', border: 'border-[#4479A1]/20' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]', bg: 'bg-[#47A248]/10', border: 'border-[#47A248]/20' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]', bg: 'bg-[#4169E1]/10', border: 'border-[#4169E1]/20' },
    { name: 'Docker', icon: FaDocker, color: 'text-[#2496ED]', bg: 'bg-[#2496ED]/10', border: 'border-[#2496ED]/20' },
    { name: 'Kubernetes', icon: SiKubernetes, color: 'text-[#326CE5]', bg: 'bg-[#326CE5]/10', border: 'border-[#326CE5]/20' },
    { name: 'AWS', icon: FaAws, color: 'text-[#FF9900]', bg: 'bg-[#FF9900]/10', border: 'border-[#FF9900]/20' },
    { name: 'Git & GitHub', icon: FaGithub, color: 'text-[#181717]', bg: 'bg-[#181717]/10', border: 'border-[#181717]/20' }
  ];

  const featuredCourses = [
    { title: 'HTML Fundamentals', desc: 'Learn HTML from scratch with hands-on examples.', icon: FaHtml5, color: 'text-[#E34F26]', bg: 'bg-[#E34F26]/10', border: 'group-hover:border-b-[#E34F26]' },
    { title: 'CSS Mastery', desc: 'Create beautiful and responsive websites.', icon: FaCss3Alt, color: 'text-[#1572B6]', bg: 'bg-[#1572B6]/10', border: 'group-hover:border-b-[#1572B6]' },
    { title: 'JavaScript Essentials', desc: 'Build dynamic web applications.', icon: FaJs, color: 'text-[#F7DF1E]', bg: 'bg-[#F7DF1E]/10', border: 'group-hover:border-b-[#F7DF1E]' },
    { title: 'React Development', desc: 'Develop modern single-page applications.', icon: FaReact, color: 'text-[#61DAFB]', bg: 'bg-[#61DAFB]/10', border: 'group-hover:border-b-[#61DAFB]' },
    { title: 'Node.js Backend', desc: 'Create REST APIs and backend services.', icon: FaNodeJs, color: 'text-[#339933]', bg: 'bg-[#339933]/10', border: 'group-hover:border-b-[#339933]' },
    { title: 'MongoDB Database', desc: 'Learn NoSQL database development.', icon: SiMongodb, color: 'text-[#47A248]', bg: 'bg-[#47A248]/10', border: 'group-hover:border-b-[#47A248]' },
  ];

  const learningPaths = [
    { title: 'Frontend Developer', icon: FaCode, color: 'text-blue-500', bg: 'bg-blue-50', path: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'] },
    { title: 'Backend Developer', icon: FaNodeJs, color: 'text-green-600', bg: 'bg-green-50', path: ['Node.js', 'Express', 'MongoDB', 'Authentication', 'APIs'] },
    { title: 'Full Stack Developer', icon: FaRocket, color: 'text-purple-500', bg: 'bg-purple-50', path: ['Frontend', 'Backend', 'Database', 'Deployment'] },
    { title: 'Python Developer', icon: FaPython, color: 'text-yellow-600', bg: 'bg-yellow-50', path: ['Python', 'Django', 'APIs', 'Projects'] },
    { title: 'DevOps Engineer', icon: FaDocker, color: 'text-cyan-600', bg: 'bg-cyan-50', path: ['Linux', 'Docker', 'Kubernetes', 'AWS'] },
  ];

  const faqs = [
    { q: 'Is it free?', a: 'Many tutorials are free, with optional premium content.' },
    { q: 'Do I receive certificates?', a: 'Yes, certificates are available for eligible courses.' },
    { q: 'Can beginners start here?', a: 'Yes, the platform is designed for learners of all levels.' },
    { q: 'Do I need to install software?', a: 'Most lessons can be completed directly in your browser.' }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50/80 min-h-screen">

      {/* Premium Hero Section with Split Screen */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 flex flex-col lg:flex-row min-h-[400px] lg:min-h-[450px] w-full">
        
        {/* Premium Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaC0ydi0yaDJ6bTAgOHYyaC0ydi0yaDJ6bTAgNHYyaC0ydi0yaDJ6bTAgNHYyaC0ydi0yaDJ6bTQgLTIwaDJ2MmgtMnYtMnptMCAyaDJ2MmgtMnYtMnptMCAyaDJ2MmgtMnYtMnptMCAyaDJ2MmgtMnYtMnptMCAyaDJ2MmgtMnYtMnptLTIgMThoMnYyaC0ydi0yem0wIDBoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        </div>

        {/* Left Content (50%) */}
        <div className="relative z-10 w-full lg:w-1/2 px-8 md:px-16 py-8 md:py-10 flex flex-col justify-center">
          <div className="max-w-2xl text-left xl:ml-auto">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 mb-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-xl">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse delay-75" />
                <span className="w-2 h-2 bg-emerald-200 rounded-full animate-pulse delay-150" />
              </div>
              <span className="text-white text-xs font-semibold tracking-wide">
                <FaRocket className="inline mr-2 text-emerald-300" />
                The Smart Way to Learn
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold !text-yellow-400 mb-4 tracking-tight leading-tight" style={{ color: '#FACC15' }}>
              Learn Programming
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-100 to-emerald-200 mt-1">
                the Smart Way
              </span>
            </h1>

            <p className="text-base text-emerald-100/90 mb-8 font-light leading-relaxed">
              Master web development, mobile apps, AI, and cloud computing through interactive tutorials, live coding, and real-world projects.
            </p>

            {/* Premium Search Bar */}
            <div className="relative group w-full mb-8">
              <div className="relative bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.01]">
                <div className="flex items-center p-1.5">
                  <div className="flex items-center pl-4 pr-2">
                    <FaSearch className="text-emerald-400 text-lg" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search tutorials, courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-2 py-2.5 text-gray-800 bg-transparent border-none outline-none placeholder-gray-400 text-sm font-medium w-full min-w-0"
                  />
                  <button className="px-5 py-2.5 ml-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md">
                    <span className="flex items-center gap-2 text-sm">
                      Search
                      <FaArrowRight className="text-xs" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/courses">
                <Button className="px-8 py-3.5 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1 text-base border-0 cursor-pointer">
                  <span className="flex items-center gap-2">
                    Start Learning Free
                    <FaArrowRight className="text-sm" />
                  </span>
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 text-base cursor-pointer">
                  <span className="flex items-center gap-2">
                    <FaRegPlayCircle className="text-xl" />
                    Explore Courses
                  </span>
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <FaUsers className="text-emerald-300 text-sm" />
                </div>
                <div>
                  <div className="text-white font-bold">50K+</div>
                  <div className="text-emerald-200/80 text-xs">Students</div>
                </div>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <FaStar className="text-amber-400 text-sm" />
                </div>
                <div>
                  <div className="text-white font-bold">4.9/5</div>
                  <div className="text-emerald-200/80 text-xs">Rating</div>
                </div>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <FaCertificate className="text-emerald-300 text-sm" />
                </div>
                <div>
                  <div className="text-white font-bold">500+</div>
                  <div className="text-emerald-200/80 text-xs">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content (50%) - 3D Animated Icons */}
        <Hero3DAnimation />
      </section>

      {/* Popular Learning Categories - Premium */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50/80 backdrop-blur-sm border border-emerald-200 rounded-full mb-4">
              <FaTrophy className="text-emerald-500" />
              <span className="text-emerald-700 font-bold text-sm tracking-wider uppercase">Explore Library</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Categories</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Dive into our most sought-after programming languages and modern frameworks.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {categories.map(cat => (
              <Link
                key={cat.name}
                to={`/tutorials?category=${encodeURIComponent(cat.name)}`}
                className={`flex items-center gap-3 px-6 py-4 bg-white border-2 ${cat.border} rounded-2xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group shadow-sm`}
              >
                <cat.icon className={`text-2xl ${cat.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="font-bold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses - Premium */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50/80 backdrop-blur-sm border border-emerald-200 rounded-full mb-4">
              <FaCrown className="text-amber-500" />
              <span className="text-emerald-700 font-bold text-sm tracking-wider uppercase">Curriculum</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Courses</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Hand-picked courses designed by industry experts to accelerate your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Link to="/coursedetails" key={course.title} className={`block group bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden cursor-pointer`}>
                  <div className="relative">
                    <div className="h-2 bg-gradient-to-r from-emerald-400 to-emerald-600 group-hover:h-3 transition-all duration-300"></div>
                    {index === 0 && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                        <FaCrown className="text-xs" />
                        Top Rated
                      </div>
                    )}
                  </div>

                  <div className="p-8 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-16 h-16 rounded-2xl ${course.bg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`text-3xl ${course.color}`} />
                      </div>
                      <span className="bg-gray-50 text-gray-500 text-xs font-bold px-3 py-1 rounded-full border border-gray-200">
                        Bestseller
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors font-heading">
                      {course.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-6 flex-grow text-lg">
                      {course.desc}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-yellow-400">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        <span className="text-gray-400 text-sm ml-2 font-medium">(4.9)</span>
                      </div>
                      <span className={`font-bold flex items-center gap-2 group-hover:gap-3 transition-all ${course.color}`}>
                        Start <FaArrowRight className="text-sm opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1">
                View All Courses
                <FaArrowRight className="ml-2 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Paths - Premium */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50/80 backdrop-blur-sm border border-emerald-200 rounded-full mb-4">
              <FaGraduationCap className="text-emerald-500" />
              <span className="text-emerald-700 font-bold text-sm tracking-wider uppercase">Career Tracks</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Paths</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Follow a structured, step-by-step path to land your dream job in tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {learningPaths.map((path, idx) => (
              <Link key={idx} to="/courses" className="block cursor-pointer">
                <div className="group bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 p-6 relative overflow-hidden hover:border-emerald-200 h-full flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div>
                    <div className={`w-16 h-16 rounded-2xl ${path.bg} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <path.icon className={`text-3xl ${path.color}`} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-emerald-600 transition-colors">{path.title}</h3>

                    <div className="relative pl-6 space-y-4 before:absolute before:top-2 before:bottom-2 before:left-[9px] before:w-0.5 before:bg-gray-200 group-hover:before:bg-emerald-400 before:transition-colors">
                      {path.path.map((step, i) => (
                        <div key={i} className="relative text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors">
                          <span className="absolute -left-[29px] top-1 w-3.5 h-3.5 rounded-full bg-white border-[3px] border-gray-300 group-hover:border-emerald-500 transition-colors shadow-sm z-10"></span>
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <span className={`text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all ${path.color}`}>
                      Start Path <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Code Editor - Premium */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] opacity-70 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative bg-[#0F111A] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden border border-gray-700/20 transform lg:-rotate-2 hover:rotate-0 transition-all duration-500">
              <div className="bg-[#1A1D27] px-5 py-4 flex justify-between items-center border-b border-gray-800">
                <div className="flex gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500/90 border border-red-600/50"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/90 border border-yellow-600/50"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500/90 border border-green-600/50"></div>
                </div>
                <div className="flex gap-6">
                  <span className="text-xs font-bold text-emerald-400 border-b-2 border-emerald-400 pb-1.5 px-1">script.js</span>
                  <span className="text-xs font-bold text-gray-500 pb-1.5 px-1 hover:text-gray-300 cursor-pointer transition-colors">style.css</span>
                  <span className="text-xs font-bold text-gray-500 pb-1.5 px-1 hover:text-gray-300 cursor-pointer transition-colors">index.html</span>
                </div>
              </div>

              <div className="p-6 md:p-8 font-mono text-[13px] md:text-[15px] leading-loose overflow-x-auto text-left">
                <p><span className="text-[#C792EA]">const</span> <span className="text-[#82AAFF]">learnToCode</span> <span className="text-[#89DDFF]">=</span> <span className="text-[#C792EA]">async</span> () <span className="text-[#C792EA]">=&gt;</span> {'{'}</p>
                <p className="pl-6"><span className="text-[#C792EA]">await</span> <span className="text-[#82AAFF]">Editor</span>.<span className="text-[#82AAFF]">start</span>({'{'}</p>
                <p className="pl-12">mode<span className="text-[#89DDFF]">:</span> <span className="text-[#C3E88D]">'interactive'</span>,</p>
                <p className="pl-12">fun<span className="text-[#89DDFF]">:</span> <span className="text-[#F78C6C]">true</span></p>
                <p className="pl-6">{'}'});</p>
                <p className="pl-6"><span className="text-[#82AAFF]">console</span>.<span className="text-[#82AAFF]">log</span>(<span className="text-[#C3E88D]">"You're amazing!"</span>);</p>
                <p>{'}'};</p>
                <p className="mt-4"><span className="text-[#82AAFF]">learnToCode</span>();</p>

                <div className="mt-8 pt-4 border-t border-gray-800/80">
                  <p className="text-gray-500 text-xs mb-2">OUTPUT</p>
                  <p className="text-[#A6ACCD]">❯ <span className="text-emerald-400 font-bold drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">You're amazing!</span></p>
                  <p className="text-[#A6ACCD] animate-pulse">❯ _</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-bold tracking-widest uppercase mb-6">
              <FaCode className="text-sm" /> Hands-on Learning
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 font-heading tracking-tight text-gray-900">
              Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Code Editor</span>
            </h2>

            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-lg">
              Practice coding directly in your browser. No installation required. Write, run, and debug code instantly in our state-of-the-art environment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {['Live Preview', 'Run Code', 'Save Progress', 'Download Source', 'Share Code', 'AI Assistant'].map(item => (
                <div key={item} className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border-2 border-gray-100 hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all cursor-pointer group">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold group-hover:scale-110 transition-transform">✓</div>
                  <span className="text-gray-700 font-bold group-hover:text-emerald-600 transition-colors">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/playground" className="inline-block">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-4 rounded-2xl shadow-xl shadow-emerald-500/30 flex items-center gap-3 font-bold group transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-2xl">
                Try Editor Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges & Real Projects - Premium */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50/80 backdrop-blur-sm border border-emerald-200 rounded-full mb-4">
              <FaMedal className="text-amber-500" />
              <span className="text-emerald-700 font-bold text-sm tracking-wider uppercase">Practice & Build</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Practice & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Build</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">From algorithmic challenges to full-stack applications, we have everything you need to master your craft.</p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Coding Challenges */}
            <div className="bg-white rounded-[2rem] border-2 border-gray-100 shadow-xl hover:shadow-2xl overflow-hidden flex flex-col lg:flex-row group relative hover:-translate-y-1 transition-all duration-500">
              <div className="lg:w-5/12 p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 w-32 h-32 bg-amber-400/10 rounded-br-[100px] pointer-events-none"></div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-3xl mb-8 shadow-lg shadow-amber-500/30">
                  <FaMedal />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-heading mb-4">Coding Challenges</h3>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">Test your skills with our curated problem sets. Track your progress and rise up the global leaderboard.</p>
                <Link to="/courses">
                  <Button variant="outline" className="w-fit rounded-full border-2 border-gray-300 text-gray-700 hover:border-amber-500 hover:text-amber-600 hover:bg-amber-50 font-bold px-8 py-3! cursor-pointer">Explore Challenges</Button>
                </Link>
              </div>

              <div className="lg:w-7/12 bg-gray-50 p-6 md:p-10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent"></div>

                <div className="w-full max-w-md space-y-4 relative z-10">
                  {[
                    { title: 'Beginner', desc: 'Variables, loops, and logic.', icon: '💡', color: 'bg-green-100 text-green-700 border-green-200' },
                    { title: 'Intermediate', desc: 'Data structures and algorithms.', icon: '🚀', color: 'bg-blue-100 text-blue-700 border-blue-200' },
                    { title: 'Advanced', desc: 'System design and optimization.', icon: '🧠', color: 'bg-purple-100 text-purple-700 border-purple-200' },
                  ].map((level) => (
                    <Link key={level.title} to="/courses" className="block">
                      <div className="bg-white p-5 rounded-2xl shadow-md border-2 border-gray-100 flex items-center gap-4 hover:shadow-lg transition-all cursor-pointer transform hover:-translate-x-2 duration-300 hover:border-amber-200">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl border-2 ${level.color}`}>
                          {level.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{level.title}</h4>
                          <p className="text-sm text-gray-500">{level.desc}</p>
                        </div>
                        <div className="ml-auto w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-amber-500 transition-colors">
                          <FaArrowRight className="text-sm" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Real Projects */}
            <div className="bg-white rounded-[2rem] border-2 border-gray-100 shadow-xl hover:shadow-2xl overflow-hidden flex flex-col lg:flex-row-reverse group relative hover:-translate-y-1 transition-all duration-500">
              <div className="lg:w-5/12 p-10 lg:p-12 border-b lg:border-b-0 lg:border-l border-gray-100 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-[100px] pointer-events-none"></div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-400 flex items-center justify-center text-white text-3xl mb-8 shadow-lg shadow-emerald-500/30">
                  <FaFolderOpen />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-heading mb-4">Real Projects</h3>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">Build an impressive portfolio with step-by-step guided project tutorials. Stop watching, start building.</p>
                <Link to="/projects">
                  <Button variant="primary" className="w-fit rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 font-bold px-8 py-3! shadow-lg shadow-emerald-500/20">Explore Project Library</Button>
                </Link>
              </div>

              <div className="lg:w-7/12 bg-gray-50 p-6 md:p-10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent"></div>

                <div className="w-full max-w-lg relative z-10 flex flex-wrap justify-center gap-3">
                  {[
                    { name: 'Portfolio Website', color: 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100' },
                    { name: 'Todo App', color: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100' },
                    { name: 'Weather App', color: 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100' },
                    { name: 'E-Commerce Website', color: 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100' },
                    { name: 'Blog Platform', color: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100' },
                    { name: 'Chat Application', color: 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100' },
                    { name: 'LMS System', color: 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100' },
                    { name: 'Admin Dashboard', color: 'bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100' },
                  ].map((project) => (
                    <div
                      key={project.name}
                      className={`px-5 py-3 rounded-xl border-2 font-bold text-sm shadow-sm cursor-pointer hover:scale-105 transition-all duration-300 ${project.color}`}
                    >
                      {project.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Recognized Verified Certifications Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full backdrop-blur-md">
              <FaCertificate className="text-amber-400" />
              <span className="text-emerald-300 font-bold text-xs uppercase tracking-widest">Official Verified Credentials</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Earn Industry-Recognized <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-emerald-400">Coding Certifications</span>
            </h2>

            <p className="text-emerald-100/80 text-base md:text-lg font-light leading-relaxed">
              Validate your technical skills through proctored assessment exams. Unlock verifiable PDF diplomas with unique Credential IDs to showcase on your LinkedIn profile and resume.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 'full-access',
                title: 'Complete Full-Stack Web Developer',
                category: 'Full-Stack',
                price: '$49',
                hours: '120+ Hours',
                tag: 'Best Value',
                color: 'from-emerald-600 to-teal-600',
                desc: 'HTML5, CSS3, React 19, Node.js, Express & MongoDB database architecture.'
              },
              {
                id: 'frontend-react',
                title: 'Advanced React & Redux Toolkit',
                category: 'Frontend',
                price: '$29',
                hours: '45+ Hours',
                tag: 'Popular',
                color: 'from-cyan-600 to-blue-600',
                desc: 'Hooks optimization, Concurrent Rendering, Redux Toolkit slices & Vite.'
              },
              {
                id: 'tailwind-ui',
                title: 'Modern UI/UX Design with Tailwind',
                category: 'Design Systems',
                price: '$19',
                hours: '30+ Hours',
                tag: 'Top Rated',
                color: 'from-purple-600 to-pink-600',
                desc: 'Glassmorphism, dark mode tokens, flexbox & grid design systems.'
              }
            ].map(cert => (
              <div
                key={cert.id}
                className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/15 hover:border-emerald-400/50 p-6 flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                      {cert.category}
                    </span>
                    <span className="text-xs font-black text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                      {cert.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-emerald-100/70 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-amber-400">{cert.price}</span>
                    <span className="text-xs text-emerald-300 font-semibold flex items-center gap-1">
                      <FaMedal /> Verified Credential
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link to={`/certification/${cert.id}`}>
                      <button className="w-full py-2.5 bg-white/15 hover:bg-white/25 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer">
                        Exam Details
                      </button>
                    </Link>
                    <Link to="/certification">
                      <button className={`w-full py-2.5 bg-gradient-to-r ${cert.color} hover:opacity-90 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer`}>
                        Enroll & Test
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link to="/certification">
              <Button className="py-4 px-10 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-gray-950 font-black text-sm rounded-full shadow-xl shadow-amber-500/20 cursor-pointer transition-transform hover:scale-105">
                Explore All Certification Exam Tracks & Credentials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us? - Premium */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50/80 backdrop-blur-sm border border-emerald-200 rounded-full mb-4">
              <FaGem className="text-emerald-500" />
              <span className="text-emerald-700 font-bold text-sm tracking-wider uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">CodeLearn?</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">We provide the most comprehensive, interactive, and modern learning experience for future developers.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaMousePointer, text: 'Interactive Tutorials', desc: 'Learn by doing, not just watching.', color: 'text-blue-600', bg: 'bg-blue-100' },
              { icon: FaSortAmountUp, text: 'Step-by-Step Learning', desc: 'Structured paths for every level.', color: 'text-emerald-600', bg: 'bg-emerald-100' },
              { icon: FaCode, text: 'Live Code Playground', desc: 'Write and run code in browser.', color: 'text-purple-600', bg: 'bg-purple-100' },
              { icon: FaRocket, text: 'Real Projects', desc: 'Build an impressive portfolio.', color: 'text-amber-500', bg: 'bg-amber-100' },
              { icon: FaRobot, text: 'AI Learning Assistant', desc: 'Get help 24/7 when you are stuck.', color: 'text-pink-600', bg: 'bg-pink-100' },
              { icon: FaGraduationCap, text: 'Certificates', desc: 'Showcase your achievements.', color: 'text-indigo-600', bg: 'bg-indigo-100' },
              { icon: FaComments, text: 'Community Support', desc: 'Learn together with peers.', color: 'text-orange-500', bg: 'bg-orange-100' },
              { icon: FaMobileAlt, text: 'Mobile Friendly', desc: 'Learn anytime, anywhere.', color: 'text-teal-600', bg: 'bg-teal-100' },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="group bg-white p-7 rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors pointer-events-none"></div>
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:scale-110 ${feature.color}`}>
                    <Icon />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">{feature.text}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Reviews - Premium */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-300/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50/80 backdrop-blur-sm border border-emerald-200 rounded-full mb-4">
              <FaHeart className="text-rose-500" />
              <span className="text-emerald-700 font-bold text-sm tracking-wider uppercase">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Learners</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Join thousands of students who have transformed their careers with CodeLearn.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { review: "The interactive lessons are perfectly structured. I went from zero coding knowledge to building my own full-stack web applications in just three months.", name: "Sarah J.", role: "Junior Frontend Developer", initial: "S", color: "from-emerald-500 to-emerald-400" },
              { review: "The live code playground is an absolute game-changer. I love that I don't have to install any software or manage environments to start practicing.", name: "Michael T.", role: "Software Engineering Student", initial: "M", color: "from-emerald-400 to-green-400" },
              { review: "I landed my first developer job after completing the full-stack learning path. The real-world projects made my portfolio stand out to recruiters.", name: "David L.", role: "Full Stack Developer", initial: "D", color: "from-emerald-500 to-green-500" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden flex flex-col hover:border-emerald-200">
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, idx) => <FaStar key={idx} className="text-sm" />)}
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10 flex-grow font-medium">
                  <span className="text-6xl text-emerald-200 absolute -top-4 -left-4 font-serif font-black leading-none pointer-events-none">"</span>
                  {item.review}
                </p>

                <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} p-[2px] shadow-md`}>
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                      {item.initial}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{item.name}</h5>
                    <p className="text-sm text-gray-500 font-medium">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Premium */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50/80 backdrop-blur-sm border border-emerald-200 rounded-full mb-4">
                <FaLightbulb className="text-emerald-500" />
                <span className="text-emerald-700 font-bold text-sm tracking-wider uppercase">FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Got <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Questions?</span>
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Everything you need to know about the product and billing. Can't find the answer you're looking for? Please chat to our friendly team.
              </p>
              <Button variant="outline" className="rounded-full border-2 border-gray-300 text-gray-700 hover:bg-white px-6 font-bold shadow-sm">
                Contact Support
              </Button>
            </div>

            <div className="lg:w-2/3">
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${activeFaq === i ? 'border-emerald-300 shadow-xl shadow-emerald-500/10' : 'border-gray-100 shadow-lg hover:border-gray-200'}`}>
                    <button
                      className="w-full px-6 py-5 flex justify-between items-center text-left"
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    >
                      <span className={`font-bold text-lg transition-colors ${activeFaq === i ? 'text-emerald-600' : 'text-gray-800'}`}>{faq.q}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeFaq === i ? 'bg-emerald-500 text-white rotate-180' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    {activeFaq === i && (
                      <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Premium */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-white to-emerald-50/50 rounded-[3rem] p-12 md:p-16 relative overflow-hidden border-2 border-emerald-100 shadow-2xl shadow-emerald-500/10 flex flex-col md:flex-row items-center justify-between gap-10">

            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/30 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-300/20 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 md:w-3/5 text-center md:text-left">
              <div className="inline-block px-4 py-2 rounded-full border-2 border-emerald-200 bg-white/80 text-emerald-700 font-bold text-xs mb-6 tracking-wide uppercase shadow-sm">
                🚀 Start Building Today
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">code</span> your future?
              </h2>
              <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
                Join thousands of developers worldwide. Learn, practice, and build real-world projects today.
              </p>
            </div>

            <div className="relative z-10 md:w-2/5 flex flex-col items-center md:items-end w-full">
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <Link to="/courses">
                  <Button variant="primary" className="text-lg px-10 py-4! shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transform hover:-translate-y-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 border-none font-bold rounded-2xl transition-all duration-300 w-full cursor-pointer">
                    Get Started for Free
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button variant="outline" className="text-lg px-10 py-4! border-2 border-gray-300 text-gray-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 font-bold rounded-2xl transition-all duration-300 w-full cursor-pointer">
                    View Curriculum
                  </Button>
                </Link>
              </div>
              <p className="mt-4 text-xs text-gray-400 font-medium text-center md:text-right">No credit card required • Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;