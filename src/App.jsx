import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/ui/ScrollToTop';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  
  // These routes have their own layouts or are full-screen
  const isFullScreenLayout = location.pathname.startsWith('/dashboard') || 
                             location.pathname.startsWith('/my-courses') ||
                             location.pathname.startsWith('/my-projects-tasks') ||
                             location.pathname.startsWith('/myproject-task') ||
                             location.pathname.startsWith('/my-certificates') ||
                             location.pathname.startsWith('/my-certifications') ||
                             location.pathname.startsWith('/notifications') ||
                             location.pathname.startsWith('/notification') ||
                             location.pathname.startsWith('/leaderboard') ||
                             location.pathname.startsWith('/settings') ||
                             location.pathname.startsWith('/community') ||
                             location.pathname.startsWith('/help') ||
                             location.pathname.startsWith('/playground') ||
                             location.pathname.startsWith('/test') ||
                             location.pathname.startsWith('/login') ||
                             location.pathname.startsWith('/register') ||
                             location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />

      {!isFullScreenLayout && <Navbar />}
      
      <main className="grow">
        <AppRoutes />
      </main>

      {!isFullScreenLayout && <Footer />}
    </div>
  );
}

export default App;
