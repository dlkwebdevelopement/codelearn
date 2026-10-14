import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  FaCertificate, FaAward, FaCheckCircle, FaStar, FaClock,
  FaGraduationCap, FaArrowLeft, FaShieldAlt, FaRocket,
  FaCheck, FaCreditCard, FaLock, FaShareAlt, FaPrint,
  FaFileAlt, FaUserTie, FaQuestionCircle, FaLaptopCode,
  FaTimes, FaChevronDown, FaChevronUp, FaQuoteLeft, FaLinkedin, FaUserGraduate
} from 'react-icons/fa';
import { FaReact, FaPython, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb } from 'react-icons/si';

// Detailed data for Certification Tracks
const certificationDetailsCatalog = {
  'full-access': {
    id: 'full-access',
    title: 'Complete Full-Stack Web Developer Certification',
    category: 'Full-Stack Engineering',
    tag: 'Best Seller',
    rating: 4.9,
    reviewsCount: 1420,
    studentsEnrolled: '14,890+',
    price: 49,
    originalPrice: 199,
    hours: '120+ Hours',
    instructor: 'Dr. Angela Yu',
    instructorTitle: 'Lead Senior Software Engineer & Educator',
    icon: FaRocket,
    color: '#10B981',
    bg: '#D1FAE5',
    overview: 'This industry-standard proctored certification exam validates your end-to-end competency in designing, building, and deploying modern full-stack web applications using HTML5, CSS3, React, Node.js, and MongoDB.',
    examSpecs: {
      duration: '45 Minutes',
      questionCount: '25 Questions',
      passPercentage: '65% Minimum Score',
      format: 'Proctored Multiple-Choice & Code Snippets',
      retakes: 'Unlimited Retakes Included'
    },
    skillsValidated: [
      'Responsive Web Design with HTML5 & CSS3 Grid/Flexbox',
      'React 19 State Management & Custom Hooks',
      'REST API Design with Express.js & Node.js',
      'MongoDB Schema Modeling & Indexing',
      'JWT Authentication & Refresh Token Security'
    ],
    curriculum: [
      { module: 'Module 1', title: 'Frontend Core (HTML5, Modern CSS & Tailwind)', duration: '12 Questions' },
      { module: 'Module 2', title: 'JavaScript ES6+ & Asynchronous Programming', duration: '8 Questions' },
      { module: 'Module 3', title: 'React 19 Architecture & State Management', duration: '10 Questions' },
      { module: 'Module 4', title: 'Node.js, Express & MongoDB Database Integration', duration: '10 Questions' }
    ],
    questions: [
      { q: 'What Hook is used to perform side effects in a React functional component?', options: ['useState', 'useEffect', 'useContext', 'useReducer'], correct: 1 },
      { q: 'Which HTTP status code signifies a successful request?', options: ['404', '500', '200', '301'], correct: 2 },
      { q: 'What command initializes a new Node.js package in NPM?', options: ['npm start', 'npm init -y', 'npm install', 'node run'], correct: 1 }
    ]
  },
  'frontend-react': {
    id: 'frontend-react',
    title: 'Advanced React & Redux Toolkit Certification',
    category: 'Frontend Engineering',
    tag: 'Popular',
    rating: 4.9,
    reviewsCount: 980,
    studentsEnrolled: '9,450+',
    price: 29,
    originalPrice: 149,
    hours: '45+ Hours',
    instructor: 'Max Schwarzmüller',
    instructorTitle: 'Frontend Architect & Web Specialist',
    icon: FaReact,
    color: '#06B6D4',
    bg: '#CFFAFE',
    overview: 'Demonstrate your advanced React proficiency including Hooks optimization, Context API, Redux Toolkit state slices, custom hooks, and Vite bundle performance.',
    examSpecs: {
      duration: '35 Minutes',
      questionCount: '20 Questions',
      passPercentage: '70% Minimum Score',
      format: 'Proctored Multiple-Choice',
      retakes: '2 Retakes Included'
    },
    skillsValidated: [
      'React 19 Concurrent Rendering & Suspense',
      'Redux Toolkit AsyncThunk & RTK Query',
      'Custom Hooks & Performance Tuning (useMemo/useCallback)',
      'TypeScript Integration in React'
    ],
    curriculum: [
      { module: 'Module 1', title: 'React Core & Fiber Reconciliation', duration: '5 Questions' },
      { module: 'Module 2', title: 'State Management with Redux Toolkit', duration: '8 Questions' },
      { module: 'Module 3', title: 'Custom Hooks & Performance Optimization', duration: '7 Questions' }
    ],
    questions: [
      { q: 'How do you prevent unnecessary child component re-renders in React?', options: ['React.memo', 'useRef', 'useEffect', 'useState'], correct: 0 },
      { q: 'Which method dispatches actions in Redux Toolkit?', options: ['useStore', 'useDispatch', 'useAction', 'useDispatchHandler'], correct: 1 },
      { q: 'What is the virtual DOM in React?', options: ['A physical server', 'An in-memory lightweight representation of the real DOM', 'A CSS engine', 'A browser database'], correct: 1 }
    ]
  },
  'tailwind-ui': {
    id: 'tailwind-ui',
    title: 'Modern UI/UX Design with Tailwind CSS',
    category: 'UI/UX Design',
    tag: 'Beginner Friendly',
    rating: 5.0,
    reviewsCount: 2100,
    studentsEnrolled: '22,100+',
    price: 19,
    originalPrice: 99,
    hours: '30+ Hours',
    instructor: 'Adam Wathan',
    instructorTitle: 'Creator of Tailwind CSS',
    icon: SiTailwindcss,
    color: '#06B6D4',
    bg: '#E0F2FE',
    overview: 'Validate your frontend styling capabilities by creating responsive layouts, dark mode interfaces, and glassmorphic design systems using utility-first Tailwind CSS.',
    examSpecs: {
      duration: '30 Minutes',
      questionCount: '15 Questions',
      passPercentage: '65% Minimum Score',
      format: 'Multiple-Choice & Layout Debugging',
      retakes: 'Unlimited Retakes'
    },
    skillsValidated: [
      'Utility-First CSS Principles & Custom Configurations',
      'Responsive Breakpoints & Mobile-First Design',
      'Flexbox & Grid Layout Architecture',
      'Dark Mode & Theme Tokenization'
    ],
    curriculum: [
      { module: 'Module 1', title: 'Tailwind Utility Basics & Layout Engines', duration: '5 Questions' },
      { module: 'Module 2', title: 'Responsive Design & Media Queries', duration: '5 Questions' },
      { module: 'Module 3', title: 'Custom Themes & Animation Tokens', duration: '5 Questions' }
    ],
    questions: [
      { q: 'Which class makes a container flex in Tailwind CSS?', options: ['d-flex', 'flex', 'display-flex', 'make-flex'], correct: 1 },
      { q: 'How do you apply styles on hover in Tailwind?', options: ['hover:bg-blue-500', 'onhover:bg-blue-500', ':hover(bg-blue)', 'hover-bg-blue'], correct: 0 },
      { q: 'Which utility controls element transparency in Tailwind?', options: ['opacity-75', 'alpha-75', 'translucent-75', 'fade-75'], correct: 0 }
    ]
  }
};

const CertificationDetails = () => {
  const { certId } = useParams();
  const navigate = useNavigate();

  // Fallback to full-access if certId not matched
  const cert = certificationDetailsCatalog[certId] || certificationDetailsCatalog['full-access'];
  const CourseIcon = cert.icon;

  // Interactive Modal States
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [showTestModal, setShowTestModal] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Test state
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [testScore, setTestScore] = useState(0);

  const userName = 'Jane Doe';

  const handleConfirmEnroll = () => {
    setShowEnrollModal(false);
    navigate('/test');
  };

  const handleStartExam = () => {
    setShowEnrollModal(false);
    setShowTestModal(true);
    setCurrentQIdx(0);
    setSelectedAnswers({});
    setTestSubmitted(false);
    setTestScore(0);
  };

  const handleAnswerSelect = (qIdx, optionIdx) => {
    setSelectedAnswers({ ...selectedAnswers, [qIdx]: optionIdx });
  };

  const handleTestSubmit = () => {
    let scoreCount = 0;
    cert.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) {
        scoreCount++;
      }
    });

    const percentage = Math.round((scoreCount / cert.questions.length) * 100);
    setTestScore(percentage);
    setTestSubmitted(true);

    if (percentage >= 65) {
      const saved = localStorage.getItem('codelearn_unlocked_certificates');
      const certs = saved ? JSON.parse(saved) : [];
      const newCert = {
        id: cert.id,
        title: cert.title,
        credentialId: `CL-CERT-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        issuedDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        score: `${percentage}%`,
        grade: percentage >= 90 ? 'Pass with High Distinction' : 'Passed Verified Exam'
      };

      if (!certs.some(c => c.id === cert.id)) {
        localStorage.setItem('codelearn_unlocked_certificates', JSON.stringify([...certs, newCert]));
      }
    }
  };

  const faqs = [
    {
      q: 'How is the certification exam proctored?',
      a: 'Exams are proctored automatically via AI code validation and time-boxed assessment modules to ensure credential integrity.'
    },
    {
      q: 'What happens if I do not pass on my first try?',
      a: 'All enrollments include retake attempts! You can review the topic breakdown and retake the exam after 24 hours.'
    },
    {
      q: 'Can I add this certificate to LinkedIn and my resume?',
      a: 'Yes! Every issued certificate includes a public URL link and verified Credential ID (e.g. CL-CERT-2026-9842) that employers can instantly verify.'
    }
  ];

  return (
    <div className="p-4 sm:p-8 space-y-8 max-w-7xl mx-auto font-sans pb-16">
      
      {/* Back Button */}
      <div>
        <Link
          to="/certification"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-emerald-700 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-2xs transition-colors"
        >
          <FaArrowLeft />
          <span>Back to Certification Catalog</span>
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-xs font-extrabold rounded-full border border-emerald-500/30">
                {cert.category}
              </span>
              <span className="px-3 py-1 bg-amber-400/20 text-amber-300 text-xs font-extrabold rounded-full border border-amber-400/30">
                {cert.tag}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {cert.title}
            </h1>

            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              {cert.overview}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-semibold text-emerald-200">
              <div className="flex items-center gap-1.5">
                <FaStar className="text-amber-400" />
                <span className="font-bold text-white text-sm">{cert.rating}</span>
                <span className="text-emerald-300">({cert.reviewsCount} reviews)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaUserGraduate className="text-emerald-400" />
                <span>{cert.studentsEnrolled} Students Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaClock className="text-teal-400" />
                <span>{cert.hours} Preparation Material</span>
              </div>
            </div>
          </div>

          {/* Pricing & Action Card */}
          <div className="bg-white rounded-3xl p-6 text-gray-900 shadow-2xl border border-gray-200 space-y-5">
            <div className="text-center space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Certification Exam Fee</span>
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl font-black text-emerald-600">${cert.price}</span>
                <span className="text-base text-gray-400 line-through">${cert.originalPrice}</span>
              </div>
              <p className="text-[11px] text-emerald-700 font-bold bg-emerald-50 py-1 px-3 rounded-full inline-block">
                Save 75% • Official Verified Credential Included
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setShowEnrollModal(true)}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <FaCreditCard />
                <span>Enroll & Take Assessment Test</span>
              </button>

              <button
                onClick={() => alert('Exam blueprint PDF downloaded!')}
                className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaFileAlt />
                <span>Download Exam Blueprint (PDF)</span>
              </button>
            </div>

            <div className="pt-2 border-t border-gray-100 text-center text-xs text-gray-400">
              <FaShieldAlt className="inline-block text-emerald-600 mr-1" />
              100% Money-Back Guarantee if Exam Not Passed in 3 Attempts
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Specifications, Skills & Verified Specimen */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (2 Cols): Skills Validated & Curriculum */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Skills Validated */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FaCheckCircle className="text-emerald-600" /> Key Skills Validated in Exam
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cert.skillsValidated.map((skill, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-gray-100">
                  <FaCheck className="text-emerald-600 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs font-bold text-gray-800">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Exam Curriculum Topics */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FaLaptopCode className="text-emerald-600" /> Exam Topic Breakdown
            </h2>

            <div className="space-y-3">
              {cert.curriculum.map((curr, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-emerald-700">{curr.module}</p>
                      <h4 className="text-sm font-extrabold text-gray-900">{curr.title}</h4>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                    {curr.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FaQuestionCircle className="text-emerald-600" /> Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200/80 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 text-left font-bold text-sm text-gray-900 flex items-center justify-between bg-slate-50/60 hover:bg-slate-100/80 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? <FaChevronUp className="text-emerald-600 text-xs" /> : <FaChevronDown className="text-gray-400 text-xs" />}
                  </button>

                  {openFaq === idx && (
                    <div className="p-4 bg-white text-xs text-gray-600 border-t border-gray-100 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (1 Col): Specs Card, Diploma Specimen & Director */}
        <div className="space-y-8">
          
          {/* Exam Specs Box */}
          <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <FaAward className="text-amber-500" /> Exam Specifications
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Exam Duration:</span>
                <span className="font-bold text-gray-900">{cert.examSpecs.duration}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Question Format:</span>
                <span className="font-bold text-gray-900">{cert.examSpecs.questionCount}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Passing Threshold:</span>
                <span className="font-extrabold text-emerald-600">{cert.examSpecs.passPercentage}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Proctoring:</span>
                <span className="font-bold text-gray-900">Automated AI Proctor</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-500 font-medium">Retake Policy:</span>
                <span className="font-bold text-emerald-700">{cert.examSpecs.retakes}</span>
              </div>
            </div>
          </div>

          {/* Sample Diploma Specimen Card */}
          <div className="bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-6 rounded-3xl border-2 border-amber-300 shadow-md space-y-4 text-center relative overflow-hidden">
            <span className="px-3 py-1 bg-amber-100 text-amber-800 text-[10px] font-extrabold uppercase tracking-widest rounded-full inline-block">
              Official Credential Specimen
            </span>

            <div className="space-y-1">
              <p className="text-[10px] text-gray-400 font-serif italic">This certifies that</p>
              <h4 className="text-lg font-black text-emerald-800 underline decoration-amber-400">{userName}</h4>
              <p className="text-[11px] font-bold text-gray-800 pt-1">{cert.title}</p>
            </div>

            <div className="pt-2 flex items-center justify-between text-[10px] text-gray-400 border-t border-amber-200/60">
              <span>Credential ID: CL-CERT-2026</span>
              <FaAward className="text-amber-500 text-lg" />
              <span>Verified Seal</span>
            </div>
          </div>

          {/* Instructor Bio */}
          <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <FaUserTie className="text-emerald-600" /> Certification Director
            </h3>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-lg">
                AY
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-gray-900">{cert.instructor}</h4>
                <p className="text-xs text-gray-500 font-medium">{cert.instructorTitle}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ENROLLMENT & PAYMENT MODAL */}
      {showEnrollModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-gray-200 relative space-y-6">
            <button
              onClick={() => setShowEnrollModal(false)}
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
                <span className="text-sm font-bold text-gray-900">{cert.title}</span>
                <span className="text-lg font-black text-emerald-600">${cert.price}</span>
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
                onClick={handleStartExam}
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaCheckCircle />
                <span>Confirm & Unlock Assessment Test (${cert.price})</span>
              </button>

              <button
                onClick={handleStartExam}
                className="w-full py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs rounded-xl border border-amber-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaRocket className="text-amber-600" />
                <span>Use CodeLearn Pro Free Unlock</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PROCTORED ASSESSMENT TEST MODAL */}
      {showTestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl border border-gray-200 relative space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowTestModal(false)}
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
                  <h3 className="text-2xl font-black text-gray-900">{cert.title}</h3>
                  <p className="text-xs text-gray-500">
                    Question {currentQIdx + 1} of {cert.questions.length} • Score at least 65% to unlock your official certificate.
                  </p>
                </div>

                <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-200/80 space-y-4">
                  <p className="text-base font-bold text-gray-900">
                    {cert.questions[currentQIdx].q}
                  </p>

                  <div className="space-y-2.5">
                    {cert.questions[currentQIdx].options.map((opt, oIdx) => {
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

                  {currentQIdx < cert.questions.length - 1 ? (
                    <button
                      disabled={selectedAnswers[currentQIdx] === undefined}
                      onClick={() => setCurrentQIdx(currentQIdx + 1)}
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl disabled:opacity-50 shadow-md cursor-pointer"
                    >
                      Next Question
                    </button>
                  ) : (
                    <button
                      disabled={Object.keys(selectedAnswers).length < cert.questions.length}
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
                        setShowTestModal(false);
                        navigate('/certification');
                      }}
                      className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm rounded-xl shadow-lg cursor-pointer flex items-center justify-center gap-2"
                    >
                      <FaCertificate />
                      <span>View & Download My Certificate in Portal</span>
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
                      onClick={handleStartExam}
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

    </div>
  );
};

export default CertificationDetails;
