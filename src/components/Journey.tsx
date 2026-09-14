import React from 'react';
import { journeySteps } from '../data/portfolioData';
import { GraduationCap, ArrowDown, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const Journey: React.FC = () => {
  return (
    <section
      id="journey"
      className="relative py-20 md:py-32 border-b border-[#E2D6C7] bg-[#F5EDE4]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#E2D6C7] mb-16">
          <div>
            <span className="font-mono text-xs text-[#8C7965] uppercase tracking-widest font-semibold block mb-1">
              SECTION 07 // ACADEMIC & TECHNICAL PATH
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#4A3A2D]">
              MY JOURNEY
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-[#7B6B5B] uppercase tracking-wider">
            FROM POLYTECHNIC FOUNDATIONS TO B.TECH CSE
          </p>
        </div>

        {/* Editorial Vertical Step Stream */}
        <div className="relative border-l-2 border-[#D4C4B2] ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12">
          {journeySteps.map((step, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-6 h-6 rounded-full bg-[#4A3A2D] border-4 border-[#F5EDE4] text-[#F5EDE4] flex items-center justify-center font-mono text-[9px] font-bold shadow-xs">
                0{idx + 1}
              </div>

              {/* Step Card Container */}
              <div className="p-6 sm:p-8 bg-[#FBF8F4] border border-[#E2D6C7] rounded-sm group-hover:border-[#8C7965] transition-all duration-200">
                
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#E2D6C7] gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#8C7965] uppercase tracking-wider">
                      {step.period}
                    </span>
                    <span>•</span>
                    <span className="font-mono text-xs text-[#7B6B5B]">
                      {step.institutionOrContext}
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 bg-[#ECE1D4] text-[#4A3A2D] text-[10px] font-mono font-semibold uppercase tracking-wider rounded-xs">
                    {step.milestone}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#4A3A2D] mb-3">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-[#7B6B5B] leading-relaxed mb-6 font-light">
                  {step.description}
                </p>

                {/* Focus Highlights */}
                <div>
                  <span className="font-mono text-[10px] text-[#8C7965] uppercase tracking-widest font-semibold block mb-2">
                    KEY MILESTONES & COMPETENCIES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {step.highlights.map((hl, i) => (
                      <div
                        key={i}
                        className="p-2.5 bg-[#F5EDE4] border border-[#E2D6C7] rounded-xs text-xs font-mono text-[#4A3A2D] flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#8C7965] shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Student Credibility Statement */}
        <div className="mt-14 p-6 bg-[#FAF6F1] border border-[#E2D6C7] rounded-sm text-xs font-mono text-[#7B6B5B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-bold text-[#4A3A2D]">TRANSPARENCY PRINCIPLE:</span>
            <span className="ml-1">Early career profile focused entirely on verified academic rigor and self-built technical systems.</span>
          </div>
          <span className="text-[#8C7965] font-semibold uppercase">
            NO INVENTED TITLES
          </span>
        </div>

      </div>
    </section>
  );
};
