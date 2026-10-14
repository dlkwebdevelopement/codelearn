import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash, FaGoogle, FaGithub, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import logo from '../../assets/logo.png';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`.trim() || 'New Student';

    const userData = {
      name: fullName,
      email: email,
      role: 'Student',
      enrolledCount: 1
    };

    localStorage.setItem('codelearn_user', JSON.stringify(userData));
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');

    setSuccessMsg('Account created successfully! Welcome to CodeLearn...');
    
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6 group">
            <img
              src={logo}
              alt="CodeLearn Logo"
              className="h-16 w-auto mx-auto transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            Create Student Account
          </h1>
          <p className="text-gray-500 text-sm">
            Start your coding journey with CodeLearn today
          </p>
        </div>

        {/* Success Alert Banner */}
        {successMsg && (
          <div className="bg-emerald-500/10 border border-emerald-500/40 text-emerald-700 p-4 rounded-2xl flex items-center gap-3 text-xs font-bold shadow-md animate-fadeIn">
            <FaCheckCircle className="text-emerald-600 text-lg shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                required
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="Jane"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-emerald-500/30 outline-none text-xs font-semibold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                required
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder="Doe"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-emerald-500/30 outline-none text-xs font-semibold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="jane.doe@example.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-emerald-500/30 outline-none text-xs font-semibold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-emerald-500/30 outline-none text-xs font-semibold pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-emerald-500"
              >
                {showPassword ? <FaEyeSlash className="text-xs" /> : <FaEye className="text-xs" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer mt-2"
          >
            Create Account & Jump to Portal →
          </button>
        </form>

        <p className="text-center text-xs text-gray-600 pt-2">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-emerald-600 hover:underline">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;