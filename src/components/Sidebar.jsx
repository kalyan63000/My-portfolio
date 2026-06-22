import React from 'react';
import { Mail, Phone, MapPin, Terminal } from 'lucide-react';

const LinkedinIcon = ({ size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-linkedin"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Sidebar = () => {
  return (
    <aside className="sidebar-sticky">
      <div className="glass-card hover-lift">
        {/* Avatar Graphic */}
        <div className="profile-avatar-container">
          <div className="profile-avatar">
            <Terminal className="profile-avatar-svg" />
          </div>
        </div>

        {/* Profile Info */}
        <h1 className="profile-name">BANAVATH KALYAN</h1>
        <div className="profile-title">
          QA Engineer
          <span>AI & Prompt Engineering Specialist</span>
        </div>

        <div className="divider"></div>

        {/* Contact List */}
        <div className="contact-list">
          <a href="mailto:banavathkalyannayak19@gmail.com" className="contact-item" target="_blank" rel="noopener noreferrer">
            <div className="contact-icon-wrapper">
              <Mail size={16} />
            </div>
            <div className="contact-text">
              banavathkalyannayak19@gmail.com
            </div>
          </a>

          <a href="tel:+916300681493" className="contact-item">
            <div className="contact-icon-wrapper">
              <Phone size={16} />
            </div>
            <div className="contact-text">
              +91 6300681493
            </div>
          </a>

          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <MapPin size={16} />
            </div>
            <div className="contact-text">
              Hyderabad, India
            </div>
          </div>
        </div>

        {/* Social Button */}
        <a 
          href="https://www.linkedin.com/in/banavath-kalyan-3bb34418a" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="linkedin-btn"
        >
          <LinkedinIcon size={16} />
          <span>LinkedIn Connection</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
