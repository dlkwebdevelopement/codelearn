import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUser, FaEnvelope, FaLock, FaBell, FaShieldAlt,
  FaCheck, FaCrown, FaCog, FaSave, FaFire, FaSearch,
  FaBars, FaTimes, FaRocket, FaChartLine, FaBook,
  FaLaptopCode, FaCertificate, FaTrophy, FaComments
} from 'react-icons/fa';
import Button from '../../components/ui/Button';
import logo from '../../assets/logo.png';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  const [profile, setProfile] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    bio: 'Passionate frontend developer learning React, TypeScript, and Node.js.',
    goal: '60'
  });

  const [notifications, setNotifications] = useState({
    emailReminders: true,
    weeklyReport: true,
    courseUpdates: true,
    communityReplies: false
  });

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-4 sm:p-8 space-y-8 max-w-full font-sans pb-16">
      <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Header Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold shadow-xs">
                  <FaCog className="text-2xl" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Account Settings</h1>
                  <p className="text-xs sm:text-sm text-gray-500">Manage your profile, preferences, learning targets, and security.</p>
                </div>
              </div>
            </div>

            {/* Settings Container */}
            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xs overflow-hidden flex flex-col md:flex-row">
              
              {/* Settings Tabs Inner Sidebar */}
              <div className="w-full md:w-64 bg-slate-50/70 p-5 border-b md:border-b-0 md:border-r border-gray-200/80 space-y-2 shrink-0">
                {[
                  { id: 'profile', label: 'Profile Information', icon: FaUser },
                  { id: 'security', label: 'Password & Security', icon: FaLock },
                  { id: 'notifications', label: 'Notifications', icon: FaBell },
                  { id: 'plan', label: 'Subscription Plan', icon: FaCrown },
                ].map(tab => {
                  const Icon = tab.icon;
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        active
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                          : 'text-gray-600 hover:bg-white hover:text-emerald-700'
                      }`}
                    >
                      <Icon className={`text-base ${active ? 'text-white' : 'text-gray-400'}`} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Settings Form Panel */}
              <div className="flex-1 p-6 sm:p-8">
                {saved && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold flex items-center gap-2">
                    <FaCheck className="text-emerald-600" />
                    <span>Settings saved successfully!</span>
                  </div>
                )}

                {activeTab === 'profile' && (
                  <form onSubmit={handleSave} className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-3">Personal Profile</h3>
                    
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name</label>
                      <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 font-medium"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email Address</label>
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 font-medium"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Bio</label>
                      <textarea
                        rows={3}
                        value={profile.bio}
                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Daily Study Goal (Minutes)</label>
                      <select
                        value={profile.goal}
                        onChange={(e) => setProfile({ ...profile, goal: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 font-medium"
                      >
                        <option value="30">30 Minutes / Day</option>
                        <option value="45">45 Minutes / Day</option>
                        <option value="60">60 Minutes / Day (Recommended)</option>
                        <option value="90">90 Minutes / Day</option>
                      </select>
                    </div>

                    <div className="pt-4 border-t">
                      <Button type="submit" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md flex items-center gap-2">
                        <FaSave /> Save Changes
                      </Button>
                    </div>
                  </form>
                )}

                {activeTab === 'security' && (
                  <form onSubmit={handleSave} className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-3">Password & Security</h3>
                    
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Current Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">New Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                      />
                    </div>

                    <div className="pt-4 border-t">
                      <Button type="submit" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md flex items-center gap-2">
                        <FaShieldAlt /> Update Password
                      </Button>
                    </div>
                  </form>
                )}

                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-3">Notification Preferences</h3>

                    <div className="space-y-4">
                      {[
                        { key: 'emailReminders', title: 'Daily Study Reminders', desc: 'Get daily emails to keep your learning streak active.' },
                        { key: 'weeklyReport', title: 'Weekly Progress Report', desc: 'Receive a weekly summary of your XP and completed modules.' },
                        { key: 'courseUpdates', title: 'New Course & Content Alerts', desc: 'Be notified when new courses or lessons are released.' },
                      ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-200/80">
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                          </div>
                          <input
                            type="checkbox"
                            checked={notifications[item.key]}
                            onChange={(e) => setNotifications({ ...notifications, [item.key]: e.target.checked })}
                            className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500 cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'plan' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-3">Subscription Plan</h3>
                    
                    <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-900 to-teal-900 text-white shadow-xl space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="px-3 py-1 bg-amber-400 text-gray-950 font-extrabold text-xs rounded-full uppercase tracking-wider">Active Plan</span>
                          <h4 className="text-2xl font-extrabold mt-2">CodeLearn Pro Student</h4>
                        </div>
                        <FaCrown className="text-amber-400 text-3xl" />
                      </div>
                      <p className="text-xs text-emerald-100/90 leading-relaxed">
                        You have full access to all 500+ courses, interactive code playgrounds, quizzes, and certificates.
                      </p>
                      <p className="text-xs text-emerald-200 font-semibold">Renews on August 15, 2026</p>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>
    </div>
  );
};

export default Settings;
