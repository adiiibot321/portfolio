import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Wrench, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Icons = [Code2, Cpu, Wrench, Users];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3 }}
      >
        <span className="label-section">{portfolioData.skills.label}</span>
        <h2 className="heading-section">{portfolioData.skills.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.skills.categories.map((category, index) => {
            const IconComponent = Icons[index % Icons.length];
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="card card-hover p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 text-sm font-mono text-textMuted">
                  {category.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="px-3 py-1 bg-background border border-borderSubtle rounded-md">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
