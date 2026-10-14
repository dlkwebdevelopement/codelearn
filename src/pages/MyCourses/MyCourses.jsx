import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBook, FaPlay, FaPause, FaCheckCircle, FaClock, FaArrowRight,
  FaAward, FaSearch, FaFire, FaTimes, FaBars, FaBell,
  FaChartLine, FaLaptopCode, FaCertificate, FaTrophy,
  FaCog, FaComments, FaRocket, FaCrown, FaReact, FaPython,
  FaCss3Alt, FaBookmark, FaStar, FaVideo, FaDownload, FaLock,
  FaUnlock, FaCheck
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import Button from '../../components/ui/Button';
import logo from '../../assets/logo.png';

const MyCourses = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Active Player & Certificate State
  const [activeCoursePlayer, setActiveCoursePlayer] = useState(null);
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const [completedLessons, setCompletedLessons] = useState(new Set(['lsn-1', 'lsn-2']));
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [playerTab, setPlayerTab] = useState('video'); // 'video', 'test'
  
  // Test & Unlocked Certificates State
  const [testModalCourse, setTestModalCourse] = useState(null);
  const [unlockedCertificates, setUnlockedCertificates] = useState(new Set(['tailwind-ui']));
  const [showCertModal, setShowCertModal] = useState(false);
  const [activeCertData, setActiveCertData] = useState(null);
  const [testAnswered, setTestAnswered] = useState(false);

  // Enrolled Courses Data
  const courses = [
    {
      id: 'react-mastery',
      title: 'Full-Stack React & Node.js Mastery',
      category: 'Web Dev',
      instructor: 'Dr. Angela Yu',
      progress: 78,
      completedModules: 14,
      totalModules: 18,
      nextLesson: 'Module 15: JWT Authentication & Refresh Tokens',
      timeLeft: '2h 15m remaining',
      icon: FaReact,
      color: 'from-cyan-600 to-blue-600',
      status: 'in-progress',
      rating: 4.9,
      certUnlocked: false
    },
    {
      id: 'typescript-pro',
      title: 'Advanced TypeScript & Design Patterns',
      category: 'Programming',
      instructor: 'Max Schwarzmüller',
      progress: 45,
      completedModules: 9,
      totalModules: 20,
      nextLesson: 'Module 10: Generics & Conditional Types',
      timeLeft: '5h 40m remaining',
      icon: SiTypescript,
      color: 'from-blue-600 to-indigo-700',
      status: 'in-progress',
      rating: 4.8,
      certUnlocked: false
    },
    {
      id: 'python-dsa',
      title: 'Python Data Structures & Algorithms',
      category: 'Computer Science',
      instructor: 'Colt Steele',
      progress: 92,
      completedModules: 23,
      totalModules: 25,
      nextLesson: 'Module 24: Graph Algorithms - Dijkstra Search',
      timeLeft: '45m remaining',
      icon: FaPython,
      color: 'from-emerald-600 to-teal-700',
      status: 'in-progress',
      rating: 4.9,
      certUnlocked: false
    },
    {
      id: 'tailwind-ui',
      title: 'Modern UI/UX Design with Tailwind CSS',
      category: 'Design',
      instructor: 'Adam Wathan',
      progress: 100,
      completedModules: 20,
      totalModules: 20,
      nextLesson: 'Course Completed! Certificate Issued.',
      timeLeft: 'Completed',
      icon: FaCss3Alt,
      color: 'from-purple-600 to-pink-600',
      status: 'completed',
      rating: 5.0,
      certUnlocked: true
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || 
                          (activeFilter === 'in-progress' && course.status === 'in-progress') ||
                          (activeFilter === 'completed' && course.status === 'completed');
    return matchesSearch && matchesFilter;
  });

  const videoLessons = [
    { id: 'lsn-1', title: '1. Course Architecture & Environment Setup', duration: '10:45' },
    { id: 'lsn-2', title: '2. Core Concepts & State Management', duration: '14:20' },
    { id: 'lsn-3', title: '3. API Integration & Error Handling', duration: '18:15' },
    { id: 'lsn-4', title: '4. Final Assessment Test & Certificate Unlock', duration: '25:00' }
  ];

  const currentLesson = videoLessons[currentVideoIdx];

  const handleTestPass = (course) => {
    const nextUnlocks = new Set(unlockedCertificates);
    nextUnlocks.add(course.id);
    setUnlockedCertificates(nextUnlocks);
    setTestModalCourse(null);
    setTestAnswered(false);
    setActiveCertData(course);
    setShowCertModal(true);
  };

  const viewCertificate = (course) => {
    setActiveCertData(course);
    setShowCertModal(true);
  };

  return (
    <div className="p-4 sm:p-8 space-y-8 max-w-full font-sans pb-16">
      <div className="max-w-6xl mx-auto space-y-10">
            
            {/* Header Banner */}
            <div className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-emerald-200 mb-3 border border-white/10">
                    <FaBook className="text-amber-400" />
                    <span>My Enrolled Courses & Certifications</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">Student Learning & Certification</h1>
                  <p className="text-emerald-100/90 text-sm sm:text-base font-light">
                    Watch video chapters, complete assessment tests, and unlock your official course certificates.
                  </p>
                </div>
              </div>
            </div>

            {/* Enrolled Courses Cards Grid */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FaBook className="text-emerald-600" /> Enrolled Subjects & Video Player
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCourses.map(course => {
                  const CourseIcon = course.icon;
                  const isCompleted = course.status === 'completed';

                  return (
                    <div 
                      key={course.id}
                      className="bg-white rounded-3xl border border-gray-200/80 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between space-y-6 group"
                    >
                      <div className="space-y-4">
                        {/* Top Meta */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-2xl shadow-md shrink-0 group-hover:scale-105 transition-transform`}>
                              <CourseIcon />
                            </div>
                            <div>
                              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                                {course.category}
                              </span>
                              <h4 className="text-xs text-gray-400 font-semibold mt-1">• {course.instructor}</h4>
                            </div>
                          </div>

                          {isCompleted ? (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                              <FaCheckCircle className="text-emerald-600" /> Finished
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                              <FaClock className="text-amber-500" /> Active
                            </span>
                          )}
                        </div>

                        {/* Course Title */}
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug">
                          {course.title}
                        </h3>

                        <div className="p-3 rounded-2xl bg-slate-50 border border-gray-100">
                          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Active Video Chapter</p>
                          <p className="text-xs font-bold text-gray-800 flex items-center gap-1.5 truncate mt-0.5">
                            <FaPlay className="text-[10px] text-emerald-600 shrink-0" />
                            <span className="truncate">{course.nextLesson}</span>
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar & Actions */}
                      <div className="space-y-4 pt-2 border-t border-gray-100">
                        <div>
                          <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                            <span className="text-gray-700">{course.progress}% Completed</span>
                            <span className="text-gray-400">{course.completedModules}/{course.totalModules} Chapters</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${
                                isCompleted ? 'bg-emerald-500' : 'bg-gradient-to-r from-emerald-500 to-teal-400'
                              }`}
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="text-xs text-gray-400 font-semibold flex items-center gap-1">
                            <FaClock className="text-[11px]" /> {course.timeLeft}
                          </span>

                          <button
                            onClick={() => setActiveCoursePlayer(course)}
                            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2 cursor-pointer"
                          >
                            <FaPlay className="text-[10px]" /> Open Video Player
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* DEDICATED CERTIFICATIONS & TEST UNLOCK SECTION */}
            <div className="space-y-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
                    <FaAward className="text-amber-500" /> Course Certifications & Test Assessment
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">
                    Complete the final assessment test for any subject to instantly unlock your official verified certificate.
                  </p>
                </div>

                <Link to="/certification">
                  <span className="text-xs font-bold text-emerald-700 hover:underline">View All Certificates Portal →</span>
                </Link>
              </div>

              {/* Certificates Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map(course => {
                  const isUnlocked = unlockedCertificates.has(course.id);
                  const CourseIcon = course.icon;

                  return (
                    <div
                      key={course.id}
                      className={`p-6 rounded-3xl border transition-all space-y-4 shadow-xs ${
                        isUnlocked
                          ? 'bg-gradient-to-br from-amber-50/60 via-white to-amber-100/30 border-amber-300 shadow-amber-500/10'
                          : 'bg-white border-gray-200/80'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-xl shadow-sm`}>
                            <CourseIcon />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-gray-900">{course.title}</h4>
                            <p className="text-xs text-gray-400 font-medium">Instructor: {course.instructor}</p>
                          </div>
                        </div>

                        {isUnlocked ? (
                          <span className="inline-flex items-center gap-1 text-xs font-extrabold px-3 py-1 bg-amber-100 text-amber-800 rounded-full border border-amber-300">
                            <FaCrown className="text-amber-500" /> Unlocked 🎓
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                            <FaLock className="text-xs" /> Test Required
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
                        <span className="text-gray-500 font-semibold">
                          {isUnlocked ? 'Assessment Passed (100%)' : `Course Progress: ${course.progress}%`}
                        </span>

                        {isUnlocked ? (
                          <button
                            onClick={() => viewCertificate(course)}
                            className="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-950 font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 cursor-pointer"
                          >
                            <FaAward className="text-xs" /> View Certificate
                          </button>
                        ) : (
                          <Link to="/test">
                            <button
                              className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 cursor-pointer"
                            >
                              <FaUnlock className="text-xs" /> Take Final Test & Unlock
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

      {/* INTERACTIVE FINAL ASSESSMENT TEST MODAL */}
      {testModalCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-gray-200 relative space-y-6">
            <button
              onClick={() => setTestModalCourse(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:bg-gray-100"
            >
              <FaTimes />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl font-bold">
                <FaAward />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                  Certificate Test Assessment
                </span>
                <h3 className="text-lg font-bold text-gray-900 leading-snug mt-1">
                  {testModalCourse.title}
                </h3>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleTestPass(testModalCourse); }} className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-gray-200 space-y-2">
                <p className="text-xs font-bold text-gray-900">1. What is the core purpose of completing this course test?</p>
                <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 cursor-pointer">
                  <input type="radio" name="testQ" required defaultChecked className="text-emerald-600" />
                  <span>Verify skill competence & unlock official certificate</span>
                </label>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-gray-200 space-y-2">
                <p className="text-xs font-bold text-gray-900">2. Are certificates verified with a unique ID?</p>
                <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 cursor-pointer">
                  <input type="radio" name="testQ2" required defaultChecked className="text-emerald-600" />
                  <span>Yes, fully verified and shareable</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-lg transition-all cursor-pointer"
              >
                Submit Test & Unlock Official Certificate 🎉
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CERTIFICATE MODAL */}
      {showCertModal && activeCertData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-white text-gray-900 rounded-3xl max-w-2xl w-full p-8 border-4 border-amber-300 relative space-y-4 text-center">
            <button onClick={() => setShowCertModal(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600">
              <FaTimes />
            </button>
            <FaCrown className="text-amber-400 text-4xl mx-auto" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
              Official CodeLearn Certificate
            </span>
            <h2 className="text-3xl font-black font-serif">Certificate of Completion</h2>
            <p className="text-xs text-gray-500">This certifies that</p>
            <h3 className="text-2xl font-bold text-emerald-800 underline">Jane Doe</h3>
            <p className="text-xs text-gray-600 max-w-md mx-auto">
              has successfully completed all chapters, video lessons, and final assessment tests for {activeCertData.title}
            </p>
            <p className="text-[10px] text-gray-400 font-mono">Certificate ID: CL-2026-9842X • Issued July 22, 2026</p>
            <div className="pt-2 flex items-center justify-center gap-3">
              <button className="px-6 py-2.5 bg-emerald-600 text-white font-bold text-xs rounded-xl flex items-center gap-1.5">
                <FaDownload /> Download PDF
              </button>
              <Link to="/certification">
                <button className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs rounded-xl">
                  Go to Certification Portal
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* FULL SCREEN ENROLLED STUDENT VIDEO PLAYER */}
      {activeCoursePlayer && (
        <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col overflow-hidden">
          
          {/* Player Top Navbar */}
          <header className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveCoursePlayer(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                  Enrolled Learning Player
                </span>
                <h3 className="text-base font-bold text-white leading-tight mt-0.5">{activeCoursePlayer.title}</h3>
              </div>
            </div>
          </header>

          {/* Player Body: Video Screen + Chapter Sidebar */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            
            {/* Central Video Console */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="relative bg-slate-900 rounded-3xl aspect-video overflow-hidden border border-slate-800 shadow-2xl flex flex-col justify-between p-6">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="text-emerald-400 font-bold flex items-center gap-1"><FaVideo /> {currentLesson.title}</span>
                  <span className="bg-slate-800 px-2 py-0.5 rounded-md text-emerald-400 font-bold">1080p HD</span>
                </div>

                <div className="self-center flex flex-col items-center gap-3">
                  <button
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="w-20 h-20 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center text-2xl shadow-xl hover:scale-110 transition-transform cursor-pointer"
                  >
                    {isVideoPlaying ? <FaPause /> : <FaPlay className="ml-1" />}
                  </button>
                  <p className="text-xs font-bold text-emerald-200">
                    {isVideoPlaying ? 'Playing Video Chapter...' : 'Click to Play Video Chapter'}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full bg-emerald-500 transition-all duration-300 ${isVideoPlaying ? 'w-3/4' : 'w-1/4'}`} />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>04:12</span>
                    <span>{currentLesson.duration}</span>
                  </div>
                </div>
              </div>

              {/* Video Info & Completion Action */}
              <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{currentLesson.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">Instructor: {activeCoursePlayer.instructor}</p>
                </div>
                <button
                  onClick={() => setCompletedLessons(new Set([...completedLessons, currentLesson.id]))}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                    completedLessons.has(currentLesson.id)
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md'
                  }`}
                >
                  {completedLessons.has(currentLesson.id) ? '✓ Chapter Video Completed' : 'Mark Chapter Completed'}
                </button>
              </div>
            </div>

            {/* RIGHT SIDEBAR: CHAPTER VIDEO LIST */}
            <div className="w-full lg:w-80 bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800 p-5 space-y-4 overflow-y-auto shrink-0">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h4 className="font-extrabold text-xs uppercase tracking-wider text-white flex items-center gap-2">
                  <FaVideo className="text-emerald-400" /> Chapter Video List
                </h4>
                <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                  4 Videos
                </span>
              </div>

              <div className="space-y-2.5">
                {videoLessons.map((v, idx) => {
                  const isActive = currentVideoIdx === idx;
                  const isDone = completedLessons.has(v.id);

                  return (
                    <button
                      key={v.id}
                      onClick={() => { setCurrentVideoIdx(idx); setIsVideoPlaying(true); }}
                      className={`w-full text-left p-3.5 rounded-2xl border text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-lg'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                          Video Chapter {idx + 1}
                        </span>
                        <span className="font-mono text-[10px] text-slate-500">{v.duration}</span>
                      </div>

                      <p className={`text-xs font-bold leading-snug ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {v.title}
                      </p>

                      <div className="mt-2 flex items-center justify-between text-[10px] pt-1">
                        {isDone ? (
                          <span className="text-emerald-400 font-bold flex items-center gap-1">
                            <FaCheckCircle className="text-[10px]" /> Completed
                          </span>
                        ) : isActive ? (
                          <span className="text-emerald-400 font-bold flex items-center gap-1">
                            <FaPlay className="text-[9px]" /> Now Playing
                          </span>
                        ) : (
                          <span className="text-slate-500">Click to watch</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default MyCourses;
