import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3 }}
      >
        <span className="label-section">{portfolioData.education.label}</span>
        <h2 className="heading-section">{portfolioData.education.title}</h2>
        
        <div className="card p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group">
          <div className="p-4 bg-primary/10 text-primary rounded-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
            <GraduationCap size={40} />
          </div>
          
          <div className="w-full">
            <div className="flex flex-col md:flex-row md:justify-between mb-4 gap-2">
              <h3 className="text-2xl font-bold text-white">{portfolioData.education.degree}</h3>
              <span className="text-primary font-mono bg-primary/10 px-3 py-1 rounded-full self-start md:self-center text-sm">
                Expected {portfolioData.education.graduation}
              </span>
            </div>
            
            <p className="text-xl text-textMain mb-2">{portfolioData.education.institution}</p>
            <p className="text-textMuted mb-1 font-medium">{portfolioData.education.specialization}</p>
            <p className="text-textMuted/70 mb-6">{portfolioData.education.currentYear}</p>
            
            <div className="pt-6 border-t border-borderSubtle">
              <p className="text-sm font-mono text-textMuted uppercase tracking-wider mb-2">Additional Learning</p>
              <p className="text-textMain">{portfolioData.education.additionalLearning}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
