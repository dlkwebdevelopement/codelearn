import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaPython, FaJava, FaDocker, FaSearch, FaArrowRight,
  FaStar, FaUsers, FaClock, FaGraduationCap, FaFilter,
  FaTimes, FaFire, FaBookOpen,
  FaPlay, FaChevronDown, FaTh, FaList
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql,
  SiDjango, SiSpringboot, SiExpress
} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import Hero3DAnimation from '../../components/ui/Hero3DAnimation';

const allCourses = [
  {
    id: 'html',
    title: 'HTML Fundamentals',
    desc: 'Master the building blocks of the web. Learn HTML5 structure, semantic elements, forms, and best practices.',
    icon: FaHtml5,
    color: '#E34F26',
    bg: '#fff4f0',
    level: 'Beginner',
    lessons: 50,
    students: '12k',
    duration: '5h',
    rating: 4.9,
    tag: 'Web',
    topics: ['HTML Structure', 'Semantic Tags', 'Forms & Inputs', 'Media Elements', 'Accessibility'],
    popular: true,
    certificate: true,
    featured: true,
  },
  {
    id: 'css',
    title: 'CSS Mastery',
    desc: 'Create beautiful, responsive designs with CSS3, Flexbox, Grid, animations and transitions.',
    icon: FaCss3Alt,
    color: '#1572B6',
    bg: '#f0f6ff',
    level: 'Beginner',
    lessons: 45,
    students: '10k',
    duration: '6h',
    rating: 4.8,
    tag: 'Web',
    topics: ['Selectors', 'Flexbox', 'CSS Grid', 'Animations', 'Responsive Design'],
    popular: false,
    certificate: true,
    featured: false,
  },
  {
    id: 'javascript',
    title: 'JavaScript Essentials',
    desc: 'Learn JS from basics to advanced — DOM manipulation, async/await, ES6+ features.',
    icon: FaJs,
    color: '#F0C000',
    bg: '#fffbf0',
    level: 'Beginner',
    lessons: 60,
    students: '18k',
    duration: '8h',
    rating: 4.9,
    tag: 'Web',
    topics: ['Variables & Types', 'Functions', 'DOM API', 'Promises', 'ES6+ Features'],
    popular: true,
    certificate: true,
    featured: true,
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    desc: 'Add type safety to JavaScript. Learn interfaces, generics, and advanced type patterns.',
    icon: SiTypescript,
    color: '#3178C6',
    bg: '#f0f4ff',
    level: 'Intermediate',
    lessons: 35,
    students: '7k',
    duration: '5h',
    rating: 4.8,
    tag: 'Web',
    topics: ['Types & Interfaces', 'Generics', 'Decorators', 'Enums', 'Config'],
    popular: false,
    certificate: false,
    featured: false,
  },
  {
    id: 'react',
    title: 'React Development',
    desc: 'Build modern, component-based UIs with React hooks, state management, and React Router.',
    icon: FaReact,
    color: '#00c8f8',
    bg: '#f0fbff',
    level: 'Intermediate',
    lessons: 55,
    students: '15k',
    duration: '9h',
    rating: 4.9,
    tag: 'Frontend',
    topics: ['JSX', 'Hooks', 'Context API', 'React Router', 'Performance'],
    popular: true,
    certificate: true,
    featured: true,
  },
  {
    id: 'nextjs',
    title: 'Next.js',
    desc: 'Full-stack React framework with SSR, SSG, API routes and deployment.',
    icon: SiNextdotjs,
    color: '#000000',
    bg: '#f3f3f3',
    level: 'Advanced',
    lessons: 40,
    students: '8k',
    duration: '7h',
    rating: 4.8,
    tag: 'Frontend',
    topics: ['App Router', 'SSR & SSG', 'API Routes', 'Auth', 'Deployment'],
    popular: false,
    certificate: true,
    featured: false,
  },
  {
    id: 'nodejs',
    title: 'Node.js Backend',
    desc: 'Build scalable server-side applications and REST APIs using Node.js and Express.',
    icon: FaNodeJs,
    color: '#339933',
    bg: '#f0fff4',
    level: 'Intermediate',
    lessons: 48,
    students: '9k',
    duration: '8h',
    rating: 4.7,
    tag: 'Backend',
    topics: ['Node Basics', 'Express', 'REST APIs', 'Middleware', 'Authentication'],
    popular: false,
    certificate: true,
    featured: false,
  },
  {
    id: 'python',
    title: 'Python Programming',
    desc: 'Learn Python from basics to OOP, file handling, libraries, and web scraping.',
    icon: FaPython,
    color: '#3776AB',
    bg: '#f0f6ff',
    level: 'Beginner',
    lessons: 52,
    students: '22k',
    duration: '7h',
    rating: 4.9,
    tag: 'General',
    topics: ['Syntax', 'OOP', 'File I/O', 'Modules', 'Web Scraping'],
    popular: true,
    certificate: true,
    featured: false,
  },
  {
    id: 'mongodb',
    title: 'MongoDB',
    desc: 'NoSQL database fundamentals: CRUD, aggregation, indexing, and Mongoose integration.',
    icon: SiMongodb,
    color: '#47A248',
    bg: '#f0fff3',
    level: 'Intermediate',
    lessons: 30,
    students: '5k',
    duration: '4h',
    rating: 4.7,
    tag: 'Database',
    topics: ['CRUD', 'Schemas', 'Aggregation', 'Indexing', 'Mongoose'],
    popular: false,
    certificate: false,
    featured: false,
  },
  {
    id: 'sql',
    title: 'SQL & Databases',
    desc: 'Learn relational database design, SQL queries, joins, and database management.',
    icon: FaDatabase,
    color: '#4479A1',
    bg: '#f0f5ff',
    level: 'Beginner',
    lessons: 38,
    students: '11k',
    duration: '6h',
    rating: 4.8,
    tag: 'Database',
    topics: ['SQL Basics', 'Joins', 'Indexes', 'Transactions', 'Stored Procedures'],
    popular: false,
    certificate: true,
    featured: false,
  },
  {
    id: 'java',
    title: 'Java Programming',
    desc: 'Master Java OOP, collections, multithreading, and design patterns.',
    icon: FaJava,
    color: '#007396',
    bg: '#f0faff',
    level: 'Intermediate',
    lessons: 55,
    students: '8k',
    duration: '10h',
    rating: 4.7,
    tag: 'General',
    topics: ['OOP', 'Collections', 'Threads', 'Generics', 'Spring Intro'],
    popular: false,
    certificate: true,
    featured: false,
  },
  {
    id: 'docker',
    title: 'Docker & DevOps',
    desc: 'Containerize applications, manage multi-container setups with Docker Compose.',
    icon: FaDocker,
    color: '#2496ED',
    bg: '#f0f8ff',
    level: 'Advanced',
    lessons: 28,
    students: '4k',
    duration: '5h',
    rating: 4.8,
    tag: 'DevOps',
    topics: ['Containers', 'Dockerfile', 'Docker Compose', 'Networking', 'Volumes'],
    popular: false,
    certificate: true,
    featured: false,
  },
  {
    id: 'django',
    title: 'Django Web Framework',
    desc: 'Build robust web applications with Django, Python\'s premier web framework.',
    icon: SiDjango,
    color: '#092E20',
    bg: '#f0faf5',
    level: 'Intermediate',
    lessons: 45,
    students: '6k',
    duration: '8h',
    rating: 4.8,
    tag: 'Backend',
    topics: ['Models', 'Views', 'Templates', 'REST API', 'Authentication'],
    popular: false,
    certificate: true,
    featured: false,
  },
  {
    id: 'springboot',
    title: 'Spring Boot',
    desc: 'Enterprise-grade Java development with Spring Boot, microservices, and REST APIs.',
    icon: SiSpringboot,
    color: '#6DB33F',
    bg: '#f0faf5',
    level: 'Advanced',
    lessons: 50,
    students: '5k',
    duration: '10h',
    rating: 4.7,
    tag: 'Backend',
    topics: ['Microservices', 'JPA', 'Security', 'REST APIs', 'Cloud'],
    popular: false,
    certificate: true,
    featured: false,
  },
  {
    id: 'postgresql',
    title: 'PostgreSQL',
    desc: 'Advanced PostgreSQL: query optimization, indexing, stored procedures, and transactions.',
    icon: SiPostgresql,
    color: '#336791',
    bg: '#f0f6ff',
    level: 'Intermediate',
    lessons: 35,
    students: '4k',
    duration: '6h',
    rating: 4.8,
    tag: 'Database',
    topics: ['SQL', 'Indexing', 'Transactions', 'Views', 'Functions'],
    popular: false,
    certificate: true,
    featured: false,
  },
  {
    id: 'express',
    title: 'Express.js',
    desc: 'Build fast and scalable server-side applications with Express.js and Node.js.',
    icon: SiExpress,
    color: '#000000',
    bg: '#f5f5f5',
    level: 'Intermediate',
    lessons: 40,
    students: '7k',
    duration: '7h',
    rating: 4.7,
    tag: 'Backend',
    topics: ['Routing', 'Middleware', 'REST APIs', 'Authentication', 'Error Handling'],
    popular: false,
    certificate: false,
    featured: false,
  },
];

const TAGS = ['All', 'Web', 'Frontend', 'Backend', 'Database', 'General', 'DevOps'];
const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const Courses = () => {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [activeLevel, setActiveLevel] = useState('All');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;

  // Enrollment State & Modal
  const [enrolledIds, setEnrolledIds] = useState(() => {
    const saved = localStorage.getItem('codelearn_enrolled_ids');
    return saved ? JSON.parse(saved) : ['html', 'css', 'javascript', 'react'];
  });
  const [enrollModalCourse, setEnrollModalCourse] = useState(null);
  const [enrollForm, setEnrollForm] = useState({ name: 'Jane Doe', email: 'jane.doe@example.com', goal: '60' });

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    if (!enrollModalCourse) return;

    const nextEnrolled = [...new Set([...enrolledIds, enrollModalCourse.id])];
    setEnrolledIds(nextEnrolled);
    localStorage.setItem('codelearn_enrolled_ids', JSON.stringify(nextEnrolled));
    setEnrollModalCourse(null);
    window.location.href = `/course/${enrollModalCourse.id}`;
  };

  // Enhanced filter function with better search
  const filtered = allCourses
    .filter(c => {
      // Tag filter
      const matchTag = activeTag === 'All' || c.tag === activeTag;

      // Level filter
      const matchLevel = activeLevel === 'All' || c.level === activeLevel;

      // Search filter - case insensitive, checks multiple fields
      const searchLower = search.toLowerCase().trim();
      if (searchLower === '') {
        return matchTag && matchLevel;
      }

      const matchSearch =
        c.title.toLowerCase().includes(searchLower) ||
        c.desc.toLowerCase().includes(searchLower) ||
        c.tag.toLowerCase().includes(searchLower) ||
        c.level.toLowerCase().includes(searchLower) ||
        c.topics.some(topic => topic.toLowerCase().includes(searchLower));

      return matchTag && matchLevel && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'popular') return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'students') return parseInt(b.students) - parseInt(a.students);
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });



  // Pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filtered.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filtered.length / coursesPerPage);

  const levelColor = {
    Beginner: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500' },
    Intermediate: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', dot: 'bg-amber-500' },
    Advanced: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', dot: 'bg-rose-500' },
  };

  const featuredCourses = filtered.filter(c => c.featured);

  // Handle search with Enter key
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Search is already handled by the filter
    setIsSearchFocused(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner - Split Screen with 3D Animation */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 flex flex-col lg:flex-row min-h-[400px] lg:min-h-[450px] w-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />
        </div>

        {/* Left Content */}
        <div className="relative z-10 w-full lg:w-1/2 px-8 md:px-16 py-10 md:py-14 flex flex-col justify-center">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-xl">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse delay-75" />
                <span className="w-2 h-2 bg-emerald-200 rounded-full animate-pulse delay-150" />
              </div>
              <span className="text-white text-sm font-semibold tracking-wide">🎓 50+ Premium Courses</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold !text-yellow-400 mb-4 tracking-tight leading-tight">
              Discover Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-emerald-200">
                Learning Path
              </span>
            </h1>

            <p className="text-base text-white/90 mb-8 font-light max-w-xl">
              Expert-led courses designed to accelerate your career in tech
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit}>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
                <div className={`relative bg-white rounded-xl shadow-2xl transition-all duration-300 ${isSearchFocused ? 'scale-[1.02] ring-4 ring-emerald-500/30' : ''}`}>
                  <div className="flex items-center p-2">
                    <div className="flex items-center pl-4 pr-3 text-gray-400">
                      <FaSearch className={`text-xl transition-colors duration-300 ${isSearchFocused ? 'text-emerald-500' : ''}`} />
                    </div>
                    <input
                      type="text"
                      placeholder="Search for courses, topics, or skills..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => { setTimeout(() => setIsSearchFocused(false), 200); }}
                      className="flex-1 px-3 py-3 text-gray-800 bg-transparent border-none outline-none placeholder-gray-400 text-sm"
                      autoComplete="off"
                    />
                    {search && (
                      <button type="button" onClick={() => setSearch('')} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <FaTimes className="text-lg" />
                      </button>
                    )}
                    <button type="submit" className="px-6 py-2.5 ml-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                      <span className="flex items-center gap-2 text-sm">Search <FaArrowRight className="text-xs" /></span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </form>

            {/* Trending Tags */}
            <div className="mt-4 flex flex-wrap gap-2 items-center">
              <span className="text-white/70 text-xs font-medium">Trending:</span>
              {['React', 'JavaScript', 'Python', 'Node.js', 'Docker'].map((tag) => (
                <button key={tag} type="button" onClick={() => { setSearch(tag); }} className="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-xs font-medium transition-all hover:scale-105">
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right - 3D Animation */}
        <Hero3DAnimation />
      </div>

      {/* Filter & Controls Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center gap-3 py-3">
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-gray-700 font-medium transition-all"
            >
              <FaFilter className="text-sm" />
              <span>Filters</span>
              <FaChevronDown className={`text-xs transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            <div className="hidden lg:flex flex-wrap gap-1.5">
              {TAGS.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`
                    px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                    ${activeTag === tag
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                      : 'text-gray-600 hover:bg-gray-100'}
                  `}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="flex-1" />

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 font-medium">
                <span className="font-bold text-gray-700">{filtered.length}</span> courses
              </span>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 bg-gray-100 border-none rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
              >
                <option value="popular">⭐ Most Popular</option>
                <option value="rating">📈 Highest Rated</option>
                <option value="students">👥 Most Students</option>
                <option value="title">🔤 Alphabetical</option>
              </select>

              <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`
                    p-2 rounded-lg transition-all duration-200
                    ${viewMode === 'grid' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-400 hover:text-gray-600'}
                  `}
                  title="Grid View"
                >
                  <FaTh />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`
                    p-2 rounded-lg transition-all duration-200
                    ${viewMode === 'list' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-400 hover:text-gray-600'}
                  `}
                  title="List View"
                >
                  <FaList />
                </button>
              </div>
            </div>
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="py-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-6">
                    <div>
                      <div className="text-sm font-semibold text-gray-700 mb-2">Categories</div>
                      <div className="flex flex-wrap gap-1.5">
                        {TAGS.map(tag => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => setActiveTag(tag)}
                            className={`
                              px-3 py-1 rounded-full text-xs font-medium transition-all
                              ${activeTag === tag
                                ? 'bg-emerald-500 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                            `}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-700 mb-2">Level</div>
                      <div className="flex flex-wrap gap-1.5">
                        {LEVELS.map(level => (
                          <button
                            key={level}
                            type="button"
                            onClick={() => setActiveLevel(level)}
                            className={`
                              px-3 py-1 rounded-full text-xs font-medium transition-all
                              ${activeLevel === level
                                ? 'bg-emerald-500 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                            `}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-700 mb-2">Search Results</div>
                      <div className="text-sm text-gray-600">
                        Found <span className="font-bold text-emerald-600">{filtered.length}</span> courses
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Course Grid - 3x3 Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Featured Section - 3 Cards */}
        {featuredCourses.length > 0 && search === '' && activeTag === 'All' && activeLevel === 'All' && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full" />
              <h2 className="text-2xl font-bold text-gray-800">⭐ Featured Courses</h2>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">Top Picks</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.slice(0, 3).map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-emerald-200 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-l from-emerald-500 to-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-bl-2xl shadow-lg">
                      FEATURED
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-emerald-50">
                        <course.icon className="text-3xl" style={{ color: course.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${levelColor[course.level].bg} ${levelColor[course.level].text}`}>
                            {course.level}
                          </span>
                          <div className="flex items-center gap-1">
                            <FaStar className="text-yellow-400 text-xs" />
                            <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{course.desc}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <FaClock className="text-emerald-500" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaUsers className="text-emerald-500" />
                          {course.students}
                        </span>
                      </div>
                      <Link
                        to={`/course/${course.id}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
                      >
                        <span className="text-white">Enroll Now</span>
                        <FaArrowRight className="text-xs text-white" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* All Courses - 3x3 Grid */}
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaSearch className="text-4xl text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No courses found</h3>
            <p className="text-gray-400">Try adjusting your filters or search term</p>
            <button
              type="button"
              onClick={() => {
                setSearch('');
                setActiveTag('All');
                setActiveLevel('All');
              }}
              className="mt-4 px-6 py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all"
            >
              Clear all filters
            </button>
          </motion.div>
        ) : (
          <>
            {(featuredCourses.length > 0 && search === '' && activeTag === 'All' && activeLevel === 'All') && (
              <div className="flex items-center gap-3 mb-6 mt-12">
                <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full" />
                <h2 className="text-2xl font-bold text-gray-800">All Courses</h2>
                <span className="text-sm text-gray-500">({filtered.length} available)</span>
              </div>
            )}

            {/* 3x3 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCourses.map((course, index) => {
                const Icon = course.icon;
                const lvl = levelColor[course.level];
                const isEnrolled = enrolledIds.includes(course.id);
                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-emerald-300 group relative"
                  >
                    <div className="h-1.5 group-hover:h-2 transition-all duration-300" style={{ backgroundColor: course.color }} />

                    {course.popular && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="flex items-center gap-1 px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full shadow-md">
                          <FaFire className="text-xs" />
                          Popular
                        </span>
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                          style={{ backgroundColor: course.bg }}
                        >
                          <Icon className="text-3xl transition-transform duration-300 group-hover:scale-110" style={{ color: course.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200 truncate">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${lvl.bg} ${lvl.text}`}>
                              {course.level}
                            </span>
                            <div className="flex items-center gap-1">
                              <FaStar className="text-yellow-400 text-xs" />
                              <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                        {course.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {course.topics.slice(0, 3).map(t => (
                          <span key={t} className="px-2.5 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-medium rounded-lg transition-colors border border-gray-200">
                            {t}
                          </span>
                        ))}
                        {course.topics.length > 3 && (
                          <span className="px-2.5 py-1 bg-gray-50 text-gray-400 text-xs font-medium rounded-lg border border-gray-200">
                            +{course.topics.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <FaClock className="text-emerald-500" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaBookOpen className="text-emerald-500" />
                            {course.lessons}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {isEnrolled ? (
                            <Link
                              to={`/course/${course.id}`}
                              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs rounded-xl transition-all duration-300 shadow-md shadow-emerald-500/20 hover:scale-105"
                            >
                              <FaPlay className="text-[10px] text-white" />
                              <span>Enrolled</span>
                            </Link>
                          ) : (
                            <>
                              <Link
                                to={`/course/${course.id}?mode=readonly`}
                                className="inline-flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs rounded-xl transition-all"
                                title="Preview course curriculum read-only"
                              >
                                <span>Read Details</span>
                              </Link>

                              <button
                                type="button"
                                onClick={() => setEnrollModalCourse(course)}
                                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xs rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95 cursor-pointer"
                              >
                                <span>Enroll Now</span>
                                <FaArrowRight className="text-xs text-white" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mt-12">
                <button
                  type="button"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:scale-105'
                    }`}
                >
                  Previous
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    return (
                      <button
                        key={pageNum}
                        type="button"
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all ${currentPage === pageNum
                          ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30 scale-110'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-105'
                          }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:scale-105'
                    }`}
                >
                  Next
                </button>
              </div>
            )}

            {/* Enrollment Modal Form */}
            <AnimatePresence>
              {enrollModalCourse && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xs">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100 relative space-y-6"
                  >
                    <button
                      onClick={() => setEnrollModalCourse(null)}
                      className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                    >
                      <FaTimes className="text-base" />
                    </button>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold border border-emerald-100">
                        <FaGraduationCap />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                          Free Course Enrollment
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 leading-snug mt-1">
                          {enrollModalCourse.title}
                        </h3>
                      </div>
                    </div>

                    <form onSubmit={handleEnrollSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Full Student Name</label>
                        <input
                          type="text"
                          required
                          value={enrollForm.name}
                          onChange={e => setEnrollForm({ ...enrollForm, name: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          value={enrollForm.email}
                          onChange={e => setEnrollForm({ ...enrollForm, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Daily Study Target</label>
                        <select
                          value={enrollForm.goal}
                          onChange={e => setEnrollForm({ ...enrollForm, goal: e.target.value })}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 outline-none cursor-pointer"
                        >
                          <option value="30">30 Mins / Day (Casual)</option>
                          <option value="60">60 Mins / Day (Recommended)</option>
                          <option value="120">120 Mins / Day (Intensive)</option>
                        </select>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Complete Enrollment & Start Learning</span>
                          <FaArrowRight className="text-xs" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
};

export default Courses;