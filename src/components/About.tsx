import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3 }}
      >
        <span className="label-section">{portfolioData.about.label}</span>
        <h2 className="heading-section">{portfolioData.about.title}</h2>
        
        <div className="card p-8 md:p-10">
          <div className="space-y-6 text-textMuted text-lg leading-relaxed">
            <p>{portfolioData.about.text1}</p>
            
            <div>
              <p className="mb-3 text-white font-medium">I am interested in:</p>
              <div className="flex flex-wrap gap-2">
                {portfolioData.about.interests.map((interest, index) => (
                  <span key={index} className="badge">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            <p>{portfolioData.about.text2}</p>
            <p>{portfolioData.about.text3}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
