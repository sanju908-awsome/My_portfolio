import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, MapPin, Terminal, Code2, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden border-b border-[#E2D6C7]"
    >
      {/* Editorial subtle grid background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 editorial-grid-lines" />

      {/* Top Editorial Metadata Banner */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-8 border-b border-[#E2D6C7] text-xs font-mono text-[#7B6B5B]">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#8C7965] font-semibold">
              ACADEMIC DISCIPLINE
            </span>
            <span className="text-[#4A3A2D] font-medium mt-1">{personalInfo.educationBadge}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#8C7965] font-semibold">
              LOCATION & TIMEZONE
            </span>
            <span className="text-[#4A3A2D] font-medium mt-1 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#8C7965]" />
              {personalInfo.location} • IST (UTC+5:30)
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#8C7965] font-semibold">
              CORE FOCUS
            </span>
            <span className="text-[#4A3A2D] font-medium mt-1">Full Stack • AI/ML • CV</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#8C7965] font-semibold">
              AVAILABILITY
            </span>
            <span className="text-[#4A3A2D] font-medium mt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              {personalInfo.status}
            </span>
          </div>
        </div>

        {/* Main Hero Layout: Massive Editorial Typography & Editorial Visual Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-10 md:pt-16">
          
          {/* Typography Column (Col 1 to 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Monogram tag & subtle category marker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ECE1D4] text-[#4A3A2D] text-xs font-mono uppercase tracking-widest rounded-sm w-fit mb-4">
              <Sparkles className="w-3 h-3 text-[#8C7965]" />
              <span>EDITORIAL DEVELOPER PORTFOLIO</span>
            </div>

            {/* Oversized Name Typography */}
            <h1 className="font-display tracking-tight leading-[0.9] text-[#4A3A2D] uppercase font-bold text-6xl sm:text-7xl md:text-8xl xl:text-9xl mb-3">
              SANJAY
              <br />
              <span className="text-[#8C7965]">KUMAR</span>
            </h1>

            {/* Sub-headline in condensed display */}
            <div className="font-display tracking-wide uppercase text-2xl sm:text-3xl md:text-4xl text-[#4A3A2D] font-medium pb-4 border-b border-[#E2D6C7] mb-6">
              COMPUTER SCIENCE DEVELOPER
            </div>

            {/* Supporting Pitch Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#7B6B5B] leading-relaxed max-w-2xl font-light mb-8">
              Computer Science Engineering student building practical solutions through code, AI, and modern web architectures. Focused on turning complex problems into functional, production-ready systems.
            </p>

            {/* CTAs and Direct Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-view-work-btn"
                onClick={() => handleScrollTo('projects')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#4A3A2D] text-[#F5EDE4] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 hover:bg-[#32251B] hover:translate-y-[-2px] hover:shadow-md cursor-pointer active:translate-y-0"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#ECE1D4] text-[#4A3A2D] border border-[#D4C4B2] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 hover:bg-[#E2D6C7] hover:border-[#8C7965] cursor-pointer"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 text-[#8C7965]" />
              </button>

              {/* Social Icon Pills */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#ECE1D4]/70 border border-[#E2D6C7] text-[#4A3A2D] rounded-sm hover:bg-[#4A3A2D] hover:text-[#F5EDE4] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#ECE1D4]/70 border border-[#E2D6C7] text-[#4A3A2D] rounded-sm hover:bg-[#4A3A2D] hover:text-[#F5EDE4] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 bg-[#ECE1D4]/70 border border-[#E2D6C7] text-[#4A3A2D] rounded-sm hover:bg-[#4A3A2D] hover:text-[#F5EDE4] transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Editorial Visual Column (Col 8 to 12) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Decorative Offset Frame */}
            <div className="relative w-full max-w-md">
              <div className="absolute -top-3 -right-3 w-full h-full border border-[#8C7965]/40 rounded-sm pointer-events-none" />
              
              {/* Main Visual Card */}
              <div className="relative bg-[#FBF8F4] border border-[#E2D6C7] p-6 rounded-sm shadow-xs overflow-hidden">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E2D6C7] text-xs font-mono text-[#7B6B5B]">
                  <span className="flex items-center gap-1.5 font-semibold text-[#4A3A2D]">
                    <Terminal className="w-3.5 h-3.5 text-[#8C7965]" />
                    SK.DEV // PORTRAIT
                  </span>
                  <span className="uppercase tracking-widest text-[10px]">
                    EXP.01 / 2026
                  </span>
                </div>

                {/* Portrait Canvas / Editorial Cutout Frame with Text Elements Behind */}
                <div className="relative mt-4 aspect-4/5 w-full bg-[#ECE1D4] border border-[#D4C4B2] rounded-xs overflow-hidden flex flex-col justify-between p-5 sm:p-6">
                  
                  {/* Background Text Elements (Positioned BEHIND the cutout portrait) */}
                  <div className="absolute inset-0 pointer-events-none select-none z-0 p-5 flex flex-col justify-between overflow-hidden">
                    {/* Top Giant Watermark & Coordinates */}
                    <div className="flex justify-between items-start">
                      <span className="font-display text-8xl sm:text-9xl md:text-[130px] font-black text-[#D4C4B2]/55 leading-none tracking-tighter -mt-3 -ml-2">
                        SK.
                      </span>
                      <div className="text-right font-mono text-[9px] sm:text-[10px] tracking-widest uppercase text-[#8C7965]/70 pt-1">
                        COORD: 13.08° N<br />
                        80.27° E // CHN
                      </div>
                    </div>

                    {/* Middle Giant Editorial Typography running behind the subject */}
                    <div className="my-auto space-y-0.5 leading-[0.82] -mt-4">
                      <div className="font-display text-5xl sm:text-6xl font-black uppercase text-[#4A3A2D]/20 tracking-tighter">
                        SANJAY
                      </div>
                      <div className="font-display text-5xl sm:text-6xl font-black uppercase text-[#8C7965]/35 tracking-tighter">
                        KUMAR
                      </div>
                      <div className="font-display text-3xl sm:text-4xl font-black uppercase text-[#4A3A2D]/20 tracking-widest">
                        SANJU
                      </div>
                      <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#7B6B5B]/50 pt-2 font-semibold">
                        FULL-STACK • AI/ML • VISION
                      </div>
                    </div>

                    {/* Bottom Background Watermark */}
                    <div className="font-mono text-[11px] font-bold uppercase text-[#4A3A2D]/25 tracking-wider pb-1">
                      CODE. CREATE. SOLVE. BUILD.
                    </div>
                  </div>

                  {/* Foreground Portrait Cutout (Positioned IN FRONT of text elements) */}
                  <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none">
                    <picture className="w-full flex items-end justify-center">
                      <source srcSet="/sanjay-cutout.webp" type="image/webp" />
                      <img
                        src="/sanjay-cutout.png"
                        alt="Sanjay Kumar"
                        className="w-auto h-full max-h-[92%] object-contain object-bottom drop-shadow-[0_14px_24px_rgba(74,58,45,0.18)] transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </picture>
                  </div>

                  {/* Editorial overlay badges (Top) */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start text-xs font-mono">
                    <div className="bg-[#4A3A2D]/90 text-[#F5EDE4] backdrop-blur-xs px-2.5 py-1 border border-[#D4C4B2]/40 rounded-xs text-[10px] tracking-wider uppercase font-semibold shadow-xs">
                      CSE // LATERAL ENTRY
                    </div>
                    <div className="text-right text-[10px] tracking-widest uppercase bg-[#FAF6F1]/90 text-[#4A3A2D] border border-[#D4C4B2] px-2 py-0.5 rounded-xs font-semibold shadow-xs">
                      SANJU
                    </div>
                  </div>

                  {/* Editorial overlay info (Bottom) */}
                  <div className="absolute bottom-3 left-4 right-4 z-20 pt-2.5 border-t border-[#D4C4B2]/70 bg-[#ECE1D4]/80 backdrop-blur-xs px-2.5 py-1.5 rounded-xs flex items-center justify-between text-[11px] font-mono text-[#4A3A2D]">
                    <span className="font-semibold tracking-wide">SANJAY KUMAR</span>
                    <span className="flex items-center gap-1.5 text-emerald-700 font-semibold text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      SYS.ACTIVE
                    </span>
                  </div>
                </div>

                {/* Sub-quote metadata block */}
                <div className="mt-4 pt-3 border-t border-[#E2D6C7] flex items-center justify-between text-xs font-mono text-[#7B6B5B]">
                  <span>PHILOSOPHY:</span>
                  <span className="text-[#4A3A2D] font-medium italic font-serif">
                    "Building technology that solves real-world problems."
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Hero Bottom Running Ticker / Editorial Strip */}
      <div className="mt-12 md:mt-16 w-full border-y border-[#E2D6C7] bg-[#ECE1D4]/60 py-3 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#7B6B5B]">
          <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap py-1">
            <span className="font-semibold text-[#4A3A2D]">REACT</span>
            <span>•</span>
            <span className="font-semibold text-[#4A3A2D]">NODE.JS</span>
            <span>•</span>
            <span className="font-semibold text-[#4A3A2D]">EXPRESS</span>
            <span>•</span>
            <span className="font-semibold text-[#4A3A2D]">PYTHON</span>
            <span>•</span>
            <span className="font-semibold text-[#4A3A2D]">OPENCV</span>
            <span>•</span>
            <span className="font-semibold text-[#4A3A2D]">YOLO</span>
            <span>•</span>
            <span className="font-semibold text-[#4A3A2D]">MYSQL</span>
            <span>•</span>
            <span className="font-semibold text-[#4A3A2D]">SOCKET.IO</span>
            <span>•</span>
            <span className="font-semibold text-[#4A3A2D]">SCIKIT-LEARN</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[#4A3A2D] font-medium">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
