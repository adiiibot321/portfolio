import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-container pt-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="label-section justify-center">{portfolioData.contact.label}</span>
        <h2 className="heading-xl mb-6">{portfolioData.contact.title}</h2>
        
        <p className="text-xl text-textMuted max-w-2xl mx-auto mb-12">
          {portfolioData.contact.text}
        </p>
        
        <a 
          href={`mailto:${portfolioData.contact.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary/90 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 group text-lg"
        >
          <Mail size={24} />
          <span>Say Hello</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="flex justify-center gap-6 mt-16">
          <a 
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-surface border border-borderSubtle rounded-full text-textMuted hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-surface border border-borderSubtle rounded-full text-textMuted hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
