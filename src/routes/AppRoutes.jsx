import { Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import AuthLayout from '../layouts/AuthLayout';

// Public Pages
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Courses from '../pages/Courses/Courses';
import Projects from '../pages/Projects/Projects';
import Certification from '../pages/Certification/Certification';
import CourseDetails from '../pages/CourseDetails/CourseDetails';
import Tutorials from '../pages/Tutorials/Tutorials';
import Practice from '../pages/Practice/Practice';
import Test from '../pages/Test/Test';
import ProjectDetails from '../pages/ProjectDetails/ProjectDetails';

// Auth Pages
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

// Dashboard & User Pages
import Dashboard from '../pages/Dashboard/Dashboard';
import Playground from '../pages/Playground/Playground';
import Leaderboard from '../pages/Leaderboard/Leaderboard';
import Settings from '../pages/Settings/Settings';
import HelpCommunity from '../pages/Community/HelpCommunity';
import MyCourses from '../pages/MyCourses/MyCourses';
import MyProjectsTasks from '../pages/MyProjectsTasks/MyProjectsTasks';
import MyCertifications from '../pages/MyCertifications/MyCertifications';
import CertificationDetails from '../pages/CertificationDetails/CertificationDetails';
import Notification from '../pages/Notification/Notification';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Main Layout Routes (Responsive 100% Full-Width Pages) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/certification/:certId" element={<CertificationDetails />} />
        <Route path="/certification-details" element={<CertificationDetails />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
        <Route path="/coursedetails" element={<CourseDetails />} />
      </Route>

      {/* Dashboard Layout Routes */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/my-projects-tasks" element={<MyProjectsTasks />} />
        <Route path="/myproject-task" element={<MyProjectsTasks />} />
        <Route path="/my-certifications" element={<MyCertifications />} />
        <Route path="/my-certificates" element={<MyCertifications />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/community" element={<HelpCommunity />} />
        <Route path="/help" element={<HelpCommunity />} />
      </Route>

      {/* Fullscreen Apps & Proctored Test */}
      <Route path="/playground" element={<Playground />} />
      <Route path="/test" element={<Test />} />

      {/* Fallback */}
      <Route path="*" element={<div className="p-24 text-center"><h1 className="text-3xl font-bold">404 - Page Not Found</h1></div>} />
    </Routes>
  );
};

export default AppRoutes;