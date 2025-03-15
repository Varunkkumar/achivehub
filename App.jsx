import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Auth from './components/Auth';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import ProfilePreview from './components/ProfilePreview';
import NetworkSidebar from './components/NetworkSidebar';
import PostCreator from './components/PostCreator';
import NewsWidget from './components/NewsWidget';
import AdWidget from './components/AdWidget';
import './styles/linkedin.css';

function App() {
  return (
    <div className="app-root">
      <AuthProvider>
        <Router>
          <Navbar />
          <main className="linkedin-container">
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/feed" element={
                <div className="linkedin-layout">
                  <div className="left-sidebar">
                    <ProfilePreview />
                    <NetworkSidebar />
                  </div>
                  <div className="main-feed">
                    <PostCreator />
                    <Feed />
                  </div>
                  <div className="right-sidebar">
                    <NewsWidget />
                    <AdWidget />
                  </div>
                </div>
              } />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<h2>Page Not Found</h2>} />
            </Routes>
          </main>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
