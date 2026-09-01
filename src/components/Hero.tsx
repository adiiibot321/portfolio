import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-surface shadow-[0_0_30px_rgba(59,130,246,0.3)] mx-auto relative group">
            {/* The prompt requested the actual uploaded photo. Since we don't have it on disk, 
                we'll use a placeholder that the user will replace, or maybe there's one in public/. 
                We will refer to /profile.jpg in public. */}
            <img 
              src={portfolioData.hero.image} 
              alt={portfolioData.hero.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                // Fallback if image doesn't exist yet
                (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Aryan+Singh&background=171717&color=3b82f6&size=200";
              }}
            />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-4"
        >
          {portfolioData.hero.name}
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-primary mb-6"
        >
          {portfolioData.hero.title}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-textMuted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {portfolioData.hero.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a 
            href={portfolioData.hero.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-surface border border-borderSubtle rounded-full text-white hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
          <a 
            href={portfolioData.hero.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-surface border border-borderSubtle rounded-full text-white hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a 
            href={`mailto:${portfolioData.hero.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            <Mail size={20} />
            <span>Contact</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
