import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FaStar, FaUsers, FaClock, FaBookOpen, FaBook, FaCheckCircle,
  FaPlay, FaArrowLeft, FaChevronDown, FaGraduationCap,
  FaAward, FaUser, FaLaptopCode, FaTimes, FaGlobe,
  FaFileDownload, FaShieldAlt, FaRocket
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const courseDetailsMap = {
  html: {
    id: 'html',
    title: 'HTML5 & Modern Web Development Fundamentals',
    subtitle: 'Master structural markup, semantic tags, forms, accessibility, and modern SEO best practices from scratch.',
    instructor: 'Sarah Jenkins',
    instructorTitle: 'Senior Frontend Architect @ TechCorp',
    instructorAvatar: 'SJ',
    instructorRating: 4.9,
    instructorStudents: '45,200',
    instructorCourses: 8,
    rating: 4.9,
    reviewsCount: '1,240',
    students: '12,450',
    duration: '5 Hours',
    lessons: 50,
    level: 'Beginner',
    tag: 'Web Dev',
    lastUpdated: 'July 2026',
    outcomes: [
      'Understand full HTML5 page architecture and semantic element hierarchy',
      'Build accessible web forms with client-side validation and pattern attributes',
      'Optimize web pages for search engine ranking (SEO) and social sharing cards',
      'Integrate HTML5 audio, video, SVG graphics, and responsive picture tags',
      'Implement WAI-ARIA accessibility roles for screen reader compatibility',
      'Structure clean, production-ready frontend code ready for CSS & JS'
    ],
    prerequisites: [
      'No prior programming or web development experience required!',
      'A computer (Windows, Mac, or Linux) with an internet connection',
      'Any standard web browser (Chrome, Firefox, Edge, Safari)'
    ],
    modules: [
      {
        title: 'Module 1: Introduction to Web Architecture & HTML5',
        count: '3 Lessons • 37 mins',
        lessons: [
          { title: '1.1 Web Fundamentals & How Browsers Render HTML', time: '10 mins', preview: true },
          { title: '1.2 Document Structure: <!DOCTYPE>, <html>, <head>, <body>', time: '12 mins', preview: false },
          { title: '1.3 Text Formatting & Heading Hierarchy (H1-H6)', time: '15 mins', preview: false }
        ]
      },
      {
        title: 'Module 2: Semantic HTML & Accessibility (a11y)',
        count: '3 Lessons • 48 mins',
        lessons: [
          { title: '2.1 Why Semantic Elements Matter (<header>, <nav>, <main>)', time: '14 mins', preview: true },
          { title: '2.2 ARIA Roles, Screen Readers & Keyboard Focus', time: '18 mins', preview: false },
          { title: '2.3 Images, Alt Attributes & Responsive Picture Tags', time: '16 mins', preview: false }
        ]
      },
      {
        title: 'Module 3: Advanced Web Forms & Final Certification',
        count: '3 Lessons • 60 mins',
        lessons: [
          { title: '3.1 Form Elements, Inputs, Selects & Textareas', time: '20 mins', preview: false },
          { title: '3.2 HTML5 Input Types, Pattern Attributes & Validation', time: '15 mins', preview: false },
          { title: '3.3 Final Assessment Test & Certificate Unlock', time: '25 mins', preview: false }
        ]
      }
    ],
    reviews: [
      {
        id: 1,
        name: 'Michael Chang',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Hands down the best HTML course! Clear explanations, modern semantic standards, and great practical examples.'
      },
      {
        id: 2,
        name: 'Emily Watson',
        rating: 5,
        date: '1 month ago',
        comment: 'Loved the accessibility and SEO tips! Helped me structure my portfolio code cleanly for my job interviews.'
      }
    ]
  }
};

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = courseDetailsMap[courseId] || courseDetailsMap.html;

  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'syllabus', 'instructor', 'reviews'
  const [expandedModules, setExpandedModules] = useState(new Set([0]));
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [enrollForm, setEnrollForm] = useState({ name: 'Jane Doe', email: 'jane.doe@example.com' });

  const toggleModule = (idx) => {
    const next = new Set(expandedModules);
    if (next.has(idx)) next.delete(idx);
    else next.add(idx);
    setExpandedModules(next);
  };

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    const saved = localStorage.getItem('codelearn_enrolled_ids');
    const existing = saved ? JSON.parse(saved) : ['html'];
    const updated = [...new Set([...existing, course.id])];
    localStorage.setItem('codelearn_enrolled_ids', JSON.stringify(updated));
    setShowEnrollModal(false);
    window.location.href = '/my-courses';
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800 selection:bg-emerald-500 selection:text-white">
      
      {/* Top Breadcrumb Navigation */}
      <header className="bg-white border-b border-gray-200/80 px-6 py-3.5 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/courses" className="flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-emerald-600 transition-colors">
            <FaArrowLeft className="text-xs" /> Back to Course Catalog
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-gray-400 hidden sm:inline">Last updated {course.lastUpdated}</span>
            <button
              onClick={() => setShowEnrollModal(true)}
              className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              Enroll Free
            </button>
          </div>
        </div>
      </header>

      {/* Hero Course Header (Modern Dark Glassmorphic Design) */}
      <section className="relative bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-950 text-white py-16 px-6 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start relative z-10">
          
          {/* Left Hero Header Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Badges & Category */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                {course.tag} • {course.level}
              </span>
              <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                <FaStar className="text-amber-400" /> {course.rating} ({course.reviewsCount} Ratings)
              </span>
            </div>

            {/* Course Title & Subtitle */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {course.title}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              {course.subtitle}
            </p>

            {/* Quick Metadata Stats */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300 font-medium border-t border-slate-800/80">
              <span className="flex items-center gap-2"><FaUsers className="text-emerald-400 text-sm" /> <strong>{course.students}</strong> Students</span>
              <span className="flex items-center gap-2"><FaClock className="text-emerald-400 text-sm" /> <strong>{course.duration}</strong> Video Content</span>
              <span className="flex items-center gap-2"><FaBookOpen className="text-emerald-400 text-sm" /> <strong>{course.lessons}</strong> Lessons</span>
              <span className="flex items-center gap-2"><FaGlobe className="text-emerald-400 text-sm" /> English [CC]</span>
              <span className="flex items-center gap-2"><FaAward className="text-amber-400 text-sm" /> Certificate Included</span>
            </div>

            {/* Instructor Quick Info */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 font-black flex items-center justify-center text-sm shadow-md">
                {course.instructorAvatar}
              </div>
              <div className="text-xs">
                <p className="text-slate-400">Created by</p>
                <p className="text-white font-bold text-sm">{course.instructor}</p>
              </div>
            </div>

          </div>

          {/* Floating Right Card (Desktop Preview & Enroll) */}
          <div className="lg:col-span-1 bg-white text-gray-900 rounded-3xl p-6 sm:p-7 shadow-2xl border border-gray-200/80 space-y-6 lg:sticky lg:top-24">
            
            {/* Video Preview Thumbnail */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-video shadow-md group flex flex-col justify-between p-4">
              <div className="flex items-center justify-between text-[10px] text-emerald-400 font-mono font-bold z-10">
                <span className="bg-black/60 px-2.5 py-1 rounded-md border border-white/10">FREE PREVIEW</span>
                <span>HD 1080p</span>
              </div>

              <button
                onClick={() => setShowEnrollModal(true)}
                className="self-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center text-xl shadow-xl hover:scale-110 transition-transform cursor-pointer z-10"
              >
                <FaPlay className="ml-1 text-base" />
              </button>

              <p className="text-center text-xs font-bold text-emerald-200 z-10">Preview Course Intro</p>
            </div>

            {/* Price Tag */}
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-gray-900">FREE</span>
                <span className="text-sm text-gray-400 line-through font-semibold">$99.99</span>
                <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">100% OFF</span>
              </div>
              <p className="text-xs text-gray-400 font-medium mt-1">Full Lifetime Access • No Subscription Required</p>
            </div>

            {/* Primary Enroll CTA */}
            <button
              onClick={() => setShowEnrollModal(true)}
              className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-emerald-600/25 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaRocket className="text-amber-400 text-base" />
              <span>Enroll Now & Start Course</span>
            </button>

            {/* Key Features Checklist */}
            <div className="space-y-2.5 pt-2 border-t border-gray-100 text-xs font-semibold text-gray-700">
              <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">Course Includes:</p>
              <div className="flex items-center gap-2.5"><FaPlay className="text-emerald-600 text-xs" /> 5 Hours HD On-Demand Video</div>
              <div className="flex items-center gap-2.5"><FaLaptopCode className="text-emerald-600 text-xs" /> Interactive Code Exercises</div>
              <div className="flex items-center gap-2.5"><FaFileDownload className="text-emerald-600 text-xs" /> Downloadable Cheat Sheets & Notes</div>
              <div className="flex items-center gap-2.5"><FaAward className="text-amber-500 text-xs" /> Verified Certificate of Completion</div>
              <div className="flex items-center gap-2.5"><FaShieldAlt className="text-emerald-600 text-xs" /> Lifetime Unlimited Access</div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Details Body (Tabs & Content Layout) */}
      <main className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        <div className="lg:col-span-2 space-y-8">
          
          {/* Navigation Tabs Header */}
          <div className="flex gap-2 border-b border-gray-200 overflow-x-auto pb-0.5">
            {[
              { id: 'overview', label: 'Overview', icon: FaBookOpen },
              { id: 'syllabus', label: 'Syllabus & Modules', icon: FaBook },
              { id: 'instructor', label: 'Instructor', icon: FaUser },
              { id: 'reviews', label: 'Student Reviews', icon: FaStar }
            ].map(tab => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all cursor-pointer
                    ${activeTab === tab.id
                      ? 'border-emerald-600 text-emerald-800 bg-emerald-50/60 rounded-t-2xl font-extrabold'
                      : 'border-transparent text-gray-500 hover:text-gray-900'}
                  `}
                >
                  <TabIcon className="text-sm" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* What You Will Learn Grid */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
                <h2 className="text-xl font-extrabold text-gray-900">What You Will Learn</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {course.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-gray-700">
                      <FaCheckCircle className="text-emerald-600 text-base mt-0.5 shrink-0" />
                      <span className="leading-snug">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements & Prerequisites */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
                <h2 className="text-xl font-extrabold text-gray-900">Requirements & Prerequisites</h2>
                <div className="space-y-2.5">
                  {course.prerequisites.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: SYLLABUS & MODULES */}
          {activeTab === 'syllabus' && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <h2 className="text-xl font-extrabold text-gray-900">Course Curriculum & Video Chapters</h2>
                  <p className="text-xs text-gray-500 mt-1">{course.modules.length} Modules • 9 Video Lessons • {course.duration} Total Length</p>
                </div>
              </div>

              <div className="space-y-3">
                {course.modules.map((mod, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleModule(idx)}
                      className="w-full p-4 bg-slate-50 hover:bg-gray-100 flex items-center justify-between text-left font-bold text-sm text-gray-800 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <FaBookOpen className="text-emerald-600 text-base" />
                        <span>{mod.title}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-400 font-normal hidden sm:inline">{mod.count}</span>
                        <FaChevronDown className={`text-xs transition-transform ${expandedModules.has(idx) ? 'rotate-180 text-emerald-600' : 'text-gray-400'}`} />
                      </div>
                    </button>

                    {expandedModules.has(idx) && (
                      <div className="p-4 bg-white space-y-2 border-t border-gray-100">
                        {mod.lessons.map((lsn, lIdx) => (
                          <div key={lIdx} className="flex items-center justify-between text-xs text-gray-700 py-2 px-2 hover:bg-slate-50 rounded-xl transition-colors">
                            <span className="flex items-center gap-2.5 font-semibold">
                              <FaPlay className="text-emerald-600 text-[10px]" />
                              {lsn.title}
                            </span>
                            <div className="flex items-center gap-3">
                              {lsn.preview && (
                                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                                  Free Preview
                                </span>
                              )}
                              <span className="text-gray-400 font-mono">{lsn.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: INSTRUCTOR */}
          {activeTab === 'instructor' && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-6 animate-fadeIn">
              <h2 className="text-xl font-extrabold text-gray-900">About the Instructor</h2>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 font-black flex items-center justify-center text-xl shadow-md">
                  {course.instructorAvatar}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{course.instructor}</h3>
                  <p className="text-xs text-emerald-700 font-bold">{course.instructorTitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2 text-center text-xs">
                <div className="bg-slate-50 p-3 rounded-2xl border border-gray-100">
                  <p className="text-gray-400 font-medium">Instructor Rating</p>
                  <p className="text-base font-extrabold text-amber-500">{course.instructorRating} ★</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-gray-100">
                  <p className="text-gray-400 font-medium">Students Taught</p>
                  <p className="text-base font-extrabold text-gray-900">{course.instructorStudents}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-gray-100">
                  <p className="text-gray-400 font-medium">Courses</p>
                  <p className="text-base font-extrabold text-emerald-700">{course.instructorCourses}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: REVIEWS */}
          {activeTab === 'reviews' && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-6 animate-fadeIn">
              <h2 className="text-xl font-extrabold text-gray-900">Student Reviews ({course.reviewsCount})</h2>

              <div className="space-y-4">
                {course.reviews.map(rev => (
                  <div key={rev.id} className="p-4 bg-slate-50 rounded-2xl border border-gray-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-gray-900">{rev.name}</h4>
                      <span className="text-xs text-amber-400 font-bold">★★★★★</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed font-medium">"{rev.comment}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </main>

      {/* ENROLLMENT MODAL FORM */}
      <AnimatePresence>
        {showEnrollModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100 relative space-y-6"
            >
              <button
                onClick={() => setShowEnrollModal(false)}
                className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:bg-gray-100"
              >
                <FaTimes />
              </button>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold">
                  <FaGraduationCap />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                    Instant Free Enrollment
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1">{course.title}</h3>
                </div>
              </div>

              <form onSubmit={handleEnrollSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Student Name</label>
                  <input
                    type="text"
                    required
                    value={enrollForm.name}
                    onChange={e => setEnrollForm({ ...enrollForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500/30 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={enrollForm.email}
                    onChange={e => setEnrollForm({ ...enrollForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500/30 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  Complete Enrollment & Go to Student Dashboard →
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default CourseDetails;
