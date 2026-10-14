import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBook, FaCode, FaFire, FaTrophy, FaAward,
  FaClock, FaCheckCircle, FaArrowRight, FaPlay, FaSearch, FaBell,
  FaChartLine, FaCertificate, FaCrown, FaLightbulb,
  FaLaptopCode, FaComments, FaRocket,
  FaRegCalendarAlt, FaBars, FaTimes, FaCog, FaReact, FaPython,
  FaCss3Alt, FaGem, FaMedal
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import Button from '../../components/ui/Button';
import logo from '../../assets/logo.png';
import MyProjectsTasks from '../MyProjectsTasks/MyProjectsTasks';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Demo Data: Student Overview Metrics
  const stats = [
    { id: 1, title: 'Enrolled Courses', value: '4 Active', subtext: '2 Completed', icon: FaBook, color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200', trend: '+1 this week' },
    { id: 2, title: 'Total Learn Time', value: '86.5 hrs', subtext: '12.4 hrs this week', icon: FaClock, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200', trend: '+18% vs last week' },
    { id: 3, title: 'Current Streak', value: '14 Days', subtext: 'Personal best: 21d', icon: FaFire, color: 'text-amber-500', bg: 'bg-amber-50 border-amber-200', trend: 'Active' },
    { id: 4, title: 'XP Points', value: '3,420 XP', subtext: 'Rank #3 in Cohort', icon: FaTrophy, color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200', trend: '+350 XP today' },
    { id: 5, title: 'Quiz Score Avg', value: '94.2%', subtext: '18 Quizzes Taken', icon: FaChartLine, color: 'text-teal-600', bg: 'bg-teal-50 border-teal-200', trend: 'Top 5%' },
    { id: 6, title: 'Certificates', value: '5 Earned', subtext: 'Latest: React Dev', icon: FaCertificate, color: 'text-rose-600', bg: 'bg-rose-50 border-rose-200', trend: 'Verified' }
  ];

  // Demo Data: Enrolled Courses with Professional Icons
  const enrolledCourses = [
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
      lastAccessed: '2 hours ago'
    },
    {
      id: 'typescript-pro',
      title: 'Advanced TypeScript & Design Patterns',
      category: 'Programming',
      instructor: 'Max Schwarzmüller',
      progress: 45,
      completedModules: 9,
      totalModules: 20,
      nextLesson: 'Module 10: Generics, Mapped Types & Conditional Types',
      timeLeft: '5h 40m remaining',
      icon: SiTypescript,
      color: 'from-blue-600 to-indigo-700',
      lastAccessed: 'Yesterday'
    },
    {
      id: 'python-dsa',
      title: 'Python Data Structures & Algorithms',
      category: 'Computer Science',
      instructor: 'Colt Steele',
      progress: 92,
      completedModules: 23,
      totalModules: 25,
      nextLesson: 'Module 24: Graph Algorithms - Dijkstra & A* Search',
      timeLeft: '45m remaining',
      icon: FaPython,
      color: 'from-emerald-600 to-teal-700',
      lastAccessed: '3 days ago'
    },
    {
      id: 'tailwind-ui',
      title: 'Modern UI/UX Design with Tailwind CSS',
      category: 'Design',
      instructor: 'Adam Wathan',
      progress: 30,
      completedModules: 6,
      totalModules: 20,
      nextLesson: 'Module 7: Responsive Grid Systems & Dark Mode',
      timeLeft: '4h 10m remaining',
      icon: FaCss3Alt,
      color: 'from-purple-600 to-pink-600',
      lastAccessed: '4 days ago'
    }
  ];

  // Demo Data: Upcoming Assignments
  const upcomingAssignments = [
    {
      id: 1,
      title: 'Build a REST API with Express & MongoDB',
      course: 'Full-Stack React & Node.js Mastery',
      dueDate: 'Tomorrow, 11:59 PM',
      status: 'Pending',
      difficulty: 'Hard',
      points: '150 XP'
    },
    {
      id: 2,
      title: 'TypeScript Type Guard & Utility Types Quiz',
      course: 'Advanced TypeScript & Design Patterns',
      dueDate: 'July 25, 2026',
      status: 'In Progress',
      difficulty: 'Medium',
      points: '100 XP'
    },
    {
      id: 3,
      title: 'Implement Binary Search Tree Traversal',
      course: 'Python Data Structures & Algorithms',
      dueDate: 'July 28, 2026',
      status: 'Submitted',
      difficulty: 'Hard',
      points: '200 XP'
    }
  ];

  // Demo Data: Recent Activity Timeline
  const recentActivities = [
    {
      id: 1,
      type: 'quiz',
      title: 'Passed Quiz: Custom Hooks in React',
      score: '96%',
      time: '2 hours ago',
      icon: FaCheckCircle,
      iconColor: 'text-emerald-500',
      bg: 'bg-emerald-50'
    },
    {
      id: 2,
      type: 'lesson',
      title: 'Completed Lesson: State Management with Zustand',
      score: null,
      time: '5 hours ago',
      icon: FaPlay,
      iconColor: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      id: 3,
      type: 'badge',
      title: 'Unlocked Achievement: 14-Day Streak Champion',
      score: '+200 XP',
      time: 'Yesterday',
      icon: FaTrophy,
      iconColor: 'text-amber-500',
      bg: 'bg-amber-50'
    },
    {
      id: 4,
      type: 'certificate',
      title: 'Earned Certificate: Responsive Web Design Expert',
      score: 'Verified',
      time: '3 days ago',
      icon: FaAward,
      iconColor: 'text-purple-500',
      bg: 'bg-purple-50'
    }
  ];

  // Demo Data: Leaderboard with Professional Tier Icons
  const leaderboard = [
    { rank: 1, name: 'Sarah Jenkins', avatar: 'SJ', xp: '4,150 XP', streak: '24d', badge: 'Master Tier', icon: FaCrown, iconColor: 'text-amber-500' },
    { rank: 2, name: 'Michael Chen', avatar: 'MC', xp: '3,890 XP', streak: '19d', badge: 'Diamond Tier', icon: FaGem, iconColor: 'text-cyan-500' },
    { rank: 3, name: 'Jane Doe (You)', avatar: 'JD', xp: '3,420 XP', streak: '14d', badge: 'Gold Tier', icon: FaMedal, iconColor: 'text-amber-400', isUser: true },
    { rank: 4, name: 'David Rodriguez', avatar: 'DR', xp: '3,100 XP', streak: '11d', badge: 'Silver Tier', icon: FaMedal, iconColor: 'text-slate-400' },
    { rank: 5, name: 'Emily Taylor', avatar: 'ET', xp: '2,950 XP', streak: '9d', badge: 'Bronze Tier', icon: FaMedal, iconColor: 'text-amber-700' }
  ];

  // Demo Data: Skill Competencies
  const skills = [
    { name: 'React.js & Hooks', level: 88, category: 'Frontend' },
    { name: 'TypeScript', level: 75, category: 'Languages' },
    { name: 'Node.js & Express', level: 82, category: 'Backend' },
    { name: 'Python & Algorithms', level: 90, category: 'Computer Science' },
    { name: 'Tailwind CSS & UI', level: 95, category: 'Styling' }
  ];

  const filteredCourses = enrolledCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.nextLesson.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || course.category.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-4 sm:p-8 space-y-8 max-w-full font-sans pb-16">
      
      {/* Welcome Banner Card */}
            <div className="relative bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl overflow-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-emerald-200 mb-3 border border-white/10">
                    <FaLightbulb className="text-amber-300" />
                    <span>Daily Goal: 45 / 60 Mins Completed</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 tracking-tight">
                    Welcome back, Jane
                  </h1>
                  <p className="text-emerald-100/90 text-base sm:text-lg font-light leading-relaxed">
                    You are on a <span className="font-semibold text-amber-300">14-day learning streak</span>. Finish your next lesson in <span className="underline decoration-emerald-400">Full-Stack React</span> to earn +50 XP today!
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <Link to="/courses">
                    <button className="px-5 py-3 bg-white text-emerald-800 hover:bg-emerald-50 font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm flex items-center gap-2 cursor-pointer">
                      <FaPlay className="text-xs text-emerald-600" /> Resume Learning
                    </button>
                  </Link>
                  <Link to="/certification-details">
                    <button className="px-5 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-950 font-bold rounded-xl shadow-lg transition-all text-sm flex items-center gap-2 cursor-pointer border-none">
                      <FaCertificate className="text-amber-950" /> Certification Details
                    </button>
                  </Link>
                  <Link to="/my-projects-tasks">
                    <button className="px-5 py-3 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl backdrop-blur-md border border-white/20 transition-all text-sm flex items-center gap-2 cursor-pointer">
                      <FaCode /> My Projects & Tasks
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Metrics & Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {stats.map(stat => {
                const Icon = stat.icon;
                const isCert = stat.id === 6;
                const linkPath = isCert ? '/certification-details' : '/dashboard';

                return (
                  <Link 
                    key={stat.id}
                    to={linkPath}
                    className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-11 h-11 rounded-xl ${stat.bg} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`text-lg ${stat.color}`} />
                      </div>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                        {stat.trend}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-500 mb-1">{stat.title}</p>
                      <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">{stat.value}</h3>
                      <p className="text-[11px] text-gray-400 font-medium">{stat.subtext}</p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Middle Grid: Courses in Progress & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Main Left Column: Enrolled Courses & Skill Progress */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Enrolled Courses Section */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-200/80 shadow-xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">In-Progress Courses</h2>
                      <p className="text-xs text-gray-500 font-medium">Continue where you left off to maintain your learning streak</p>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl text-xs font-semibold self-start sm:self-auto">
                      {['all', 'web dev', 'programming', 'computer science'].map(cat => (
                        <button
                          key={cat}
                          onClick={() => setFilterCategory(cat)}
                          className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                            filterCategory === cat
                              ? 'bg-white text-emerald-700 shadow-2xs font-bold'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Course Cards List */}
                  <div className="space-y-4">
                    {filteredCourses.length > 0 ? (
                      filteredCourses.map(course => {
                        const CourseIcon = course.icon;
                        return (
                          <div 
                            key={course.id}
                            className="group bg-slate-50/60 hover:bg-white p-5 rounded-2xl border border-gray-200/70 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                          >
                            <div className="flex items-start sm:items-center gap-4 flex-1">
                              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-2xl shadow-md shrink-0 group-hover:scale-105 transition-transform`}>
                                <CourseIcon />
                              </div>

                              <div className="space-y-1.5 flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                                    {course.category}
                                  </span>
                                  <span className="text-xs text-gray-400 font-medium">• {course.instructor}</span>
                                </div>

                                <h3 className="text-base font-bold text-gray-900 truncate group-hover:text-emerald-700 transition-colors">
                                  {course.title}
                                </h3>

                                <p className="text-xs text-gray-600 flex items-center gap-1.5">
                                  <FaPlay className="text-[10px] text-emerald-600 shrink-0" />
                                  <span className="truncate">{course.nextLesson}</span>
                                </p>

                                {/* Progress bar */}
                                <div className="pt-1 max-w-md">
                                  <div className="flex items-center justify-between text-[11px] font-semibold text-gray-500 mb-1">
                                    <span>{course.progress}% Completed</span>
                                    <span>{course.completedModules}/{course.totalModules} Modules</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                    <div 
                                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-500"
                                      style={{ width: `${course.progress}%` }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-200/60">
                              <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                                <FaClock className="text-[11px]" /> {course.timeLeft}
                              </span>
                              <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/20 transition-all flex items-center gap-1.5 group-hover:px-5">
                                <span>Continue</span>
                                <FaArrowRight className="text-[10px]" />
                              </button>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center py-8 text-gray-400 font-medium">
                        No courses match your search or filter criteria.
                      </div>
                    )}
                  </div>
                </div>

                {/* Skill Mastery Breakdown */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-200/80 shadow-xs space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Skill Competency Matrix</h3>
                      <p className="text-xs text-gray-500 font-medium">Evaluated through code submissions and quizzes</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Level: Advanced
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="bg-slate-50/80 p-4 rounded-2xl border border-gray-100">
                        <div className="flex justify-between items-center text-xs font-bold mb-2">
                          <span className="text-gray-800">{skill.name}</span>
                          <span className="text-emerald-700">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-700"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Upcoming Tasks, Leaderboard & Activity */}
              <div className="space-y-8">

                {/* Upcoming Assignments Card */}
                <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-xs space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <FaRegCalendarAlt className="text-emerald-600 text-lg" />
                      <span>Assignments</span>
                    </h3>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      3 Pending
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {upcomingAssignments.map(task => (
                      <div 
                        key={task.id} 
                        className="p-4 rounded-2xl border border-gray-200/80 hover:border-emerald-300 bg-gray-50/50 hover:bg-white transition-all space-y-2 group"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug">
                            {task.title}
                          </h4>
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 shrink-0">
                            {task.points}
                          </span>
                        </div>

                        <p className="text-[11px] text-gray-500 font-medium truncate">{task.course}</p>

                        <div className="flex items-center justify-between text-[11px] pt-1 border-t border-gray-100">
                          <span className="text-amber-700 font-semibold flex items-center gap-1">
                            <FaClock className="text-[10px]" /> {task.dueDate}
                          </span>
                          <span className={`font-bold ${
                            task.status === 'Submitted' ? 'text-emerald-600' : 'text-blue-600'
                          }`}>
                            {task.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Certificates & Exam Credentials Card */}
                <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-800 p-6 rounded-3xl text-white shadow-xl space-y-4 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <FaAward className="text-amber-400" />
                      <span>My Verified Certificates</span>
                    </h3>
                    <span className="text-xs font-bold text-emerald-200 bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
                      5 Issued
                    </span>
                  </div>

                  <p className="text-xs text-emerald-100/90 leading-relaxed font-light">
                    Take proctored assessment tests to earn shareable, verified credentials for your portfolio.
                  </p>

                  <div className="space-y-2 pt-1">
                    <Link to="/certification">
                      <button className="w-full py-2.5 bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]">
                        <FaCertificate className="text-amber-500" />
                        <span>Go to Certification Exam Portal</span>
                      </button>
                    </Link>

                    <Link to="/certification-details">
                      <button className="w-full py-2 bg-emerald-800/80 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl border border-white/20 flex items-center justify-center gap-2 cursor-pointer">
                        <FaLaptopCode />
                        <span>View Full-Stack Exam Details</span>
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Leaderboard Snippet */}
                <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-xs space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <FaTrophy className="text-amber-500 text-lg" />
                      <span>Cohort Leaderboard</span>
                    </h3>
                    <span className="text-xs font-bold text-emerald-600">Top 5</span>
                  </div>

                  <div className="space-y-2.5">
                    {leaderboard.map(user => {
                      const TierIcon = user.icon;
                      return (
                        <div 
                          key={user.rank}
                          className={`flex items-center justify-between p-3 rounded-2xl transition-all ${
                            user.isUser
                              ? 'bg-emerald-50 border-2 border-emerald-400/80 font-bold shadow-2xs'
                              : 'bg-gray-50/60 border border-gray-100 hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-6 text-center font-bold text-xs ${
                              user.rank === 1 ? 'text-amber-500 text-sm' :
                              user.rank === 2 ? 'text-slate-400 text-sm' :
                              user.rank === 3 ? 'text-amber-700 text-sm' : 'text-gray-400'
                            }`}>
                              #{user.rank}
                            </span>

                            <div className="w-8 h-8 rounded-xl bg-gray-200 flex items-center justify-center font-bold text-xs text-gray-700">
                              {user.avatar}
                            </div>

                            <div>
                              <p className="text-xs font-bold text-gray-900 leading-tight">{user.name}</p>
                              <p className="text-[10px] text-gray-500 flex items-center gap-1">
                                <TierIcon className={`text-[10px] ${user.iconColor}`} /> {user.badge}
                              </p>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="text-xs font-extrabold text-emerald-700">{user.xp}</p>
                            <p className="text-[10px] text-amber-600 font-semibold">{user.streak} streak</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Activity Log */}
                <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-xs space-y-5">
                  <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
                  
                  <div className="space-y-4 relative before:absolute before:top-2 before:bottom-2 before:left-4 before:w-0.5 before:bg-gray-200">
                    {recentActivities.map(act => {
                      const Icon = act.icon;
                      return (
                        <div key={act.id} className="relative flex items-start gap-3 pl-8">
                          <div className={`absolute left-1 top-0.5 w-6 h-6 rounded-full ${act.bg} border border-gray-200 flex items-center justify-center z-10`}>
                            <Icon className={`text-xs ${act.iconColor}`} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-900 leading-tight">{act.title}</p>
                            <div className="flex items-center gap-2 text-[11px] text-gray-400 mt-0.5">
                              <span>{act.time}</span>
                              {act.score && <span className="font-semibold text-emerald-600">• {act.score}</span>}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>

          </div>
  );
};

export default Dashboard;
