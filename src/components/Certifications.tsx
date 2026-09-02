import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Certifications: React.FC = () => {
  return (
    <section id="certificates" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3 }}
      >
        <span className="label-section">{portfolioData.certifications.label}</span>
        <h2 className="heading-section">{portfolioData.certifications.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.certifications.items.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="card card-hover p-6 flex items-start gap-4"
            >
              <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0 mt-1">
                <Award size={24} />
              </div>
              
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white leading-snug">{cert.title}</h3>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-textMuted hover:text-primary transition-colors p-1"
                      title="View Certificate"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  )}
                </div>
                <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-textMuted font-mono">
                  {cert.details && <span>{cert.details}</span>}
                  {cert.date && <span>{cert.date}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
