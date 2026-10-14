import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBell, FaCheckCircle, FaAward, FaFire, FaBookOpen,
  FaComments, FaLaptopCode, FaTrashAlt, FaCheck, FaFilter,
  FaArrowRight, FaTimes, FaExclamationCircle, FaShieldAlt
} from 'react-icons/fa';

const initialNotifications = [
  {
    id: 1,
    title: 'Verified Certificate Issued! 🏆',
    message: 'Congratulations! Your Official Complete Full-Stack Web Developer Credential (CL-CERT-2026-9842) is ready for download.',
    timestamp: '10 minutes ago',
    read: false,
    type: 'certificate',
    icon: FaAward,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    link: '/my-certifications'
  },
  {
    id: 2,
    title: 'Assessment Exam Unlocked 🚀',
    message: 'You have completed all prerequisite modules for Advanced React & Redux Toolkit. Take the proctored exam now!',
    timestamp: '1 hour ago',
    read: false,
    type: 'exam',
    icon: FaLaptopCode,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    link: '/test'
  },
  {
    id: 3,
    title: '14-Day Streak Milestone! 🔥',
    message: 'Awesome consistency! You have logged in and completed daily lessons for 14 consecutive days. +250 XP awarded!',
    timestamp: '3 hours ago',
    read: true,
    type: 'system',
    icon: FaFire,
    color: 'text-amber-600',
    bg: 'bg-amber-600/10',
    link: '/dashboard'
  },
  {
    id: 4,
    title: 'Community Answer Received 💬',
    message: 'Alex Rivera answered your question: "How do you optimize React 19 server components?" in Developer Help Community.',
    timestamp: 'Yesterday',
    read: true,
    type: 'community',
    icon: FaComments,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    link: '/community'
  },
  {
    id: 5,
    title: 'New Project Challenge Available 💻',
    message: 'Build a Full-Stack E-Commerce Platform with Next.js 15 & Tailwind CSS. Submit for review to earn badge.',
    timestamp: '2 days ago',
    read: true,
    type: 'course',
    icon: FaBookOpen,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    link: '/my-projects-tasks'
  }
];

const Notification = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'unread' | 'certificate' | 'system'

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const toggleReadStatus = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: !n.read } : n));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const filteredNotifications = notifications.filter(n => {
    if (activeFilter === 'unread') return !n.read;
    if (activeFilter === 'certificate') return n.type === 'certificate';
    if (activeFilter === 'system') return n.type === 'system' || n.type === 'exam';
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="p-4 sm:p-8 space-y-8 max-w-5xl mx-auto font-sans pb-16">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 backdrop-blur-md rounded-full text-xs font-bold text-emerald-300 border border-emerald-500/30">
            <FaBell className="text-amber-400" />
            <span>Activity & Notifications</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Notification Center
          </h1>
          <p className="text-emerald-100/80 text-sm font-light">
            Stay updated with your exam certifications, course milestones, and community replies.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 relative z-10">
          <button
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
            className="px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white font-bold text-xs rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <FaCheck className="text-emerald-400" />
            <span>Mark All as Read</span>
          </button>

          <button
            onClick={clearAllNotifications}
            disabled={notifications.length === 0}
            className="px-4 py-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 font-bold text-xs rounded-xl border border-red-500/30 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <FaTrashAlt />
            <span>Clear All</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-200/80 shadow-xs">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {[
            { id: 'all', label: `All (${notifications.length})` },
            { id: 'unread', label: `Unread (${unreadCount})` },
            { id: 'certificate', label: 'Certificates' },
            { id: 'system', label: 'Exams & System' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <span className="text-xs text-gray-400 font-semibold hidden sm:inline">
          Showing {filteredNotifications.length} items
        </span>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map(n => {
            const IconComponent = n.icon;
            return (
              <div
                key={n.id}
                className={`p-5 rounded-3xl border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group ${
                  !n.read
                    ? 'bg-emerald-50/40 border-emerald-200/90 shadow-sm'
                    : 'bg-white border-gray-200/80 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${n.bg} flex items-center justify-center shrink-0 shadow-xs`}>
                    <IconComponent className={`text-xl ${n.color}`} />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-gray-900 leading-snug">
                        {n.title}
                      </h3>
                      {!n.read && (
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {n.message}
                    </p>
                    <p className="text-[11px] text-gray-400 font-semibold pt-1">
                      {n.timestamp}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <Link to={n.link}>
                    <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5 cursor-pointer">
                      <span>View</span>
                      <FaArrowRight className="text-[10px]" />
                    </button>
                  </Link>

                  <button
                    onClick={() => toggleReadStatus(n.id)}
                    className="p-2 rounded-xl text-gray-400 hover:text-emerald-600 hover:bg-gray-100 cursor-pointer"
                    title={n.read ? 'Mark as unread' : 'Mark as read'}
                  >
                    <FaCheck className={n.read ? 'text-gray-300' : 'text-emerald-500'} />
                  </button>

                  <button
                    onClick={() => deleteNotification(n.id)}
                    className="p-2 rounded-xl text-gray-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                    title="Delete notification"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="bg-white p-12 rounded-3xl border border-gray-200 text-center space-y-4 shadow-xs">
            <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center text-2xl mx-auto">
              <FaBell />
            </div>
            <h3 className="text-lg font-bold text-gray-800">No Notifications Found</h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              You are all caught up! Check back later for new course updates and certification alerts.
            </p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Notification;
