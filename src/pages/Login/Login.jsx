import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaGithub, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import logo from '../../assets/logo.png';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save student session in localStorage
    const studentName = email.split('@')[0] || 'Jane Doe';
    const formattedName = studentName.charAt(0).toUpperCase() + studentName.slice(1);
    const userData = {
      name: formattedName,
      email: email,
      role: 'Student',
      enrolledCount: 3
    };

    localStorage.setItem('codelearn_user', JSON.stringify(userData));
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');

    setSuccessMsg('Login successful! Redirecting to student portal...');
    
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 800);
  };

  const handleSocialLogin = (provider) => {
    const userData = {
      name: `${provider} Developer`,
      email: `student@${provider.toLowerCase()}.com`,
      role: 'Student',
      enrolledCount: 4
    };

    localStorage.setItem('codelearn_user', JSON.stringify(userData));
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');

    setSuccessMsg(`Signed in with ${provider}! Redirecting...`);
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
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm">
            Sign in to continue your developer learning journey
          </p>
        </div>

        {/* Success Alert Banner */}
        {successMsg && (
          <div className="bg-emerald-500/10 border border-emerald-500/40 text-emerald-700 p-4 rounded-2xl flex items-center gap-3 text-xs font-bold shadow-md animate-fadeIn">
            <FaCheckCircle className="text-emerald-600 text-lg shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400 text-sm group-hover:text-emerald-500 transition-colors" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold placeholder-gray-400 transition-all"
                placeholder="student@codelearn.com"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-gray-700">
                Password
              </label>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Demo reset link sent to your email!'); }} className="text-xs font-semibold text-emerald-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaLock className="text-gray-400 text-sm group-hover:text-emerald-500 transition-colors" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-11 py-3 rounded-xl bg-white/80 border border-gray-200 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold placeholder-gray-400 transition-all"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-emerald-500 transition-colors cursor-pointer"
              >
                {showPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              defaultChecked
              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded cursor-pointer"
            />
            <label htmlFor="remember-me" className="ml-2.5 block text-xs font-medium text-gray-700 cursor-pointer">
              Remember me on this device
            </label>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Sign In to Dashboard</span>
            <FaArrowRight className="text-xs" />
          </button>
        </form>

        {/* Social Auth Buttons */}
        <div className="pt-2">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-white text-gray-400 font-semibold uppercase tracking-wider">
                Or Quick Login With
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <FaGoogle className="text-red-500 text-base" />
              <span className="text-xs font-bold text-gray-700">Google</span>
            </button>
            <button
              onClick={() => handleSocialLogin('GitHub')}
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <FaGithub className="text-gray-900 text-base" />
              <span className="text-xs font-bold text-gray-700">GitHub</span>
            </button>
          </div>
        </div>

        {/* Footer Link */}
        <p className="text-center text-xs text-gray-600 pt-2">
          Don't have a student account?{' '}
          <Link to="/register" className="font-bold text-emerald-600 hover:underline">
            Create Free Account
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;