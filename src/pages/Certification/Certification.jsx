import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaSearch, FaTimes, FaArrowRight, FaFilter, FaStar,
  FaClock, FaGraduationCap, FaCertificate, FaFire,
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython,
  FaDatabase, FaCheckCircle, FaShieldAlt, FaGlobe,
  FaUserGraduate, FaTrophy, FaMedal, FaAward, FaLock,
  FaUnlock, FaPrint, FaShareAlt, FaDownload, FaRocket,
  FaCheck, FaCreditCard, FaLaptopCode, FaBookOpen,
  FaUserTie, FaQuestionCircle, FaComments
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiPandas,
  SiNextdotjs, SiTailwindcss, SiExpress
} from 'react-icons/si';
import Button from '../../components/ui/Button';
import Hero3DAnimation from '../../components/ui/Hero3DAnimation';

// Generic certification catalog
const initialCertificationCourses = [
  {
    id: 'full-access',
    title: 'Complete Full-Stack Web Developer',
    description: 'Master HTML5, CSS3, JavaScript, React 19, Node.js, Express, and MongoDB. Industry-standard full-stack developer certification.',
    icon: FaRocket,
    color: '#10B981',
    bg: '#D1FAE5',
    price: 49,
    originalPrice: 199,
    category: 'Full-Stack',
    level: 'All Levels',
    features: ['HTML5 & CSS3', 'React 19', 'Node.js & Express', 'MongoDB Database', 'Official Credential ID'],
    rating: 4.9,
    hours: '120+ hrs',
    tag: 'Best Seller',
    questions: [
      { q: 'What Hook is used to perform side effects in a React functional component?', options: ['useState', 'useEffect', 'useContext', 'useReducer'], correct: 1 },
      { q: 'Which HTTP status code signifies a successful request?', options: ['404', '500', '200', '301'], correct: 2 },
      { q: 'What command initializes a new Node.js package in NPM?', options: ['npm start', 'npm init -y', 'npm install', 'node run'], correct: 1 }
    ]
  },
  {
    id: 'frontend-react',
    title: 'Advanced React & Redux Toolkit Certification',
    description: 'Prove mastery in React 19, Hooks, Context API, Redux Toolkit, custom hooks, and Vite bundle optimization.',
    icon: FaReact,
    color: '#06B6D4',
    bg: '#CFFAFE',
    price: 29,
    originalPrice: 149,
    category: 'Frontend',
    level: 'Intermediate',
    features: ['React 19', 'Redux Toolkit', 'Custom Hooks', 'Performance'],
    rating: 4.9,
    hours: '45+ hrs',
    tag: 'Popular',
    questions: [
      { q: 'How do you prevent unnecessary child component re-renders in React?', options: ['React.memo', 'useRef', 'useEffect', 'useState'], correct: 0 },
      { q: 'Which method dispatches actions in Redux Toolkit?', options: ['useStore', 'useDispatch', 'useAction', 'useDispatchHandler'], correct: 1 },
      { q: 'What is the virtual DOM in React?', options: ['A physical server', 'An in-memory lightweight representation of the real DOM', 'A CSS engine', 'A browser database'], correct: 1 }
    ]
  },
  {
    id: 'python-dsa',
    title: 'Python Data Structures & Algorithms',
    description: 'Demonstrate competency in Python 3.12, Big-O Notation, Binary Trees, Graph Algorithms, and Dynamic Programming.',
    icon: FaPython,
    color: '#3B82F6',
    bg: '#DBEAFE',
    price: 35,
    originalPrice: 150,
    category: 'Backend',
    level: 'Advanced',
    features: ['Python 3.12', 'Big-O Analysis', 'Trees & Graphs', 'Sorting'],
    rating: 4.8,
    hours: '60+ hrs',
    tag: 'Advanced',
    questions: [
      { q: 'What is the average time complexity of searching a value in a Hash Map?', options: ['O(N)', 'O(log N)', 'O(1)', 'O(N^2)'], correct: 2 },
      { q: 'Which keyword creates a generator function in Python?', options: ['return', 'yield', 'lambda', 'define'], correct: 1 },
      { q: 'Which data structure follows First-In, First-Out (FIFO)?', options: ['Stack', 'Queue', 'Tree', 'Graph'], correct: 1 }
    ]
  },
  {
    id: 'tailwind-ui',
    title: 'Modern UI/UX Design with Tailwind CSS',
    description: 'Build responsive, accessible, glassmorphic design systems using modern Tailwind CSS and flexbox/grid layouts.',
    icon: SiTailwindcss,
    color: '#06B6D4',
    bg: '#E0F2FE',
    price: 19,
    originalPrice: 99,
    category: 'Design',
    level: 'Beginner',
    features: ['Tailwind v3', 'Flexbox & Grid', 'Dark Mode Tokens', 'Animations'],
    rating: 5.0,
    hours: '30+ hrs',
    tag: 'Beginner Friendly',
    questions: [
      { q: 'Which class makes a container flex in Tailwind CSS?', options: ['d-flex', 'flex', 'display-flex', 'make-flex'], correct: 1 },
      { q: 'How do you apply styles on hover in Tailwind?', options: ['hover:bg-blue-500', 'onhover:bg-blue-500', ':hover(bg-blue)', 'hover-bg-blue'], correct: 0 },
      { q: 'Which utility controls element transparency in Tailwind?', options: ['opacity-75', 'alpha-75', 'translucent-75', 'fade-75'], correct: 0 }
    ]
  }
];

const Certification = () => {
  const [activeTab, setActiveTab] = useState('catalog'); // 'catalog' | 'my-certificates'
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Unlocked & Enrolled state persisted in localStorage
  const [unlockedCerts, setUnlockedCerts] = useState(() => {
    const saved = localStorage.getItem('codelearn_unlocked_certificates');
    return saved ? JSON.parse(saved) : [
      {
        id: 'tailwind-ui',
        title: 'Modern UI/UX Design with Tailwind CSS',
        credentialId: 'CL-CERT-2026-9842',
        issuedDate: 'July 15, 2026',
        score: '100%',
        grade: 'Pass with Distinction'
      }
    ];
  });

  const [enrolledCerts, setEnrolledCerts] = useState(() => {
    const saved = localStorage.getItem('codelearn_enrolled_certificates');
    return saved ? JSON.parse(saved) : ['tailwind-ui', 'frontend-react'];
  });

  // Modal States
  const [enrollModalCourse, setEnrollModalCourse] = useState(null);
  const [testModalCourse, setTestModalCourse] = useState(null);
  const [certPreviewCourse, setCertPreviewCourse] = useState(null);

  // Test state
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [testScore, setTestScore] = useState(0);

  const userName = 'Jane Doe';

  useEffect(() => {
    localStorage.setItem('codelearn_unlocked_certificates', JSON.stringify(unlockedCerts));
  }, [unlockedCerts]);

  useEffect(() => {
    localStorage.setItem('codelearn_enrolled_certificates', JSON.stringify(enrolledCerts));
  }, [enrolledCerts]);

  const navigate = useNavigate();

  // Handle Enrollment / Payment simulation
  const handleConfirmEnroll = (course) => {
    if (!enrolledCerts.includes(course.id)) {
      setEnrolledCerts([...enrolledCerts, course.id]);
    }
    setEnrollModalCourse(null);
    navigate('/test');
  };

  // Start Assessment Test
  const startTest = (course) => {
    setTestModalCourse(course);
    setCurrentQIdx(0);
    setSelectedAnswers({});
    setTestSubmitted(false);
    setTestScore(0);
  };

  // Submit Assessment Test
  const handleAnswerSelect = (qIdx, optionIdx) => {
    setSelectedAnswers({ ...selectedAnswers, [qIdx]: optionIdx });
  };

  const handleTestSubmit = () => {
    let scoreCount = 0;
    testModalCourse.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) {
        scoreCount++;
      }
    });

    const percentage = Math.round((scoreCount / testModalCourse.questions.length) * 100);
    setTestScore(percentage);
    setTestSubmitted(true);

    if (percentage >= 65) {
      const newCert = {
        id: testModalCourse.id,
        title: testModalCourse.title,
        credentialId: `CL-CERT-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        issuedDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        score: `${percentage}%`,
        grade: percentage >= 90 ? 'Pass with High Distinction' : 'Passed Verified Exam'
      };

      if (!unlockedCerts.some(c => c.id === testModalCourse.id)) {
        setUnlockedCerts([...unlockedCerts, newCert]);
      }
    }
  };

  // Filter Catalog
  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'Design'];
  const filteredCatalog = initialCertificationCourses.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
                          c.description.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      
      {/* Premium Radiant Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 text-white pt-12 pb-20 px-6 sm:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-8">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-md rounded-full border border-emerald-500/30">
                <FaCertificate className="text-amber-400" />
                <span className="text-emerald-300 font-bold text-xs uppercase tracking-widest">
                  Official CodeLearn Credentials
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Coding Certifications & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-emerald-400">
                  Proctored Exams
                </span>
              </h1>

              <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed font-light">
                Validate your full-stack software development skills through industry-recognized proctored assessment tests. Earn shareable PDF diploma credentials with verifiable Credential IDs.
              </p>

              {/* Live Stats Pill */}
              <div className="flex flex-wrap items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300 text-xl font-black">
                    <FaTrophy />
                  </div>
                  <div>
                    <p className="text-xl font-black text-white">{unlockedCerts.length} / 4</p>
                    <p className="text-[11px] text-emerald-200 font-semibold">Certificates Issued</p>
                  </div>
                </div>

                <div className="h-8 w-px bg-white/20 hidden sm:block"></div>

                <div className="text-xs text-emerald-100 font-semibold">
                  <span className="text-amber-300 font-extrabold">98.5% Pass Rate</span> • <span className="text-emerald-300">50k+ Active Alumni</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setActiveTab('catalog')}
                  className={`px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    activeTab === 'catalog'
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-gray-950 shadow-xl shadow-amber-500/20'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <FaBookOpen />
                  <span>Explore Certification Exams</span>
                </button>

                <button
                  onClick={() => setActiveTab('my-certificates')}
                  className={`px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    activeTab === 'my-certificates'
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-gray-950 shadow-xl shadow-amber-500/20'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <FaAward className="text-amber-400" />
                  <span>My Issued Certificates ({unlockedCerts.length})</span>
                </button>
              </div>
            </div>

            {/* Right 3D Interactive Animation Graphic */}
            <Hero3DAnimation />
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 mt-10 space-y-8">
        
        {/* VIEW TAB 1: CATALOG & ENROLLMENT */}
        {activeTab === 'catalog' && (
          <div className="space-y-6">
            
            {/* Search & Category Filter Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-gray-200/80 shadow-xs">
              <div className="relative w-full md:w-80">
                <FaSearch className="absolute left-4 top-3.5 text-gray-400 text-sm" />
                <input
                  type="text"
                  placeholder="Search certification tracks..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Cards Grid - Equal Height & Uniform Card Sizes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {filteredCatalog.map(course => {
                const CourseIcon = course.icon;
                const isUnlocked = unlockedCerts.some(c => c.id === course.id);
                const isEnrolled = enrolledCerts.includes(course.id);
                const unlockedData = unlockedCerts.find(c => c.id === course.id);

                return (
                  <div
                    key={course.id}
                    className="bg-white rounded-3xl border border-gray-200/80 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between h-full group"
                  >
                    <div className="space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        {/* Top Category Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md shrink-0"
                              style={{ backgroundColor: course.bg, color: course.color }}
                            >
                              <CourseIcon />
                            </div>
                            <div>
                              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                                {course.category}
                              </span>
                              <span className="ml-2 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                                {course.tag}
                              </span>
                            </div>
                          </div>

                          {isUnlocked ? (
                            <span className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 shrink-0">
                              <FaCheckCircle className="text-emerald-600" /> Issued
                            </span>
                          ) : isEnrolled ? (
                            <span className="inline-flex items-center gap-1 text-xs font-extrabold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 shrink-0">
                              <FaUnlock className="text-blue-600" /> Exam Unlocked
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs font-extrabold text-gray-600 bg-gray-100 px-3 py-1 rounded-full border border-gray-200 shrink-0">
                              <FaLock className="text-gray-400" /> Enrollment Required
                            </span>
                          )}
                        </div>

                        {/* Uniform Title & Description */}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug min-h-[56px] flex items-center">
                            {course.title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-2 leading-relaxed min-h-[36px] line-clamp-2">
                            {course.description}
                          </p>
                        </div>
                      </div>

                      {/* Tech Features Row */}
                      <div className="flex flex-wrap gap-1.5 pt-2 min-h-[32px] items-center">
                        {course.features.map(f => (
                          <span key={f} className="px-2.5 py-1 bg-slate-100 text-gray-700 text-[11px] font-semibold rounded-lg">
                            • {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer - Uniform Alignment */}
                    <div className="pt-4 mt-6 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-extrabold text-emerald-600">${course.price}</span>
                          <span className="text-xs text-gray-400 line-through">${course.originalPrice}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-semibold">Includes Proctored Exam & PDF Cert</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link to={`/certification/${course.id}`}>
                          <button className="px-3.5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl flex items-center gap-1 cursor-pointer">
                            <span>Details</span>
                          </button>
                        </Link>

                        {isUnlocked ? (
                          <button
                            onClick={() => setCertPreviewCourse(unlockedData)}
                            className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer"
                          >
                            <FaAward className="text-amber-300" />
                            <span>View Cert</span>
                          </button>
                        ) : isEnrolled ? (
                          <Link to="/test">
                            <button
                              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer"
                            >
                              <FaLaptopCode />
                              <span>Take Exam</span>
                            </button>
                          </Link>
                        ) : (
                          <button
                            onClick={() => setEnrollModalCourse(course)}
                            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-950 font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer"
                          >
                            <FaCreditCard />
                            <span>Enroll & Test</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW TAB 2: MY ISSUED CERTIFICATES */}
        {activeTab === 'my-certificates' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FaAward className="text-amber-500" /> Verified Credentials Dashboard
              </h2>
              <span className="text-xs font-semibold text-gray-500">
                Showing {unlockedCerts.length} Issued Certificates
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {unlockedCerts.map(cert => (
                <div
                  key={cert.id}
                  className="bg-white rounded-3xl border-2 border-emerald-200/80 shadow-md p-6 flex flex-col justify-between space-y-6 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl pointer-events-none"></div>

                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-extrabold rounded-full flex items-center gap-1.5">
                        <FaCheckCircle className="text-emerald-600" /> Verified Credential
                      </span>
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                        Score: {cert.score}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-gray-900 leading-snug">
                      {cert.title}
                    </h3>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-gray-100 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400 font-medium">Credential ID:</span>
                        <span className="font-mono font-bold text-gray-800">{cert.credentialId}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400 font-medium">Issued Date:</span>
                        <span className="font-bold text-gray-800">{cert.issuedDate}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400 font-medium">Honors Grade:</span>
                        <span className="font-bold text-emerald-700">{cert.grade}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => setCertPreviewCourse(cert)}
                      className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FaAward />
                      <span>View & Download PDF</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ENROLLMENT & PAYMENT MODAL */}
      {enrollModalCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-gray-200 relative space-y-6 animate-scaleUp">
            <button
              onClick={() => setEnrollModalCourse(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:bg-gray-100 cursor-pointer"
            >
              <FaTimes />
            </button>

            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-3xl font-bold mx-auto shadow-md">
                <FaCreditCard />
              </div>
              <h3 className="text-2xl font-black text-gray-900">Enroll to Certification</h3>
              <p className="text-xs text-gray-500">
                Unlock instant access to the proctored assessment exam & official diploma certificate.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-gray-200/80 space-y-3">
              <div className="flex items-center justify-between border-b border-gray-200/60 pb-3">
                <span className="text-sm font-bold text-gray-900">{enrollModalCourse.title}</span>
                <span className="text-lg font-black text-emerald-600">${enrollModalCourse.price}</span>
              </div>

              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-emerald-600 shrink-0" /> Proctored 3-Question Assessment Exam
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-emerald-600 shrink-0" /> Verified Credential ID & Shareable Link
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-emerald-600 shrink-0" /> Downloadable High-Res PDF Diploma
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => handleConfirmEnroll(enrollModalCourse)}
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaCheckCircle />
                <span>Confirm & Unlock Assessment Test (${enrollModalCourse.price})</span>
              </button>

              <button
                onClick={() => handleConfirmEnroll(enrollModalCourse)}
                className="w-full py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs rounded-xl border border-amber-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaRocket className="text-amber-600" />
                <span>Use CodeLearn Pro Free Unlock</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ASSESSMENT TEST MODAL */}
      {testModalCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl border border-gray-200 relative space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setTestModalCourse(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:bg-gray-100 cursor-pointer"
            >
              <FaTimes />
            </button>

            {!testSubmitted ? (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-2">
                    <FaLaptopCode /> Proctored Assessment Exam
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">{testModalCourse.title}</h3>
                  <p className="text-xs text-gray-500">
                    Question {currentQIdx + 1} of {testModalCourse.questions.length} • Score at least 65% to unlock your official certificate.
                  </p>
                </div>

                <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-200/80 space-y-4">
                  <p className="text-base font-bold text-gray-900">
                    {testModalCourse.questions[currentQIdx].q}
                  </p>

                  <div className="space-y-2.5">
                    {testModalCourse.questions[currentQIdx].options.map((opt, oIdx) => {
                      const isSelected = selectedAnswers[currentQIdx] === oIdx;
                      return (
                        <button
                          key={opt}
                          onClick={() => handleAnswerSelect(currentQIdx, oIdx)}
                          className={`w-full p-3.5 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                              : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-100'
                          }`}
                        >
                          <span>{opt}</span>
                          {isSelected && <FaCheckCircle className="text-white" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={currentQIdx === 0}
                    onClick={() => setCurrentQIdx(currentQIdx - 1)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl disabled:opacity-50 cursor-pointer"
                  >
                    Previous
                  </button>

                  {currentQIdx < testModalCourse.questions.length - 1 ? (
                    <button
                      disabled={selectedAnswers[currentQIdx] === undefined}
                      onClick={() => setCurrentQIdx(currentQIdx + 1)}
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl disabled:opacity-50 shadow-md cursor-pointer"
                    >
                      Next Question
                    </button>
                  ) : (
                    <button
                      disabled={Object.keys(selectedAnswers).length < testModalCourse.questions.length}
                      onClick={handleTestSubmit}
                      className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-950 font-bold text-xs rounded-xl disabled:opacity-50 shadow-md cursor-pointer"
                    >
                      Submit Exam
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6 py-4">
                {testScore >= 65 ? (
                  <>
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto shadow-lg animate-bounce">
                      <FaAward />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-black text-gray-900">Exam Passed!</h3>
                      <p className="text-sm text-gray-600">
                        You scored <span className="font-extrabold text-emerald-600 text-lg">{testScore}%</span>! Your official verified certificate has been issued.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        const newCert = unlockedCerts.find(c => c.id === testModalCourse.id);
                        setTestModalCourse(null);
                        if (newCert) setCertPreviewCourse(newCert);
                        setActiveTab('my-certificates');
                      }}
                      className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm rounded-xl shadow-lg cursor-pointer flex items-center justify-center gap-2"
                    >
                      <FaCertificate />
                      <span>View & Download My Certificate</span>
                    </button>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-4xl mx-auto shadow-lg">
                      <FaTimes />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-black text-gray-900">Score Below 65%</h3>
                      <p className="text-sm text-gray-600">
                        You scored <span className="font-extrabold text-red-600">{testScore}%</span>. Please review the course materials and try again.
                      </p>
                    </div>

                    <button
                      onClick={() => startTest(testModalCourse)}
                      className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md cursor-pointer"
                    >
                      Retake Exam Now
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* OFFICIAL VERIFIED DIPLOMA PREVIEW MODAL */}
      {certPreviewCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-8 shadow-2xl border-4 border-amber-400 relative space-y-6 animate-scaleUp">
            <button
              onClick={() => setCertPreviewCourse(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:bg-gray-100 cursor-pointer"
            >
              <FaTimes />
            </button>

            {/* Certificate Printable Diploma Layout */}
            <div className="border-8 border-double border-emerald-800 p-8 rounded-2xl bg-gradient-to-b from-amber-50/40 via-white to-emerald-50/30 text-center space-y-6 relative overflow-hidden shadow-inner">
              <div className="flex items-center justify-between border-b border-amber-200 pb-4">
                <div className="flex items-center gap-2">
                  <FaGraduationCap className="text-3xl text-emerald-800" />
                  <span className="text-xl font-black tracking-tight text-emerald-950">CodeLearn Academy</span>
                </div>
                <span className="text-xs font-mono font-bold text-gray-500">{certPreviewCourse.credentialId}</span>
              </div>

              <div className="space-y-3 py-4">
                <p className="text-xs uppercase font-extrabold tracking-widest text-amber-700">Official Certificate of Achievement</p>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 italic">This certifies that</h2>
                <h1 className="text-3xl sm:text-4xl font-black text-emerald-800 tracking-wide underline decoration-amber-400 decoration-4">
                  {userName}
                </h1>
                <p className="text-xs text-gray-600 max-w-md mx-auto pt-2 leading-relaxed">
                  has successfully passed the proctored assessment exam with high distinction for
                </p>
                <h3 className="text-2xl font-black text-gray-900 pt-1">{certPreviewCourse.title}</h3>
              </div>

              <div className="flex items-center justify-between border-t border-amber-200 pt-6 text-left">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Issued Date</p>
                  <p className="text-xs font-bold text-gray-900">{certPreviewCourse.issuedDate}</p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-500 p-[2px] shadow-md mx-auto flex items-center justify-center text-emerald-950 font-black text-xs">
                    <FaAward className="text-2xl text-emerald-950" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-amber-800 mt-1 block">Verified Seal</span>
                </div>

                <div className="text-right">
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Director of Education</p>
                  <p className="text-xs font-bold text-gray-900 font-serif italic">Dr. Angela Yu</p>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2 cursor-pointer"
              >
                <FaPrint />
                <span>Print & Save PDF</span>
              </button>

              <button
                onClick={() => alert('Certificate share link copied to clipboard!')}
                className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer"
              >
                <FaShareAlt />
                <span>Copy Shareable Link</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Certification;