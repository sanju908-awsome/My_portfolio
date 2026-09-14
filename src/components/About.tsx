import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, Route, Sparkles, Cpu, Code2, Globe2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 border-b border-[#E2D6C7] bg-[#FBF8F4]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Editorial Numbering & Vertical Label Accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#E2D6C7] mb-12">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-[#8C7965] uppercase tracking-widest font-semibold">
              SECTION 02 //
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#4A3A2D]">
              ABOUT ME
            </h2>
          </div>
          <p className="mt-2 md:mt-0 font-mono text-xs text-[#7B6B5B] uppercase tracking-wider">
            BACKGROUND & ENGINEERING INTENT
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Large Editorial Typography & Visual Accent (Col 1 to 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative">
              {/* Giant decorative numeral */}
              <div className="font-display text-8xl sm:text-9xl font-black text-[#DCCBB8]/50 select-none leading-none -mb-8">
                02
              </div>
              <div className="relative z-10 font-display text-3xl sm:text-4xl text-[#4A3A2D] font-bold uppercase leading-tight tracking-tight">
                CODE.
                <br />
                CREATE.
                <br />
                SOLVE.
                <br />
                BUILD.
              </div>
            </div>

            {/* Editorial Quote Card */}
            <div className="mt-8 p-6 bg-[#F5EDE4] border border-[#E2D6C7] rounded-sm">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7965] block mb-2 font-semibold">
                CORE PHILOSOPHY
              </span>
              <blockquote className="font-serif-editorial text-lg sm:text-xl text-[#4A3A2D] italic leading-snug">
                "{personalInfo.headline}"
              </blockquote>
              <div className="mt-4 pt-4 border-t border-[#E2D6C7] flex items-center justify-between text-xs font-mono text-[#7B6B5B]">
                <span>SANJAY KUMAR</span>
                <span>CSE UNDERGRADUATE</span>
              </div>
            </div>
          </div>

          {/* RIGHT: About Paragraph & Structured Editorial Info Blocks (Col 6 to 12) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Lead Statement */}
            <h3 className="text-xl sm:text-2xl md:text-3xl text-[#4A3A2D] font-medium leading-snug mb-6">
              {personalInfo.aboutLead}
            </h3>

            {/* Detailed Body Narrative */}
            <div className="space-y-4 text-base sm:text-lg text-[#7B6B5B] leading-relaxed font-light mb-10">
              <p>
                My foundation began in technical polytechnic education, completing a <strong>Diploma in Computer Science Engineering</strong>. This instilled a hands-on, hardware-adjacent appreciation for memory, networking protocols, and procedural programming.
              </p>
              <p>
                Progressing into <strong>B.Tech Computer Science Engineering through lateral entry</strong>, I channel that practical bias into building full-stack platforms, exploring machine learning models, and testing computer vision heuristics on real-world datasets.
              </p>
              <p>
                I thrive in high-tempo collaborative environments like hackathons where rapid prototyping and tangible user value matter far more than theoretical perfection. For me, good engineering means bridging algorithmic logic with genuine operational utility.
              </p>
            </div>

            {/* Structured Editorial Info Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E2D6C7]">
              
              {/* Block 1: Education */}
              <div className="p-5 bg-[#F5EDE4] border border-[#E2D6C7] rounded-sm hover:border-[#8C7965] transition-colors">
                <div className="flex items-center gap-2.5 text-[#8C7965] mb-2">
                  <GraduationCap className="w-4 h-4" />
                  <span className="font-mono text-[11px] uppercase tracking-widest font-semibold">
                    EDUCATION
                  </span>
                </div>
                <div className="font-display text-lg font-bold text-[#4A3A2D] uppercase">
                  B.Tech CSE
                </div>
                <p className="text-xs text-[#7B6B5B] mt-1 font-mono">
                  Computer Science Engineering Undergraduate
                </p>
              </div>

              {/* Block 2: Academic Route */}
              <div className="p-5 bg-[#F5EDE4] border border-[#E2D6C7] rounded-sm hover:border-[#8C7965] transition-colors">
                <div className="flex items-center gap-2.5 text-[#8C7965] mb-2">
                  <Route className="w-4 h-4" />
                  <span className="font-mono text-[11px] uppercase tracking-widest font-semibold">
                    BACKGROUND
                  </span>
                </div>
                <div className="font-display text-lg font-bold text-[#4A3A2D] uppercase">
                  Diploma → B.Tech
                </div>
                <p className="text-xs text-[#7B6B5B] mt-1 font-mono">
                  Lateral Entry • Strong Technical Roots
                </p>
              </div>

              {/* Block 3: Engineering Interests */}
              <div className="p-5 bg-[#F5EDE4] border border-[#E2D6C7] rounded-sm hover:border-[#8C7965] transition-colors">
                <div className="flex items-center gap-2.5 text-[#8C7965] mb-2">
                  <Cpu className="w-4 h-4" />
                  <span className="font-mono text-[11px] uppercase tracking-widest font-semibold">
                    TECHNICAL INTERESTS
                  </span>
                </div>
                <div className="font-display text-base font-bold text-[#4A3A2D] uppercase">
                  Full Stack • AI/ML • CV
                </div>
                <p className="text-xs text-[#7B6B5B] mt-1 font-mono">
                  Real-time Systems, Vision Heuristics, Cloud
                </p>
              </div>

              {/* Block 4: Competitive Sprints */}
              <div className="p-5 bg-[#F5EDE4] border border-[#E2D6C7] rounded-sm hover:border-[#8C7965] transition-colors">
                <div className="flex items-center gap-2.5 text-[#8C7965] mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-mono text-[11px] uppercase tracking-widest font-semibold">
                    HACKATHONS
                  </span>
                </div>
                <div className="font-display text-base font-bold text-[#4A3A2D] uppercase">
                  Problem Solver & Builder
                </div>
                <p className="text-xs text-[#7B6B5B] mt-1 font-mono">
                  Turning 24h briefs into production MVPs
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
