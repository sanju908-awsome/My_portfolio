import React from 'react';
import { hackathonsData } from '../data/portfolioData';
import { Trophy, Users, Terminal, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const Hackathons: React.FC = () => {
  return (
    <section
      id="hackathons"
      className="relative py-20 md:py-32 border-b border-[#E2D6C7] bg-[#F5EDE4]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#E2D6C7] mb-16">
          <div>
            <span className="font-mono text-xs text-[#8C7965] uppercase tracking-widest font-semibold block mb-1">
              SECTION 05 // SPRINT ARENAS
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#4A3A2D]">
              HACKATHONS
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-[#7B6B5B] uppercase tracking-wider">
            RAPID PROTOTYPING UNDER TIME CONSTRAINTS (24H - 48H)
          </p>
        </div>

        {/* Hackathon Editorial Timeline */}
        <div className="space-y-8">
          {hackathonsData.map((hack, index) => {
            return (
              <div
                key={hack.id}
                className="relative p-6 sm:p-8 lg:p-10 bg-[#FBF8F4] border border-[#E2D6C7] rounded-sm hover:border-[#8C7965] transition-all duration-300"
              >
                {/* Editorial Top Bar: Number + Domain + Year + Factual Outcome */}
                <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#E2D6C7] gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-4xl font-black text-[#4A3A2D]">
                      {hack.number}
                    </span>
                    <span className="h-6 w-[1px] bg-[#D4C4B2]" />
                    <span className="font-mono text-xs text-[#8C7965] uppercase tracking-widest font-semibold">
                      {hack.domain}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#7B6B5B]">
                      YEAR: {hack.year}
                    </span>
                    <span className="px-3 py-1 bg-[#ECE1D4] text-[#4A3A2D] border border-[#D4C4B2] text-xs font-mono font-bold uppercase tracking-wider rounded-xs flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-[#8C7965]" />
                      {hack.outcome}
                    </span>
                  </div>
                </div>

                {/* Main Content Details */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                  
                  {/* Left Column: Title, Role, Problem (Col 1 to 7) */}
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#4A3A2D]">
                      {hack.name}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#7B6B5B]">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#8C7965]" />
                        Team: {hack.teamSize}
                      </span>
                      <span>•</span>
                      <span className="text-[#4A3A2D] font-semibold">
                        Role: {hack.role}
                      </span>
                    </div>

                    <div className="p-4 bg-[#F5EDE4] border border-[#E2D6C7] rounded-xs text-xs sm:text-sm text-[#4A3A2D] leading-relaxed">
                      <span className="font-mono text-[11px] font-bold text-[#8C7965] uppercase block mb-1">
                        PROBLEM STATEMENT TACKLED:
                      </span>
                      {hack.problemStatement}
                    </div>
                  </div>

                  {/* Right Column: Key Engineering Takeaway & Technologies (Col 8 to 12) */}
                  <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#E2D6C7] pt-4 lg:pt-0 lg:pl-8 space-y-4">
                    <div>
                      <span className="font-mono text-[10px] text-[#8C7965] uppercase tracking-widest font-semibold block mb-2">
                        KEY TAKEAWAY & EXECUTION
                      </span>
                      <p className="text-xs sm:text-sm text-[#7B6B5B] font-mono leading-relaxed bg-[#FAF6F1] p-3 border border-[#E2D6C7] rounded-xs">
                        "{hack.keyTakeaway}"
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] text-[#8C7965] uppercase tracking-widest font-semibold block mb-2">
                        DEPLOYED TECH STACK
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {hack.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-[#ECE1D4] text-[#4A3A2D] text-xs font-mono rounded-xs border border-[#D4C4B2]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Hackathon Mindset Callout */}
        <div className="mt-12 p-6 bg-[#FAF6F1] border border-[#E2D6C7] rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#7B6B5B]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#8C7965]" />
            <span className="font-semibold text-[#4A3A2D]">HACKATHON FIRST ETHOS:</span>
            <span>Zero vanity slides. Working code, live endpoints, and measurable problem resolution.</span>
          </div>
          <span className="text-[#8C7965] font-semibold uppercase tracking-wider">
            READY FOR UPCOMING SPRINTS
          </span>
        </div>

      </div>
    </section>
  );
};
