import React from 'react';
import { User, Briefcase, Code } from 'lucide-react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume & Toolkit', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
  ];

  return (
    <nav className="tabs-header">
      {tabs.map((tab) => {
        const IconComponent = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            <IconComponent size={16} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;
