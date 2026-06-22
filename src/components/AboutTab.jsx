import React from 'react';
import { User, ShieldCheck, Sparkles } from 'lucide-react';

const AboutTab = () => {
  return (
    <div className="tab-content about-grid">
      <section>
        <h2 className="section-title">
          <User size={20} />
          <span>Professional Biography</span>
        </h2>
        <p className="paragraph">
          Results-driven Quality Assurance Engineer with 3.8 years of hands-on experience in manual testing, 
          functional validation, and technical release quality mitigation. Highly skilled at engineering comprehensive 
          system integrity across enterprise-grade multi-channel software, encompassing web, native mobile apps, 
          physical in-store kiosks, POS terminals, and kitchen dispatch frameworks.
        </p>
      </section>

      <section className="info-banner">
        <h3 className="info-banner-title flex items-center gap-2">
          <ShieldCheck size={16} className="inline mr-1 text-cyan-400" style={{ color: 'var(--accent-secondary)' }} />
          Domain Specialization
        </h3>
        <p className="info-banner-text">
          Deep expertise in the FoodTech and Quick Service Restaurant (QSR) sectors, verifying complex checkout loops, 
          real-time operational states, and kitchen dispatch integrations.
        </p>
      </section>

      <section>
        <h2 className="section-title">
          <Sparkles size={20} />
          <span>Future-Proof Focus</span>
        </h2>
        <p className="paragraph">
          Actively bridging traditional software testing with AI-powered workflow validation, prompt engineering, 
          and LLM output evaluation. Passionate about ensuring AI-driven systems are contextually accurate, 
          safe from exploit vectors, and output logically sound results.
        </p>
      </section>
    </div>
  );
};

export default AboutTab;
