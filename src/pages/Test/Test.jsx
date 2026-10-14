import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaClock, FaExclamationTriangle, FaShieldAlt, FaCheckCircle,
  FaTimesCircle, FaArrowRight, FaArrowLeft, FaAward, FaLock,
  FaTimes, FaCrown, FaCheck, FaQuestionCircle
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const quizQuestions = [
  {
    id: 1,
    question: 'Which HTML5 semantic element is used to define independent, self-contained content?',
    options: ['<section>', '<article>', '<div>', '<aside>'],
    correct: 1
  },
  {
    id: 2,
    question: 'In CSS Flexbox, which property aligns items along the cross-axis?',
    options: ['justify-content', 'align-items', 'flex-direction', 'align-content'],
    correct: 1
  },
  {
    id: 3,
    question: 'What is the output of `typeof null` in JavaScript?',
    options: ['"null"', '"undefined"', '"object"', '"boolean"'],
    correct: 2
  },
  {
    id: 4,
    question: 'Which React hook is designed to handle side effects like data fetching or DOM subscriptions?',
    options: ['useState', 'useReducer', 'useRef', 'useEffect'],
    correct: 3
  },
  {
    id: 5,
    question: 'In TypeScript, which utility type makes all properties of a type optional?',
    options: ['Required<T>', 'Partial<T>', 'Readonly<T>', 'Pick<T>'],
    correct: 1
  },
  {
    id: 6,
    question: 'Which keyword in Python is used to create an anonymous inline function?',
    options: ['def', 'async', 'lambda', 'yield'],
    correct: 2
  },
  {
    id: 7,
    question: 'What does the SQL command `GROUP BY` do?',
    options: ['Sorts data alphabetically', 'Filters rows before aggregation', 'Groups rows that have the same values into summary rows', 'Combines two tables'],
    correct: 2
  },
  {
    id: 8,
    question: 'In Node.js, which built-in module is used to handle file system operations?',
    options: ['path', 'fs', 'http', 'events'],
    correct: 1
  },
  {
    id: 9,
    question: 'What HTTP status code represents "200 OK"?',
    options: ['200', '404', '500', '301'],
    correct: 0
  },
  {
    id: 10,
    question: 'Which Git command creates a new branch and switches to it immediately?',
    options: ['git branch <name>', 'git checkout -b <name>', 'git merge <name>', 'git push origin <name>'],
    correct: 1
  }
];

const Test = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [showTabWarning, setShowTabWarning] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scoreData, setScoreData] = useState(null);

  // 10-Minute Countdown Timer
  useEffect(() => {
    if (isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted]);

  // Tab Switch & Screenshot Protection Security Controls
  useEffect(() => {
    if (isSubmitted) return;

    // Detect Tab Switch / Window Blur
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitchCount(prev => prev + 1);
        setShowTabWarning(true);
      }
    };

    // Disable Right-Click Context Menu & Key Shortcuts (PrintScreen, Ctrl+P, Ctrl+S)
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (
        e.key === 'PrintScreen' ||
        (e.ctrlKey && (e.key === 'p' || e.key === 's' || e.key === 'u' || e.key === 'c'))
      ) {
        e.preventDefault();
        alert('⚠️ Security Protection: Screenshots & copying are disabled during the examination.');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSubmitted]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (questionId, optionIdx) => {
    if (isSubmitted) return;
    setUserAnswers({ ...userAnswers, [questionId]: optionIdx });
  };

  const handleSubmitExam = () => {
    let correctCount = 0;
    quizQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correct) correctCount++;
    });

    const percentage = Math.round((correctCount / quizQuestions.length) * 100);
    const passed = percentage >= 65;

    if (passed) {
      const saved = localStorage.getItem('codelearn_unlocked_certificates');
      const certs = saved ? JSON.parse(saved) : [];
      const newCert = {
        id: 'full-access',
        title: 'Complete Full-Stack Web Developer Certification',
        credentialId: `CL-CERT-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        issuedDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        score: `${percentage}%`,
        grade: percentage >= 90 ? 'Pass with High Distinction' : 'Passed Verified Exam'
      };

      if (!certs.some(c => c.id === 'full-access')) {
        localStorage.setItem('codelearn_unlocked_certificates', JSON.stringify([...certs, newCert]));
      }
    }

    setScoreData({
      correct: correctCount,
      total: quizQuestions.length,
      percentage,
      passed
    });
    setIsSubmitted(true);
  };

  const currentQ = quizQuestions[currentIdx];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans select-none selection:bg-none">
      
      {/* Security Proctored Header */}
      <header className="sticky top-0 z-30 bg-slate-900 border-b border-slate-800 px-6 py-3.5 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
            <FaShieldAlt />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
              Proctored Examination Mode
            </span>
            <h1 className="text-base font-bold text-white leading-tight">CodeLearn Final Assessment Test</h1>
          </div>
        </div>

        {/* Timer & Tab Warning Badge */}
        {!isSubmitted && (
          <div className="flex items-center gap-4">
            {tabSwitchCount > 0 && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold animate-pulse">
                <FaExclamationTriangle /> Tab Switches: {tabSwitchCount}/3
              </div>
            )}

            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-mono font-bold shadow-md ${
              timeLeft < 120
                ? 'bg-red-500/20 text-red-400 border-red-500/40 animate-pulse'
                : 'bg-slate-800 text-amber-400 border-slate-700'
            }`}>
              <FaClock />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
        )}
      </header>

      {/* Security Warning Modal when Tab Switch is detected */}
      {showTabWarning && !isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-slate-900 border-2 border-red-500/60 rounded-3xl max-w-md w-full p-6 text-center space-y-4 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-3xl mx-auto">
              <FaExclamationTriangle />
            </div>
            <h3 className="text-xl font-bold text-white">Security Violation Warning!</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Browser tab switch or window minimize detected (<span className="text-red-400 font-bold">{tabSwitchCount} Warning</span>). Switching tabs during proctored exams is strictly monitored and may cause automatic disqualification.
            </p>
            <button
              onClick={() => setShowTabWarning(false)}
              className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
            >
              I Understand & Return to Exam
            </button>
          </div>
        </div>
      )}

      {/* Main Exam View */}
      <main className="max-w-4xl mx-auto py-10 px-4 sm:px-6">
        
        {!isSubmitted ? (
          <div className="space-y-8">
            
            {/* Question Stepper Progress Bar */}
            <div className="bg-slate-900/80 p-6 rounded-3xl border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-400">Question {currentIdx + 1} of {quizQuestions.length}</span>
                <span className="text-emerald-400">{Object.keys(userAnswers).length} / {quizQuestions.length} Answered</span>
              </div>
              <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>

              {/* Question Number Stepper Grid */}
              <div className="flex flex-wrap gap-2 pt-2">
                {quizQuestions.map((q, idx) => {
                  const isAnswered = userAnswers[q.id] !== undefined;
                  const isCurrent = currentIdx === idx;

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIdx(idx)}
                      className={`w-9 h-9 rounded-xl font-mono text-xs font-bold transition-all ${
                        isCurrent
                          ? 'bg-emerald-500 text-slate-950 shadow-lg scale-105'
                          : isAnswered
                          ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30'
                          : 'bg-slate-950 text-slate-500 border border-slate-800 hover:text-white'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question Box */}
            <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm shrink-0">
                  Q{currentIdx + 1}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {currentQ.question}
                </h2>
              </div>

              {/* Answer Options */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((opt, oIdx) => {
                  const isSelected = userAnswers[currentQ.id] === oIdx;

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectOption(currentQ.id, oIdx)}
                      className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/60 shadow-md'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold ${
                          isSelected ? 'border-emerald-400 bg-emerald-500 text-slate-950' : 'border-slate-700 text-slate-400'
                        }`}>
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>

                      {isSelected && <FaCheck className="text-emerald-400 text-xs" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation & Submit CTA */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setCurrentIdx(prev => Math.max(prev - 1, 0))}
                disabled={currentIdx === 0}
                className="px-5 py-2.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-xl font-bold text-xs text-slate-300 disabled:opacity-40 flex items-center gap-2 cursor-pointer"
              >
                <FaArrowLeft className="text-xs" /> Previous
              </button>

              {currentIdx < quizQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentIdx(prev => Math.min(prev + 1, quizQuestions.length - 1))}
                  className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  Next Question <FaArrowRight className="text-xs" />
                </button>
              ) : (
                <button
                  onClick={handleSubmitExam}
                  className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  Submit Final Exam & Calculate Score →
                </button>
              )}
            </div>

          </div>
        ) : (
          /* SCORE RESULTS & CERTIFICATE UNLOCK SCREEN */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 p-8 rounded-3xl border border-slate-800 text-center space-y-6 shadow-2xl"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-4xl mx-auto shadow-xl">
              <FaAward />
            </div>

            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                Examination Result: {scoreData.passed ? 'PASSED 🎓' : 'FAILED ❌'}
              </span>
              <h2 className="text-3xl font-black text-white mt-3">Final Exam Score Summary</h2>
              <p className="text-xs text-slate-400 mt-1">
                You scored <span className="text-emerald-400 font-bold">{scoreData.correct} out of {scoreData.total}</span> questions correctly ({scoreData.percentage}%).
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto pt-2">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <p className="text-[10px] text-slate-500 font-bold uppercase">Correct Answers</p>
                <p className="text-2xl font-black text-emerald-400">{scoreData.correct} / 10</p>
              </div>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <p className="text-[10px] text-slate-500 font-bold uppercase">Passing Score</p>
                <p className="text-2xl font-black text-amber-400">70% Required</p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/my-certifications">
                <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-md transition-all cursor-pointer">
                  View My Official Certificates →
                </button>
              </Link>
              <Link to="/certification">
                <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-all cursor-pointer">
                  Browse Certification Catalog
                </button>
              </Link>
            </div>
          </motion.div>
        )}

      </main>

    </div>
  );
};

export default Test;
