import React from 'react';
import { whatIBuild } from '../data/portfolioData';
import { Layers, Cpu, Eye, Zap } from 'lucide-react';

export const WhatIBuild: React.FC = () => {
  const getPillarIcon = (num: string) => {
    switch (num) {
      case '01': return <Layers className="w-5 h-5 text-[#8C7965]" />;
      case '02': return <Cpu className="w-5 h-5 text-[#8C7965]" />;
      case '03': return <Eye className="w-5 h-5 text-[#8C7965]" />;
      default: return <Zap className="w-5 h-5 text-[#8C7965]" />;
    }
  };

  return (
    <section
      id="services"
      className="relative py-20 md:py-32 border-b border-[#E2D6C7] bg-[#FBF8F4]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#E2D6C7] mb-16">
          <div>
            <span className="font-mono text-xs text-[#8C7965] uppercase tracking-widest font-semibold block mb-1">
              SECTION 06 // CAPABILITIES
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#4A3A2D]">
              WHAT I BUILD
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-[#7B6B5B] uppercase tracking-wider">
            PRIMARY DOMAINS OF ENGINEERING VALUE
          </p>
        </div>

        {/* 4 Pillars in Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {whatIBuild.map((item) => (
            <div
              key={item.number}
              className="p-8 sm:p-10 bg-[#F5EDE4] border border-[#E2D6C7] rounded-sm hover:border-[#8C7965] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#E2D6C7] mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-3xl sm:text-4xl font-black text-[#4A3A2D] group-hover:text-[#32251B]">
                      {item.number}
                    </span>
                    <span className="h-5 w-[1px] bg-[#D4C4B2]" />
                    <div className="p-2 bg-[#FAF6F1] border border-[#E2D6C7] rounded-xs">
                      {getPillarIcon(item.number)}
                    </div>
                  </div>

                  <span className="font-mono text-[10px] text-[#8C7965] uppercase tracking-widest font-semibold">
                    PILLAR {item.number}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#4A3A2D] mb-4">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[#7B6B5B] leading-relaxed mb-8 font-light">
                  {item.description}
                </p>
              </div>

              {/* Tags / Stack */}
              <div>
                <span className="font-mono text-[10px] text-[#8C7965] uppercase tracking-widest block mb-2 font-semibold">
                  ASSOCIATED TOOLING
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-[#FAF6F1] text-[#4A3A2D] text-xs font-mono rounded-xs border border-[#D4C4B2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
