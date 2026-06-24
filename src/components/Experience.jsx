import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const items = [
    {
      type: 'experience',
      icon: Briefcase,
      title: 'QA Engineer / Software Tester',
      subtitle: 'Sune Solutions Pvt Ltd',
      date: 'Aug 2022 - Present',
      bullets: [
        'Owned end-to-end user workflow execution, defect lifecycle documentation, and platform releases for highly complex customer food-ordering ecosystems across Web and Mobile channels, leveraging 4 years of QA experience.',
        'Automated functional test cases for the Papa Johns website and mobile applications using Tricentis Tosca, improving regression test coverage.',
        'Validated checkout systems by verifying payment method integrity (payment gateways, credit cards, checkout transaction states) to ensure zero checkout failures.',
        'Tested CRM push notifications and in-app message triggers on native iOS and Android apps, checking device tokens and payload parsing.',
        'Conducted Gen AI testing audits (prompt validation, hallucination checks, model input safety boundaries) as a Gen AI Test Engineer.',
        'Designed test scripts tracking multi-platform application states (Web, Mobile, custom physical Kiosks, and POS hardware) with full capability to test and certify any website or mobile app.',
        'Conducted REST API testing via Postman to validate integration endpoints and backend microservices.'
      ]
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Bachelor of Technology (B.Tech)',
      subtitle: 'Mahatma Gandhi Institute of Technology',
      date: 'ECE (Electronics & Communication Engineering)',
      bullets: [
        'Graduated with a 72% Aggregate.',
        'Located in Hyderabad, India.',
        'Focused on digital electronics, signal processing, and communication networks.'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <h2 className="section-header-title">Experience & Education</h2>
          <div className="section-header-line"></div>
          <p className="section-header-subtitle">
            A chronological timeline of my professional career, educational benchmarks, and growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-list">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="timeline-card reveal-on-scroll"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Connecting Dot */}
                <div className="timeline-dot"></div>

                <div className="glass-card hover-lift">
                  <div className="timeline-card-header">
                    <div>
                      <h3 className="timeline-card-title">{item.title}</h3>
                      <span className="timeline-card-subtitle">{item.subtitle}</span>
                    </div>
                    <span className="timeline-card-date">{item.date}</span>
                  </div>

                  <ul className="timeline-bullets">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="timeline-bullet">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
