import React from 'react';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-borderSubtle bg-background/50 py-8 text-center text-textMuted text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          &copy; {new Date().getFullYear()} {portfolioData.hero.name}. All rights reserved.
        </p>
        <p>
          Designed & Built with <span className="text-primary font-medium">React & Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};
