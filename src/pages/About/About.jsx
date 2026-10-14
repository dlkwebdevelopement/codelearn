import { motion } from 'framer-motion';
import Hero3DAnimation from '../../components/ui/Hero3DAnimation';
import {
  FaRocket, FaGraduationCap, FaUsers, FaCode, FaAward,
  FaCheckCircle, FaHeart, FaStar, FaTrophy, FaMedal,
  FaGlobe, FaBookOpen, FaVideo, FaCertificate, FaShieldAlt,
  FaClock, FaArrowRight, FaQuoteLeft, FaQuoteRight,
  FaTwitter, FaLinkedin, FaGithub, FaYoutube
} from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaUsers, value: '50,000+', label: 'Active Students' },
    { icon: FaGraduationCap, value: '500+', label: 'Certifications' },
    { icon: FaCode, value: '200+', label: 'Courses' },
    { icon: FaGlobe, value: '100+', label: 'Countries' },
  ];

  const features = [
    {
      icon: FaBookOpen,
      title: 'Expert-Led Curriculum',
      description: 'All courses are designed and taught by industry experts with years of practical experience.',
      color: '#10B981'
    },
    {
      icon: FaVideo,
      title: 'Interactive Learning',
      description: 'Learn with hands-on projects, quizzes, and real-world exercises that reinforce your skills.',
      color: '#3B82F6'
    },
    {
      icon: FaCertificate,
      title: 'Certified Skills',
      description: 'Earn recognized certifications that validate your expertise and boost your career.',
      color: '#8B5CF6'
    },
    {
      icon: FaClock,
      title: 'Learn at Your Pace',
      description: 'Access course materials 24/7 and learn at your own speed with lifetime access.',
      color: '#F59E0B'
    },
    {
      icon: FaShieldAlt,
      title: 'Quality Guaranteed',
      description: 'All courses undergo rigorous quality checks to ensure you get the best learning experience.',
      color: '#EF4444'
    },
    {
      icon: FaHeart,
      title: 'Community Support',
      description: 'Join a vibrant community of learners and get support from peers and instructors.',
      color: '#EC4899'
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Passionate about making tech education accessible to everyone.',
      image: 'https://ui-avatars.com/api/?name=Sarah+Johnson&size=100&background=10B981&color=fff',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Michael Chen',
      role: 'Head of Curriculum',
      bio: '10+ years of experience in software development and education.',
      image: 'https://ui-avatars.com/api/?name=Michael+Chen&size=100&background=3B82F6&color=fff',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Instructor',
      bio: 'Full-stack developer passionate about teaching and mentoring.',
      image: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&size=100&background=8B5CF6&color=fff',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'David Kim',
      role: 'Community Manager',
      bio: 'Building and nurturing our global community of learners.',
      image: 'https://ui-avatars.com/api/?name=David+Kim&size=100&background=F59E0B&color=fff',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
  ];

  const testimonials = [
    {
      name: 'John Doe',
      role: 'Software Developer',
      content: 'This platform completely transformed my career. The structured courses and practical projects gave me the confidence to apply for my dream job.',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=John+Doe&size=100&background=10B981&color=fff'
    },
    {
      name: 'Jane Smith',
      role: 'Data Scientist',
      content: 'The data analytics certification was exactly what I needed. The hands-on approach and expert guidance made complex topics easy to understand.',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=Jane+Smith&size=100&background=3B82F6&color=fff'
    },
    {
      name: 'Alex Johnson',
      role: 'Full Stack Developer',
      content: 'From beginner to job-ready in just 6 months. The comprehensive curriculum and supportive community made all the difference.',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=Alex+Johnson&size=100&background=8B5CF6&color=fff'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 flex flex-col lg:flex-row min-h-[400px] lg:min-h-[450px] w-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />
        </div>

        {/* Left Content */}
        <div className="relative z-10 w-full lg:w-1/2 px-8 md:px-16 py-10 md:py-14 flex flex-col justify-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <FaRocket className="text-amber-300" />
              <span className="text-white/90 text-sm font-medium">About Us</span>
              <span className="w-1 h-1 bg-white/30 rounded-full"></span>
              <span className="text-amber-300 text-sm font-bold">Empowering Learners Worldwide</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold !text-yellow-400 mb-4">
              Shaping the Future
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-emerald-200">
                of Tech Education
              </span>
            </h1>

            <p className="text-base text-emerald-100/90 max-w-xl">
              We're on a mission to make quality tech education accessible, affordable, and effective for everyone, everywhere.
            </p>
          </motion.div>
        </div>

        {/* Right Content - 3D Animation */}
        <Hero3DAnimation />
      </header>

      {/* Stats Section */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl p-6 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-emerald-500 text-2xl" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To democratize tech education by providing high-quality, accessible, and affordable learning experiences that empower individuals to build successful careers in technology.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Industry-relevant curriculum designed with experts</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Hands-on projects and real-world applications</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Recognized certifications that employers trust</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Supportive community and mentorship</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-3xl p-8 border border-emerald-200"
            >
              <FaQuoteLeft className="text-emerald-300 text-4xl mb-4" />
              <p className="text-gray-700 text-xl leading-relaxed font-medium italic">
                "The beautiful thing about learning is that nobody can take it away from you. We're here to make that learning journey extraordinary."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                  <FaHeart className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">— Our Promise</p>
                  <p className="text-sm text-gray-500">Every learner, every step of the way</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Learn With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've built a learning platform that combines expert instruction, practical experience, and community support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <Icon className="text-2xl" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate educators and industry experts dedicated to your success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-emerald-100"
                  />
                  <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                  <p className="text-sm text-emerald-600 font-medium">{member.role}</p>
                  <p className="text-sm text-gray-500 mt-2">{member.bio}</p>
                  <div className="flex justify-center gap-3 mt-4">
                    <a href={member.social.twitter} className="text-gray-400 hover:text-emerald-500 transition-colors">
                      <FaTwitter />
                    </a>
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-emerald-500 transition-colors">
                      <FaLinkedin />
                    </a>
                    <a href={member.social.github} className="text-gray-400 hover:text-emerald-500 transition-colors">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-emerald-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from real learners who transformed their careers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-12 text-center shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of learners who have transformed their careers with our courses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Explore Courses
                <FaArrowRight className="text-sm" />
              </button>
              <button className="px-8 py-3 bg-emerald-500/30 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;