import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaAward, FaCheckCircle, FaStar, FaClock, FaGraduationCap,
  FaArrowRight, FaShieldAlt, FaRocket, FaLock, FaUnlock,
  FaPrint, FaShareAlt, FaDownload, FaLaptopCode, FaTimes,
  FaBookOpen, FaCheck, FaCreditCard, FaSearch
} from 'react-icons/fa';
import { FaReact, FaPython, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb } from 'react-icons/si';

const MyCertifications = () => {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'unlocked' | 'enrolled'
  const [searchQuery, setSearchQuery] = useState('');

  // Unlocked & Enrolled state persisted in localStorage
  const [unlockedCerts, setUnlockedCerts] = useState(() => {
    const saved = localStorage.getItem('codelearn_unlocked_certificates');
    return saved ? JSON.parse(saved) : [
      {
        id: 'tailwind-ui',
        title: 'Modern UI/UX Design with Tailwind CSS',
        category: 'UI/UX Design',
        credentialId: 'CL-CERT-2026-9842',
        issuedDate: 'July 15, 2026',
        score: '100%',
        grade: 'Pass with Distinction',
        icon: SiTailwindcss,
        color: '#06B6D4',
        bg: '#E0F2FE'
      },
      {
        id: 'frontend-react',
        title: 'Advanced React 19 & Redux Mastery',
        category: 'Frontend',
        credentialId: 'CL-CERT-2026-4190',
        issuedDate: 'July 10, 2026',
        score: '93%',
        grade: 'Pass with Honors',
        icon: FaReact,
        color: '#06B6D4',
        bg: '#CFFAFE'
      }
    ];
  });

  const [enrolledExams, setEnrolledExams] = useState([
    {
      id: 'full-access',
      title: 'Complete Full-Stack Web Developer',
      category: 'Full-Stack',
      icon: FaRocket,
      color: '#10B981',
      bg: '#D1FAE5',
      status: 'Ready for Exam',
      questions: [
        { q: 'What Hook is used to perform side effects in a React functional component?', options: ['useState', 'useEffect', 'useContext', 'useReducer'], correct: 1 },
        { q: 'Which HTTP status code signifies a successful request?', options: ['404', '500', '200', '301'], correct: 2 },
        { q: 'What command initializes a new Node.js package in NPM?', options: ['npm start', 'npm init -y', 'npm install', 'node run'], correct: 1 }
      ]
    },
    {
      id: 'python-dsa',
      title: 'Python Data Structures & Algorithms',
      category: 'Backend',
      icon: FaPython,
      color: '#3B82F6',
      bg: '#DBEAFE',
      status: 'Ready for Exam',
      questions: [
        { q: 'What is the average time complexity of searching a value in a Hash Map?', options: ['O(N)', 'O(log N)', 'O(1)', 'O(N^2)'], correct: 2 },
        { q: 'Which keyword creates a generator function in Python?', options: ['return', 'yield', 'lambda', 'define'], correct: 1 },
        { q: 'Which data structure follows First-In, First-Out (FIFO)?', options: ['Stack', 'Queue', 'Tree', 'Graph'], correct: 1 }
      ]
    }
  ]);

  // Modal States
  const [certPreview, setCertPreview] = useState(null);
  const [testModalExam, setTestModalExam] = useState(null);

  // Test state
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [testScore, setTestScore] = useState(0);

  const userName = 'Jane Doe';

  useEffect(() => {
    localStorage.setItem('codelearn_unlocked_certificates', JSON.stringify(unlockedCerts));
  }, [unlockedCerts]);

  // Start Assessment Exam
  const startExam = (exam) => {
    setTestModalExam(exam);
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
    testModalExam.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) {
        scoreCount++;
      }
    });

    const percentage = Math.round((scoreCount / testModalExam.questions.length) * 100);
    setTestScore(percentage);
    setTestSubmitted(true);

    if (percentage >= 65) {
      const newCert = {
        id: testModalExam.id,
        title: testModalExam.title,
        category: testModalExam.category,
        credentialId: `CL-CERT-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        issuedDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        score: `${percentage}%`,
        grade: percentage >= 90 ? 'Pass with High Distinction' : 'Passed Verified Exam',
        icon: testModalExam.icon,
        color: testModalExam.color,
        bg: testModalExam.bg
      };

      if (!unlockedCerts.some(c => c.id === testModalExam.id)) {
        setUnlockedCerts([...unlockedCerts, newCert]);
      }
    }
  };

  return (
    <div className="p-4 sm:p-8 space-y-8 max-w-7xl mx-auto font-sans pb-16">
      
      {/* Top Banner & Student Stats */}
      <div className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-emerald-200 mb-3 border border-white/10">
              <FaAward className="text-amber-400" />
              <span>My Official Verified Credentials</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
              My Certifications & Assessment Exams
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base max-w-2xl font-light">
              View your earned verified diploma certificates, print PDF credentials, or take pending proctored assessment tests.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link to="/certification">
              <button className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-950 font-bold text-xs rounded-xl shadow-lg flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 border-none">
                <FaBookOpen />
                <span>Browse New Certifications</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-200/80 shadow-xs">
        <div className="flex items-center gap-2">
          {[
            { id: 'all', label: `All Certificates (${unlockedCerts.length + enrolledExams.length})` },
            { id: 'unlocked', label: `Issued Credentials (${unlockedCerts.length})` },
            { id: 'enrolled', label: `Pending Assessment Exams (${enrolledExams.length})` }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <FaSearch className="absolute left-3.5 top-3 text-gray-400 text-xs" />
          <input
            type="text"
            placeholder="Search my certificates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
          />
        </div>
      </div>

      {/* ISSUED CERTIFICATES GRID */}
      {(activeFilter === 'all' || activeFilter === 'unlocked') && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <FaCheckCircle className="text-emerald-600" /> Issued Verified Credentials ({unlockedCerts.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {unlockedCerts.map(cert => (
              <div
                key={cert.id}
                className="bg-white rounded-3xl border-2 border-emerald-200/80 shadow-md p-6 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-emerald-400 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-extrabold rounded-full flex items-center gap-1.5">
                      <FaCheckCircle className="text-emerald-600" /> Verified Credential
                    </span>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      Score: {cert.score}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 leading-snug group-hover:text-emerald-700 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-gray-100 space-y-2">
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
                    onClick={() => setCertPreview(cert)}
                    className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FaAward className="text-amber-300" />
                    <span>View & Download Official PDF Diploma</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PENDING ASSESSMENT EXAMS GRID */}
      {(activeFilter === 'all' || activeFilter === 'enrolled') && (
        <div className="space-y-4 pt-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <FaLaptopCode className="text-blue-600" /> Enrolled & Pending Proctored Assessment Exams ({enrolledExams.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledExams.map(exam => {
              const ExamIcon = exam.icon;
              return (
                <div
                  key={exam.id}
                  className="bg-white rounded-3xl border border-gray-200/80 shadow-xs p-6 flex flex-col justify-between space-y-6 group hover:border-blue-300 transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-md"
                          style={{ backgroundColor: exam.bg, color: exam.color }}
                        >
                          <ExamIcon />
                        </div>
                        <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                          {exam.status}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-blue-700 transition-colors">
                      {exam.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      Complete 3 proctored questions with 65%+ score to claim your verified certificate.
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link to="/test">
                      <button
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <FaLaptopCode />
                        <span>Take Proctored Assessment Exam Now</span>
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* DIPLOMA PDF MODAL */}
      {certPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-8 shadow-2xl border-4 border-amber-400 relative space-y-6 animate-scaleUp">
            <button
              onClick={() => setCertPreview(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:bg-gray-100 cursor-pointer"
            >
              <FaTimes />
            </button>

            <div className="border-8 border-double border-emerald-800 p-8 rounded-2xl bg-gradient-to-b from-amber-50/40 via-white to-emerald-50/30 text-center space-y-6 relative overflow-hidden shadow-inner">
              <div className="flex items-center justify-between border-b border-amber-200 pb-4">
                <div className="flex items-center gap-2">
                  <FaGraduationCap className="text-3xl text-emerald-800" />
                  <span className="text-xl font-black tracking-tight text-emerald-950">CodeLearn Academy</span>
                </div>
                <span className="text-xs font-mono font-bold text-gray-500">{certPreview.credentialId}</span>
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
                <h3 className="text-2xl font-black text-gray-900 pt-1">{certPreview.title}</h3>
              </div>

              <div className="flex items-center justify-between border-t border-amber-200 pt-6 text-left">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Issued Date</p>
                  <p className="text-xs font-bold text-gray-900">{certPreview.issuedDate}</p>
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

      {/* ASSESSMENT TEST MODAL */}
      {testModalExam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl border border-gray-200 relative space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setTestModalExam(null)}
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
                  <h3 className="text-2xl font-black text-gray-900">{testModalExam.title}</h3>
                  <p className="text-xs text-gray-500">
                    Question {currentQIdx + 1} of {testModalExam.questions.length} • Score at least 65% to unlock your official certificate.
                  </p>
                </div>

                <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-200/80 space-y-4">
                  <p className="text-base font-bold text-gray-900">
                    {testModalExam.questions[currentQIdx].q}
                  </p>

                  <div className="space-y-2.5">
                    {testModalExam.questions[currentQIdx].options.map((opt, oIdx) => {
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

                  {currentQIdx < testModalExam.questions.length - 1 ? (
                    <button
                      disabled={selectedAnswers[currentQIdx] === undefined}
                      onClick={() => setCurrentQIdx(currentQIdx + 1)}
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl disabled:opacity-50 shadow-md cursor-pointer"
                    >
                      Next Question
                    </button>
                  ) : (
                    <button
                      disabled={Object.keys(selectedAnswers).length < testModalExam.questions.length}
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
                        const newCert = unlockedCerts.find(c => c.id === testModalExam.id);
                        setTestModalExam(null);
                        if (newCert) setCertPreview(newCert);
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
                        You scored <span className="font-extrabold text-red-600">{testScore}%</span>. Please review course materials and try again.
                      </p>
                    </div>

                    <button
                      onClick={() => startExam(testModalExam)}
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

export default MyCertifications;
