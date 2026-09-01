import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="label-section">{portfolioData.achievements.label}</span>
        <h2 className="heading-section">{portfolioData.achievements.title}</h2>
        
        <div className="card p-8 md:p-10">
          <ul className="space-y-6">
            {portfolioData.achievements.items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="p-2 bg-primary/10 text-primary rounded-lg mt-1 shrink-0">
                  <Trophy size={20} />
                </div>
                <p className="text-textMain text-lg leading-relaxed">{item}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
