import { motion } from 'framer-motion';
import { Eye, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Resume = () => {
  return (
    <section id="resume" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3 }}
      >
        <span className="label-section">{portfolioData.resume.label}</span>
        <h2 className="heading-section mb-4">{portfolioData.resume.title}</h2>
        
        <p className="text-textMuted mb-8 text-lg">
          {portfolioData.resume.description}
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <a 
            href={portfolioData.resume.fileUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            <Eye size={18} />
            <span>View CV</span>
          </a>
          
          <a 
            href={portfolioData.resume.fileUrl} 
            download="Aryan_Singh_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-surface border border-borderSubtle text-textMain font-medium rounded-lg hover:border-primary/50 hover:text-primary transition-colors"
          >
            <Download size={18} />
            <span>Download CV</span>
          </a>
        </div>

        <div className="card w-full h-[800px] overflow-hidden bg-[#2a2a2a] p-2 md:p-4 rounded-xl border border-borderSubtle">
          <iframe 
            src={`${portfolioData.resume.fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-full rounded-lg bg-white"
            title="Resume"
          />
        </div>
      </motion.div>
    </section>
  );
};
