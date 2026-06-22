import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Tabs from './components/Tabs';
import AboutTab from './components/AboutTab';
import ResumeTab from './components/ResumeTab';
import ProjectsTab from './components/ProjectsTab';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.glass-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutTab />;
      case 'resume':
        return <ResumeTab />;
      case 'projects':
        return <ProjectsTab />;
      default:
        return <AboutTab />;
    }
  };

  return (
    <>
      {/* Background ambient glowing elements */}
      <div className="ambient-glow-container">
        <div className="glow-blob glow-blob-1"></div>
        <div className="glow-blob glow-blob-2"></div>
        <div className="glow-blob glow-blob-3"></div>
      </div>

      {/* Main layout container */}
      <div className="app-wrapper">
        <main className="main-grid">
          {/* Left Column (Sticky Sidebar) */}
          <Sidebar />

          {/* Right Column (Dynamic Tabs Window) */}
          <div className="flex flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card">
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
              
              {/* Tab Content Panel */}
              <div role="tabpanel" id={`${activeTab}-panel`} aria-labelledby={`${activeTab}-tab`}>
                {renderTabContent()}
              </div>
            </div>
            
            {/* Footer */}
            <footer className="footer-text">
              <p>© {new Date().getFullYear()} Banavath Kalyan. All Rights Reserved. Crafted with React & Vite.</p>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
