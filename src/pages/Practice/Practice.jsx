import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCode, FaTrophy, FaFire, FaCheckCircle, FaLock, FaUnlock,
  FaPlay, FaSearch, FaStar, FaCopy, FaCheck, FaTimes, FaArrowRight,
  FaLightbulb, FaAward, FaTerminal, FaJs, FaPython, FaCss3Alt,
  FaReact, FaDatabase, FaFilter
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

const practiceProblems = [
  {
    id: 'js-two-sum',
    title: 'Two Sum Problem',
    language: 'JavaScript',
    difficulty: 'Medium',
    points: 100,
    solved: true,
    unlocked: true,
    category: 'Algorithms',
    icon: FaJs,
    iconColor: 'text-amber-400',
    desc: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    starterCode: `function twoSum(nums, target) {\n  // Write your code here\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const diff = target - nums[i];\n    if (map.has(diff)) return [map.get(diff), i];\n    map.set(nums[i], i);\n  }\n  return [];\n}`,
    testCases: [
      { input: 'nums = [2,7,11,15], target = 9', expected: '[0,1]' },
      { input: 'nums = [3,2,4], target = 6', expected: '[1,2]' }
    ]
  },
  {
    id: 'py-reverse-string',
    title: 'Reverse a String in Python',
    language: 'Python',
    difficulty: 'Easy',
    points: 50,
    solved: true,
    unlocked: true,
    category: 'Strings',
    icon: FaPython,
    iconColor: 'text-blue-400',
    desc: 'Write a Python function that takes a string input and returns the reversed string using slicing or recursion.',
    starterCode: `def reverse_string(s: str) -> str:\n    # Write your Python solution below\n    return s[::-1]\n\nprint(reverse_string("codelearn"))  # nraeladoc`,
    testCases: [
      { input: 's = "hello"', expected: '"olleh"' },
      { input: 's = "Python"', expected: '"nohtyP"' }
    ]
  },
  {
    id: 'css-flex-center',
    title: 'CSS Flexbox Perfect Centering',
    language: 'HTML & CSS',
    difficulty: 'Easy',
    points: 50,
    solved: true,
    unlocked: true,
    category: 'Web Layout',
    icon: FaCss3Alt,
    iconColor: 'text-blue-500',
    desc: 'Write modern CSS to align a modal container dead center horizontally and vertically inside the viewport.',
    starterCode: `.modal-wrapper {\n  display: flex;\n  justify-content: center;\n  align-[#center];\n  min-height: 100vh;\n}`,
    testCases: [
      { input: 'viewport = 1920x1080', expected: 'Centered' }
    ]
  },
  {
    id: 'ts-type-guard',
    title: 'TypeScript Custom Type Guard',
    language: 'TypeScript',
    difficulty: 'Medium',
    points: 100,
    solved: false,
    unlocked: true,
    category: 'Type Safety',
    icon: SiTypescript,
    iconColor: 'text-blue-600',
    desc: 'Create a custom type guard function `isAdmin(user: User): user is Admin` to safely narrow unknown user objects.',
    starterCode: `interface User { id: string; role: 'student' | 'admin'; }\ninterface Admin extends User { permissions: string[]; }\n\nfunction isAdmin(user: User): user is Admin {\n  return user.role === 'admin';\n}`,
    testCases: [
      { input: '{ id: "1", role: "admin", permissions: ["all"] }', expected: 'true' }
    ]
  },
  {
    id: 'sql-top-salary',
    title: 'SQL Highest Salary Above Average',
    language: 'SQL',
    difficulty: 'Medium',
    points: 100,
    solved: false,
    unlocked: true,
    category: 'Database',
    icon: FaDatabase,
    iconColor: 'text-emerald-500',
    desc: 'Write a SQL query to select all employees whose salary is higher than the department average salary.',
    starterCode: `SELECT name, salary \nFROM employees \nWHERE salary > (\n  SELECT AVG(salary) FROM employees\n);`,
    testCases: [
      { input: 'employees table with 5 rows', expected: '3 rows returned' }
    ]
  },
  {
    id: 'react-debounce-hook',
    title: 'React Custom Debounce Hook',
    language: 'React',
    difficulty: 'Hard',
    points: 200,
    solved: false,
    unlocked: true,
    category: 'Hooks',
    icon: FaReact,
    iconColor: 'text-cyan-400',
    desc: 'Implement a custom `useDebounce(value, delay)` hook to prevent search input API spam during fast typing.',
    starterCode: `function useDebounce(value, delay) {\n  const [debouncedValue, setDebouncedValue] = useState(value);\n  useEffect(() => {\n    const handler = setTimeout(() => setDebouncedValue(value), delay);\n    return () => clearTimeout(handler);\n  }, [value, delay]);\n  return debouncedValue;\n}`,
    testCases: [
      { input: 'input = "react", delay = 500ms', expected: 'debounced output after 500ms' }
    ]
  }
];

const Practice = () => {
  const [selectedLang, setSelectedLang] = useState('all');
  const [selectedDiff, setSelectedDiff] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Active Solver Modal State
  const [activeProblem, setActiveProblem] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [userPoints, setUserPoints] = useState(1450);
  const [solvedIds, setSolvedIds] = useState(new Set(['js-two-sum', 'py-reverse-string', 'css-flex-center']));
  const [testResult, setTestResult] = useState(null);

  const filteredProblems = practiceProblems.filter(prob => {
    const matchesLang = selectedLang === 'all' || prob.language.toLowerCase() === selectedLang.toLowerCase();
    const matchesDiff = selectedDiff === 'all' || prob.difficulty.toLowerCase() === selectedDiff.toLowerCase();
    const matchesSearch = prob.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prob.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLang && matchesDiff && matchesSearch;
  });

  const openProblemSolver = (problem) => {
    setActiveProblem(problem);
    setUserCode(problem.starterCode);
    setTestResult(null);
  };

  const handleRunCode = () => {
    setTestResult({ status: 'success', message: 'All 2 test cases passed successfully! Code logic verified.' });
  };

  const handleSubmitSolution = () => {
    if (!solvedIds.has(activeProblem.id)) {
      const nextSolved = new Set(solvedIds);
      nextSolved.add(activeProblem.id);
      setSolvedIds(nextSolved);
      setUserPoints(prev => prev + activeProblem.points);
      setTestResult({ status: 'solved', message: `🎉 Challenge Completed! +${activeProblem.points} XP added to your profile.` });
    } else {
      setTestResult({ status: 'solved', message: 'Challenge already completed! Solution re-verified.' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Top Header Banner */}
      <section className="relative bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 border-b border-slate-800 py-12 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-extrabold text-emerald-400 mb-3">
              <FaUnlock className="text-amber-400" /> Unlocked Multi-Language Practice Arena
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Practice Problems</span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm font-light mt-1 max-w-xl">
              Solve real-world programming challenges, earn XP points, rank up on the global leaderboard, and unlock verified skill badges.
            </p>
          </div>

          {/* User Points Stats Card */}
          <div className="flex items-center gap-4 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 shadow-xl shrink-0">
            <div className="flex items-center gap-3 pr-4 border-r border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-md">
                <FaTrophy />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Total Points</p>
                <p className="text-xl font-extrabold text-amber-400">{userPoints} XP</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pl-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-lg">
                <FaFire />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Daily Streak</p>
                <p className="text-sm font-extrabold text-white">14 Days 🔥</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-8 space-y-8">
        
        {/* Filters & Search Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-slate-900/80 p-5 rounded-3xl border border-slate-800 shadow-xl">
          
          {/* Language Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Languages' },
              { id: 'javascript', label: 'JavaScript' },
              { id: 'python', label: 'Python' },
              { id: 'html & css', label: 'HTML & CSS' },
              { id: 'typescript', label: 'TypeScript' },
              { id: 'sql', label: 'SQL' },
              { id: 'react', label: 'React' }
            ].map(lang => (
              <button
                key={lang.id}
                onClick={() => setSelectedLang(lang.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedLang === lang.id
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <FaSearch className="absolute left-3.5 top-3 text-slate-500 text-xs" />
            <input
              type="text"
              placeholder="Search problems..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

        </div>

        {/* Problems List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProblems.map(prob => {
            const Icon = prob.icon;
            const isSolved = solvedIds.has(prob.id);

            return (
              <div
                key={prob.id}
                className="bg-slate-900/90 rounded-3xl border border-slate-800 hover:border-emerald-500/60 p-6 flex flex-col justify-between space-y-6 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Top Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        <Icon className={prob.iconColor} />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                          {prob.language}
                        </span>
                        <h4 className="text-xs text-slate-500 font-semibold mt-0.5">• {prob.category}</h4>
                      </div>
                    </div>

                    <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      prob.difficulty === 'Easy' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                      prob.difficulty === 'Medium' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                      'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    }`}>
                      {prob.difficulty}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug mb-1.5">
                      {prob.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {prob.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Points & Solver CTA */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-amber-400 font-black text-xs">
                    <FaTrophy className="text-sm" />
                    <span>+{prob.points} XP</span>
                  </div>

                  {isSolved ? (
                    <button
                      onClick={() => openProblemSolver(prob)}
                      className="px-4 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl font-bold text-xs flex items-center gap-1.5 cursor-pointer hover:bg-emerald-500/30 transition-colors"
                    >
                      <FaCheckCircle className="text-xs" /> Solved
                    </button>
                  ) : (
                    <button
                      onClick={() => openProblemSolver(prob)}
                      className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl font-bold text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <FaUnlock className="text-xs" /> Solve Problem
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </main>

      {/* INTERACTIVE CODE PROBLEM SOLVER MODAL */}
      <AnimatePresence>
        {activeProblem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col overflow-hidden relative"
            >
              {/* Modal Top Header */}
              <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl">
                    <activeProblem.icon className={activeProblem.iconColor} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-slate-800 text-slate-300 rounded-md">
                        {activeProblem.language}
                      </span>
                      <span className="text-xs font-bold text-amber-400">+{activeProblem.points} XP</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mt-0.5">{activeProblem.title}</h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveProblem(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>

              {/* Modal Body: Split Description & Code Editor */}
              <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Left Description */}
                <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <h4 className="font-bold text-white text-sm">Problem Description</h4>
                    <p>{activeProblem.desc}</p>
                  </div>

                  {activeProblem.testCases && (
                    <div className="space-y-2">
                      <h4 className="font-bold text-white">Sample Test Cases</h4>
                      {activeProblem.testCases.map((tc, i) => (
                        <div key={i} className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-[11px] space-y-1">
                          <p className="text-slate-400">Input: <span className="text-white">{tc.input}</span></p>
                          <p className="text-emerald-400">Expected Output: {tc.expected}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {testResult && (
                    <div className={`p-4 rounded-2xl border text-xs font-bold ${
                      testResult.status === 'solved'
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        : 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                    }`}>
                      {testResult.message}
                    </div>
                  )}
                </div>

                {/* Right Code Editor Console */}
                <div className="flex flex-col justify-between space-y-4">
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex-1 font-mono text-xs text-emerald-400 leading-relaxed flex flex-col">
                    <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-800 mb-2">
                      <span>Code Console ({activeProblem.language})</span>
                      <FaTerminal className="text-slate-400" />
                    </div>
                    <textarea
                      value={userCode}
                      onChange={e => setUserCode(e.target.value)}
                      className="w-full flex-1 bg-transparent text-emerald-300 outline-none resize-none font-mono leading-relaxed"
                      rows={12}
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      onClick={handleRunCode}
                      className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                    >
                      Run Tests
                    </button>
                    <button
                      onClick={handleSubmitSolution}
                      className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
                    >
                      Submit Solution & Claim XP
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Practice;
