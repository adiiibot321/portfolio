import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3 }}
      >
        <span className="label-section">{portfolioData.experience.label}</span>
        <h2 className="heading-section">{portfolioData.experience.title}</h2>
        
        <div className="card p-8 md:p-10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="p-4 bg-primary/10 text-primary rounded-2xl shrink-0">
              <Briefcase size={32} />
            </div>
            
            <div className="w-full">
              <div className="flex flex-col md:flex-row md:justify-between mb-2 gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-white">{portfolioData.experience.role}</h3>
                <span className="text-primary font-mono text-sm self-start md:self-center">
                  {portfolioData.experience.date}
                </span>
              </div>
              
              <p className="text-lg text-textMain mb-1">{portfolioData.experience.organization}</p>
              <p className="text-sm font-mono text-textMuted mb-6 px-3 py-1 bg-background border border-borderSubtle rounded-full inline-block">
                {portfolioData.experience.type}
              </p>
              
              <p className="text-textMuted mb-6 leading-relaxed">
                {portfolioData.experience.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
