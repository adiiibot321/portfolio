import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const CareerGoal: React.FC = () => {
  return (
    <section className="section-container pb-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3 }}
      >
        <div className="card p-10 md:p-16 text-center border-primary/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-50" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 text-primary rounded-full mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <Target size={40} />
            </div>
            
            <span className="label-section justify-center mb-2">{portfolioData.careerGoal.label}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{portfolioData.careerGoal.title}</h2>
            
            <p className="text-xl md:text-2xl text-textMain max-w-3xl mx-auto leading-relaxed">
              {portfolioData.careerGoal.text}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
