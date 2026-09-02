import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3 }}
      >
        <span className="label-section">{portfolioData.projects.label}</span>
        <h2 className="heading-section">{portfolioData.projects.title}</h2>
        
        <div className="space-y-12">
          {portfolioData.projects.items.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="card p-8 md:p-10 border-l-4 border-l-primary/50 relative overflow-hidden group"
            >
              {/* Subtle gradient background effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <span className="text-primary font-mono text-sm tracking-wide mb-2 block">
                      {project.type}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                  </div>
                  
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-textMuted hover:text-primary transition-colors p-2 bg-background border border-borderSubtle rounded-full self-start"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>

                <div className="text-textMuted text-base mb-8 whitespace-pre-line leading-relaxed max-w-4xl">
                  {project.description}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {project.features && (
                    <div>
                      <h4 className="text-white font-medium text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
                        <Activity size={16} className="text-primary" /> Features
                      </h4>
                      <div className="flex flex-col gap-4">
                        {project.features.map((feature: any, i: number) => (
                          <div key={i} className="pl-4 border-l border-borderSubtle relative">
                            <div className="absolute w-1.5 h-1.5 bg-primary/50 rounded-full -left-[4px] top-1.5" />
                            <span className="text-white font-medium block text-sm mb-0.5">{feature.title}</span>
                            <span className="text-sm text-textMuted/80">{feature.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {(project.contribution || project.hardware) && (
                    <div>
                      <h4 className="text-white font-medium text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
                        <Activity size={16} className="text-primary" /> {project.contribution ? 'Contribution' : 'Hardware'}
                      </h4>
                      <div className="flex flex-col gap-4">
                        {(project.contribution || project.hardware).map((item: any, i: number) => (
                          <div key={i} className="pl-4 border-l border-borderSubtle relative">
                            <div className="absolute w-1.5 h-1.5 bg-primary/50 rounded-full -left-[4px] top-1.5" />
                            <span className="text-white font-medium block text-sm mb-0.5">{item.title}</span>
                            <span className="text-sm text-textMuted/80">{item.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-borderSubtle/50">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
