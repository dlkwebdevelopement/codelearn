import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaTrophy, FaCrown, FaGem, FaMedal, FaFire, FaSearch,
  FaArrowUp, FaArrowDown, FaStar, FaUser, FaShieldAlt,
  FaBars, FaTimes, FaRocket, FaChartLine, FaBook,
  FaLaptopCode, FaCertificate, FaComments, FaBell
} from 'react-icons/fa';
import Button from '../../components/ui/Button';
import logo from '../../assets/logo.png';

const Leaderboard = () => {
  const [timeframe, setTimeframe] = useState('weekly');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const leaderboardData = [
    { rank: 1, name: 'Sarah Jenkins', avatar: 'SJ', xp: 4150, streak: 24, badge: 'Master Tier', icon: FaCrown, iconColor: 'text-amber-500', color: 'from-amber-400 to-yellow-500', border: 'border-amber-400', bg: 'bg-amber-50/50', change: 'up' },
    { rank: 2, name: 'Michael Chen', avatar: 'MC', xp: 3890, streak: 19, badge: 'Diamond Tier', icon: FaGem, iconColor: 'text-cyan-500', color: 'from-cyan-400 to-blue-500', border: 'border-cyan-300', bg: 'bg-cyan-50/40', change: 'up' },
    { rank: 3, name: 'Jane Doe (You)', avatar: 'JD', xp: 3420, streak: 14, badge: 'Gold Tier', icon: FaMedal, iconColor: 'text-emerald-500', color: 'from-emerald-400 to-teal-500', border: 'border-emerald-400', bg: 'bg-emerald-50/60', isUser: true, change: 'same' },
    { rank: 4, name: 'David Rodriguez', avatar: 'DR', xp: 3100, streak: 11, badge: 'Silver Tier', icon: FaMedal, iconColor: 'text-slate-400', color: 'from-slate-300 to-gray-400', border: 'border-gray-200', bg: 'bg-white', change: 'down' },
    { rank: 5, name: 'Emily Taylor', avatar: 'ET', xp: 2950, streak: 9, badge: 'Bronze Tier', icon: FaMedal, iconColor: 'text-amber-700', color: 'from-amber-600 to-amber-800', border: 'border-gray-200', bg: 'bg-white', change: 'up' },
    { rank: 6, name: 'Alexander Wright', avatar: 'AW', xp: 2810, streak: 8, badge: 'Bronze Tier', icon: FaShieldAlt, iconColor: 'text-emerald-600', color: 'from-emerald-500 to-teal-600', border: 'border-gray-200', bg: 'bg-white', change: 'same' },
    { rank: 7, name: 'Sophia Martinez', avatar: 'SM', xp: 2640, streak: 7, badge: 'Bronze Tier', icon: FaShieldAlt, iconColor: 'text-emerald-600', color: 'from-emerald-500 to-teal-600', border: 'border-gray-200', bg: 'bg-white', change: 'down' },
    { rank: 8, name: 'Lucas Scott', avatar: 'LS', xp: 2450, streak: 6, badge: 'Bronze Tier', icon: FaShieldAlt, iconColor: 'text-emerald-600', color: 'from-emerald-500 to-teal-600', border: 'border-gray-200', bg: 'bg-white', change: 'up' }
  ];

  const filteredData = leaderboardData.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-8 space-y-8 max-w-full font-sans pb-16">
      <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Banner Section */}
            <div className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-amber-300 mb-3 border border-white/10">
                    <FaTrophy className="text-amber-400" />
                    <span>Cohort 2026 Rankings</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">Student Leaderboard</h1>
                  <p className="text-emerald-100/90 text-sm sm:text-base font-light">
                    Compete with fellow learners, earn XP by finishing modules, and maintain your streak!
                  </p>
                </div>

                {/* Timeframe Filter Pills */}
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/15 self-start md:self-auto text-xs font-bold">
                  {['weekly', 'monthly', 'all-time'].map(tf => (
                    <button
                      key={tf}
                      onClick={() => setTimeframe(tf)}
                      className={`px-4 py-2 rounded-xl capitalize transition-all ${
                        timeframe === tf
                          ? 'bg-white text-emerald-900 shadow-md font-extrabold'
                          : 'text-emerald-100 hover:bg-white/10'
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Podium Top 3 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 items-end">
              
              {/* #2 Rank Card */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-cyan-200/80 shadow-lg flex flex-col items-center text-center relative order-2 md:order-1 hover:-translate-y-2 transition-all duration-300 group">
                <div className="absolute top-4 right-4 bg-cyan-100 text-cyan-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-cyan-200 flex items-center gap-1">
                  <FaGem className="text-cyan-500" /> Runner-Up
                </div>

                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[3px] shadow-lg mb-4 relative group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-white rounded-[13px] flex items-center justify-center font-extrabold text-gray-800 text-2xl">
                    MC
                  </div>
                  <span className="absolute -bottom-2 -right-1 bg-cyan-600 text-white text-xs font-extrabold px-2.5 py-0.5 rounded-full border-2 border-white shadow-sm">#2</span>
                </div>

                <h3 className="font-bold text-gray-900 text-xl mb-1">Michael Chen</h3>
                <p className="text-xs text-cyan-600 font-bold mb-4">Diamond Tier</p>

                <div className="w-full bg-cyan-50/60 p-3 rounded-2xl border border-cyan-100 flex justify-between items-center text-xs">
                  <span className="text-gray-500 font-medium">XP: <strong className="text-cyan-700 font-extrabold text-sm">3,890</strong></span>
                  <span className="text-amber-600 font-bold flex items-center gap-1"><FaFire /> 19d Streak</span>
                </div>
              </div>

              {/* #1 Rank Card (Center Champion) */}
              <div className="bg-gradient-to-b from-amber-50/80 via-white to-amber-50/40 p-7 sm:p-8 rounded-3xl border-2 border-amber-400 shadow-xl flex flex-col items-center text-center relative order-1 md:order-2 hover:-translate-y-3 transition-all duration-300 group">
                <div className="absolute -top-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-extrabold px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <FaCrown className="text-xs" /> CHAMPION
                </div>

                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-500 p-[3px] shadow-xl mb-4 mt-2 relative group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-white rounded-[13px] flex items-center justify-center font-extrabold text-amber-950 text-3xl">
                    SJ
                  </div>
                  <span className="absolute -bottom-2 -right-1 bg-amber-500 text-white text-xs font-extrabold px-3 py-0.5 rounded-full border-2 border-white shadow-md">#1</span>
                </div>

                <h3 className="font-extrabold text-gray-900 text-2xl mb-1">Sarah Jenkins</h3>
                <p className="text-xs text-amber-700 font-bold mb-4 flex items-center gap-1">
                  <FaCrown className="text-amber-500" /> Master Tier Champion
                </p>

                <div className="w-full bg-amber-100/60 p-3.5 rounded-2xl border border-amber-200 flex justify-between items-center text-xs">
                  <span className="text-gray-600 font-medium">XP: <strong className="text-amber-900 font-extrabold text-base">4,150</strong></span>
                  <span className="text-amber-700 font-extrabold flex items-center gap-1"><FaFire /> 24d Streak</span>
                </div>
              </div>

              {/* #3 Rank Card (User Highlight) */}
              <div className="bg-gradient-to-b from-emerald-50/60 to-white p-6 sm:p-7 rounded-3xl border-2 border-emerald-400 shadow-lg flex flex-col items-center text-center relative order-3 hover:-translate-y-2 transition-all duration-300 group">
                <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                  <FaMedal className="text-emerald-600" /> You
                </div>

                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[3px] shadow-lg mb-4 relative group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-white rounded-[13px] flex items-center justify-center font-extrabold text-emerald-800 text-2xl">
                    JD
                  </div>
                  <span className="absolute -bottom-2 -right-1 bg-emerald-600 text-white text-xs font-extrabold px-2.5 py-0.5 rounded-full border-2 border-white shadow-sm">#3</span>
                </div>

                <h3 className="font-bold text-gray-900 text-xl mb-1">Jane Doe</h3>
                <p className="text-xs text-emerald-700 font-bold mb-4">Gold Tier</p>

                <div className="w-full bg-emerald-100/50 p-3 rounded-2xl border border-emerald-200 flex justify-between items-center text-xs">
                  <span className="text-gray-600 font-medium">XP: <strong className="text-emerald-800 font-extrabold text-sm">3,420</strong></span>
                  <span className="text-amber-600 font-bold flex items-center gap-1"><FaFire /> 14d Streak</span>
                </div>
              </div>

            </div>

            {/* Full Cohort Standings Table */}
            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xs p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Full Cohort Standings</h2>
                  <p className="text-xs text-gray-500 font-medium">Updated live based on course completion & quiz performance</p>
                </div>

                <div className="relative w-full sm:w-72">
                  <FaSearch className="absolute left-3.5 top-3.5 text-gray-400 text-xs" />
                  <input
                    type="text"
                    placeholder="Search by student name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 text-xs bg-gray-100/80 focus:bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-gray-100">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-50/80 border-b border-gray-200 text-[11px] font-extrabold text-gray-500 uppercase tracking-wider">
                      <th className="py-4 px-5">Rank</th>
                      <th className="py-4 px-5">Student</th>
                      <th className="py-4 px-5">Tier Badge</th>
                      <th className="py-4 px-5 text-center">Streak</th>
                      <th className="py-4 px-5 text-right">Total XP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredData.map(user => {
                      const TierIcon = user.icon;
                      return (
                        <tr 
                          key={user.rank}
                          className={`hover:bg-slate-50/80 transition-colors ${
                            user.isUser ? 'bg-emerald-50/70 font-semibold' : ''
                          }`}
                        >
                          <td className="py-4 px-5">
                            <span className={`inline-flex items-center justify-center w-7 h-7 rounded-xl font-bold text-xs ${
                              user.rank === 1 ? 'bg-amber-100 text-amber-800 border border-amber-300' :
                              user.rank === 2 ? 'bg-cyan-100 text-cyan-800 border border-cyan-300' :
                              user.rank === 3 ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' :
                              'text-gray-500'
                            }`}>
                              #{user.rank}
                            </span>
                          </td>

                          <td className="py-4 px-5">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${user.color} p-[2px] shadow-xs shrink-0`}>
                                <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center font-bold text-xs text-gray-800">
                                  {user.avatar}
                                </div>
                              </div>
                              <div>
                                <p className="font-bold text-gray-900 leading-tight flex items-center gap-2">
                                  {user.name}
                                  {user.isUser && (
                                    <span className="text-[10px] bg-emerald-600 text-white font-extrabold px-2 py-0.5 rounded-md">
                                      YOU
                                    </span>
                                  )}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="py-4 px-5">
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-xl bg-gray-100 text-gray-700 border border-gray-200/60">
                              <TierIcon className={`text-xs ${user.iconColor}`} />
                              {user.badge}
                            </span>
                          </td>

                          <td className="py-4 px-5 text-center">
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                              <FaFire className="text-amber-500" /> {user.streak}d
                            </span>
                          </td>

                          <td className="py-4 px-5 text-right font-extrabold text-emerald-700 text-base">
                            {user.xp.toLocaleString()} XP
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
    </div>
  );
};

export default Leaderboard;
