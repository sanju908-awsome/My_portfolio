import React from 'react';
import { Download, ArrowUpRight, Sparkles, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeCTAProps {
  onOpenResume: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onOpenResume }) => {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="resume-cta"
      className="relative py-24 md:py-36 border-b border-[#E2D6C7] bg-[#ECE1D4]/70 overflow-hidden"
    >
      {/* Background oversized decorative text */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-10 select-none hidden lg:block">
        <span className="font-display text-[200px] font-black text-[#4A3A2D] leading-none tracking-tighter">
          RESUME
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="max-w-3xl">
          {/* Metadata label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5EDE4] text-[#8C7965] border border-[#D4C4B2] text-xs font-mono uppercase tracking-widest rounded-xs mb-6">
            <Sparkles className="w-3 h-3 text-[#8C7965]" />
            <span>OPPORTUNITY COLLABORATION</span>
          </div>

          {/* Huge Editorial Headline */}
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-[#4A3A2D] leading-[0.95] mb-6">
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            <span className="text-[#8C7965]">USEFUL.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-[#7B6B5B] leading-relaxed font-light mb-10 max-w-xl">
            Interested in my work, projects, or technical journey? I am always open to discussing new engineering challenges, hackathons, and software opportunities.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              id="resume-cta-view-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#4A3A2D] text-[#F5EDE4] text-xs font-semibold uppercase tracking-widest rounded-xs transition-all duration-200 hover:bg-[#32251B] hover:translate-y-[-2px] hover:shadow-md cursor-pointer active:translate-y-0"
            >
              <FileText className="w-4 h-4 text-[#DCCBB8]" />
              <span>Download / View Resume</span>
              <Download className="w-4 h-4" />
            </button>

            <button
              id="resume-cta-contact-btn"
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#F5EDE4] text-[#4A3A2D] border border-[#D4C4B2] text-xs font-semibold uppercase tracking-widest rounded-xs transition-all duration-200 hover:bg-[#FBF8F4] hover:border-[#8C7965] cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-[#8C7965]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
