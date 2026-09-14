import React from 'react';
import { codingPlatforms, personalInfo } from '../data/portfolioData';
import { Github, Code2, ExternalLink, Terminal, Cpu, CheckCircle2 } from 'lucide-react';

export const Coding: React.FC = () => {
  return (
    <section
      id="coding"
      className="relative py-20 md:py-32 border-b border-[#E2D6C7] bg-[#F5EDE4]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#E2D6C7] mb-16">
          <div>
            <span className="font-mono text-xs text-[#8C7965] uppercase tracking-widest font-semibold block mb-1">
              SECTION 09 // PROBLEM SOLVING
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#4A3A2D]">
              CODE / BUILD / LEARN
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-[#7B6B5B] uppercase tracking-wider">
            CONTINUOUS REPOSITORIES & ALGORITHMIC PRACTICE
          </p>
        </div>

        {/* Developer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {codingPlatforms.map((platform) => {
            const isGithub = platform.name === 'GitHub';

            return (
              <div
                key={platform.name}
                className="p-8 sm:p-10 bg-[#FBF8F4] border border-[#E2D6C7] rounded-sm hover:border-[#8C7965] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#E2D6C7] mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#F5EDE4] border border-[#E2D6C7] rounded-xs">
                        {isGithub ? (
                          <Github className="w-6 h-6 text-[#4A3A2D]" />
                        ) : (
                          <Code2 className="w-6 h-6 text-[#8C7965]" />
                        )}
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-[#8C7965] uppercase tracking-widest block font-semibold">
                          PLATFORM
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#4A3A2D]">
                          {platform.name}
                        </h3>
                      </div>
                    </div>

                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[#4A3A2D] hover:bg-[#E2D6C7] rounded-xs transition-colors"
                      aria-label={`Visit ${platform.name}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Editorial Tagline */}
                  <div className="p-4 bg-[#F5EDE4] border border-[#E2D6C7] rounded-xs text-sm sm:text-base font-serif-editorial italic text-[#4A3A2D] mb-6">
                    "{platform.tagline}"
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#7B6B5B] leading-relaxed mb-6 font-light font-mono">
                    {platform.metricsText}
                  </p>

                  {/* Focus Areas */}
                  <div>
                    <span className="font-mono text-[10px] text-[#8C7965] uppercase tracking-widest font-semibold block mb-2">
                      PRACTICE DOMAINS
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {platform.focusAreas.map((area, i) => (
                        <div
                          key={i}
                          className="p-2 bg-[#F5EDE4] border border-[#E2D6C7] rounded-xs text-[11px] font-mono text-[#4A3A2D] flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#8C7965] shrink-0" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-6 border-t border-[#E2D6C7] mt-8">
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#4A3A2D] text-[#F5EDE4] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#32251B] transition-colors"
                  >
                    <span>Inspect {platform.name} Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
