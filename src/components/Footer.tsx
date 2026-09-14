import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      className="bg-[#2B2118] text-[#F5EDE4] py-16 md:py-20 border-t border-[#4A3A2D]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Footer Grid */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-[#4A3A2D] gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-xs bg-[#F5EDE4] text-[#2B2118] font-display text-base font-bold flex items-center justify-center">
                {personalInfo.initials.replace('.', '')}
              </span>
              <span className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#F5EDE4]">
                {personalInfo.fullName}
              </span>
            </div>
            <p className="font-serif-editorial text-sm sm:text-base text-[#DCCBB8] italic">
              "Building. Learning. Creating."
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#3A2E23] hover:bg-[#4A3A2D] text-[#F5EDE4] rounded-xs transition-colors border border-[#4A3A2D]"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#3A2E23] hover:bg-[#4A3A2D] text-[#F5EDE4] rounded-xs transition-colors border border-[#4A3A2D]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-[#3A2E23] hover:bg-[#4A3A2D] text-[#F5EDE4] rounded-xs transition-colors border border-[#4A3A2D]"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-3 bg-[#3A2E23] hover:bg-[#4A3A2D] text-[#F5EDE4] border border-[#4A3A2D] text-xs font-mono font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & micro-tag */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#A89887] gap-4">
          <div>
            © 2026 {personalInfo.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>B.Tech Computer Science Engineering</span>
            <span>•</span>
            <span>Minimalist Editorial Portfolio</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
