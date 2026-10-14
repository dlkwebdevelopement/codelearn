import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaComments, FaQuestionCircle, FaSearch, FaRocket, FaFire,
  FaPlus, FaThumbsUp, FaCheckCircle, FaUser, FaRegCommentDots,
  FaBars, FaTimes, FaBell, FaChartLine, FaBook, FaLaptopCode,
  FaCertificate, FaTrophy, FaCog, FaLightbulb, FaHeadset, FaCrown
} from 'react-icons/fa';
import Button from '../../components/ui/Button';
import logo from '../../assets/logo.png';

const HelpCommunity = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeFaq, setActiveFaq] = useState(null);

  // Demo Discussion Threads Data
  const discussions = [
    {
      id: 1,
      title: 'How to optimize React re-renders with useMemo & useCallback?',
      author: 'Alex Rivera',
      avatar: 'AR',
      category: 'React.js',
      replies: 14,
      upvotes: 48,
      time: '3 hours ago',
      isSolved: true,
      tags: ['React', 'Performance', 'Hooks']
    },
    {
      id: 2,
      title: 'Best practices for JWT Refresh Token rotation in Express.js & Node',
      author: 'Marcus Vance',
      avatar: 'MV',
      category: 'Node.js',
      replies: 9,
      upvotes: 32,
      time: '5 hours ago',
      isSolved: true,
      tags: ['Node.js', 'Security', 'Express']
    },
    {
      id: 3,
      title: 'Tips for landing your first Frontend Developer job in 2026',
      author: 'Sophia Chen',
      avatar: 'SC',
      category: 'Career Advice',
      replies: 28,
      upvotes: 95,
      time: '1 day ago',
      isSolved: false,
      tags: ['Portfolio', 'Career', 'Interviews']
    },
    {
      id: 4,
      title: 'Python vs JavaScript for Data Structures & Algorithms interview prep',
      author: 'David Kim',
      avatar: 'DK',
      category: 'Computer Science',
      replies: 19,
      upvotes: 61,
      time: '2 days ago',
      isSolved: false,
      tags: ['Python', 'DSA', 'Algorithms']
    }
  ];

  // Demo FAQs
  const faqs = [
    { q: 'How do I download my course completion certificates?', a: 'Once you reach 100% completion in a course and pass the final quiz, your certificate will automatically generate in your Dashboard under the Certificates tab.' },
    { q: 'Can I practice coding directly in my browser without installing software?', a: 'Yes! CodeLearn provides a built-in interactive live code playground supporting HTML, CSS, JavaScript, TypeScript, and Python.' },
    { q: 'How does the study streak system work?', a: 'Spend at least 15 minutes learning or completing a quiz each day to keep your streak active and earn daily bonus XP.' },
    { q: 'How do I ask a mentor for help with my project code?', a: 'Pro students can post code snippets directly in the Community Forum or use the Ask a Mentor button for 1-on-1 feedback.' }
  ];

  const filteredDiscussions = discussions.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCat = selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCat;
  });

  return (
    <div className="p-4 sm:p-8 space-y-8 max-w-full font-sans pb-16">
      <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Community Hero Banner */}
            <div className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-emerald-200 mb-3 border border-white/10">
                    <FaComments className="text-amber-400" />
                    <span>50K+ Active Developers</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">Help Center & Community</h1>
                  <p className="text-emerald-100/90 text-sm sm:text-base font-light leading-relaxed">
                    Ask questions, share code snippets, connect with mentors, and join active developer discussions.
                  </p>
                </div>

                <button className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-950 font-bold text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 shrink-0">
                  <FaPlus className="text-xs" /> Start a Discussion
                </button>
              </div>
            </div>

            {/* Main Community Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Discussion Threads Column */}
              <div className="lg:col-span-2 space-y-6">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs">
                  <h2 className="text-xl font-bold text-gray-900">Popular Discussions</h2>
                  
                  <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl text-xs font-bold self-start sm:self-auto">
                    {['all', 'react.js', 'node.js', 'career advice'].map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                          selectedCategory === cat
                            ? 'bg-white text-emerald-700 shadow-2xs font-extrabold'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredDiscussions.map(item => (
                    <div 
                      key={item.id}
                      className="bg-white p-6 rounded-3xl border border-gray-200/80 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all space-y-4 group cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[2px] shadow-xs shrink-0">
                            <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center font-bold text-xs text-gray-800">
                              {item.avatar}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-900">{item.author}</h4>
                            <p className="text-[10px] text-gray-400 font-medium">{item.time} • in {item.category}</p>
                          </div>
                        </div>

                        {item.isSolved && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                            <FaCheckCircle className="text-emerald-600" /> Solved
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100 text-xs">
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map(tag => (
                            <span key={tag} className="px-2.5 py-0.5 rounded-md bg-gray-100 text-gray-600 text-[11px] font-semibold">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4 text-gray-500 font-bold text-xs">
                          <span className="flex items-center gap-1 hover:text-emerald-600">
                            <FaThumbsUp className="text-xs" /> {item.upvotes}
                          </span>
                          <span className="flex items-center gap-1 hover:text-emerald-600">
                            <FaRegCommentDots className="text-xs" /> {item.replies} replies
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* FAQ & Support Contact Column */}
              <div className="space-y-6">
                
                {/* 24/7 Support Card */}
                <div className="bg-gradient-to-br from-emerald-900 to-teal-900 p-6 rounded-3xl text-white shadow-lg space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400 font-bold text-xl border border-white/10">
                    <FaHeadset />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Need Mentor Assistance?</h3>
                    <p className="text-xs text-emerald-100/80 mt-1 leading-relaxed">
                      Our senior engineering mentors respond within 15 minutes to help review your code or fix bugs.
                    </p>
                  </div>
                  <button className="w-full py-2.5 bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-xs rounded-xl shadow-md transition-all">
                    Ask a Mentor Now
                  </button>
                </div>

                {/* Frequently Asked Questions */}
                <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <FaQuestionCircle className="text-emerald-600" />
                    <span>Frequently Asked Questions</span>
                  </h3>

                  <div className="space-y-3">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                          className="w-full p-3.5 text-left text-xs font-bold text-gray-800 hover:bg-gray-50 flex justify-between items-center transition-colors"
                        >
                          <span>{faq.q}</span>
                          <span className="text-emerald-600 font-bold">{activeFaq === index ? '−' : '+'}</span>
                        </button>
                        {activeFaq === index && (
                          <div className="p-3.5 bg-slate-50/70 border-t border-gray-100 text-xs text-gray-600 leading-relaxed">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
    </div>
  );
};

export default HelpCommunity;
