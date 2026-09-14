import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code2, Globe, Cpu, Database, Wrench, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);

  const getCategoryIcon = (title: string) => {
    if (title.includes('PROGRAMMING')) return <Code2 className="w-5 h-5 text-[#8C7965]" />;
    if (title.includes('WEB')) return <Globe className="w-5 h-5 text-[#8C7965]" />;
    if (title.includes('AI') || title.includes('VISION')) return <Cpu className="w-5 h-5 text-[#8C7965]" />;
    if (title.includes('DATABASE')) return <Database className="w-5 h-5 text-[#8C7965]" />;
    return <Wrench className="w-5 h-5 text-[#8C7965]" />;
  };

  const getProficiencyBadge = (proficiency: string) => {
    switch (proficiency) {
      case 'Working Knowledge':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#4A3A2D] text-[#F5EDE4] text-[10px] font-mono uppercase tracking-wider rounded-xs">
            <CheckCircle2 className="w-2.5 h-2.5" />
            Working Knowledge
          </span>
        );
      case 'Currently Learning':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#ECE1D4] text-[#8C7965] border border-[#D4C4B2] text-[10px] font-mono uppercase tracking-wider rounded-xs">
            <Sparkles className="w-2.5 h-2.5 text-amber-700" />
            Currently Learning
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#ECE1D4]/60 text-[#7B6B5B] text-[10px] font-mono uppercase tracking-wider rounded-xs">
            <BookOpen className="w-2.5 h-2.5" />
            Familiar
          </span>
        );
    }
  };

  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 border-b border-[#E2D6C7] bg-[#F5EDE4]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#E2D6C7] mb-12">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-[#8C7965] uppercase tracking-widest font-semibold">
              SECTION 03 //
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#4A3A2D]">
              TECHNICAL SKILLS
            </h2>
          </div>
          <div className="mt-2 md:mt-0 flex items-center gap-3 text-xs font-mono text-[#7B6B5B]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#4A3A2D]" />
              Practical Competencies
            </span>
            <span>•</span>
            <span>No Artificial Percentages</span>
          </div>
        </div>

        {/* Editorial Skills Grid */}
        <div className="space-y-8">
          {skillCategories.map((category, idx) => {
            const isHovered = activeCategoryIndex === idx;

            return (
              <div
                key={category.title}
                onMouseEnter={() => setActiveCategoryIndex(idx)}
                onMouseLeave={() => setActiveCategoryIndex(null)}
                className={`p-6 sm:p-8 bg-[#FBF8F4] border transition-all duration-300 rounded-sm ${
                  isHovered
                    ? 'border-[#8C7965] shadow-xs translate-x-1'
                    : 'border-[#E2D6C7]'
                }`}
              >
                {/* Category Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#E2D6C7] mb-6 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#F5EDE4] border border-[#E2D6C7] rounded-xs">
                      {getCategoryIcon(category.title)}
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#8C7965] uppercase tracking-widest block">
                        CATEGORY 0{idx + 1}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#4A3A2D]">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-[#7B6B5B]">
                    {category.skills.length} TECHNOLOGIES
                  </span>
                </div>

                {/* Horizontal Skill Rows */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-4 bg-[#F5EDE4] border border-[#E2D6C7] rounded-xs flex flex-col justify-between hover:border-[#8C7965] hover:bg-[#FAF6F1] transition-all group"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="font-display text-lg font-semibold uppercase tracking-tight text-[#4A3A2D] group-hover:text-[#32251B]">
                          {skill.name}
                        </span>
                        {getProficiencyBadge(skill.proficiency)}
                      </div>

                      {skill.note && (
                        <p className="text-xs text-[#7B6B5B] font-light leading-relaxed font-mono">
                          {skill.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Note */}
        <div className="mt-12 p-6 bg-[#ECE1D4]/60 border border-[#D4C4B2] rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#7B6B5B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="font-semibold text-[#4A3A2D]">APPROACH TO CONTINUOUS LEARNING:</span>
            <span>Focus on core computer science foundations, clean code, and fast framework adoption.</span>
          </div>
          <span className="text-[#8C7965] font-semibold uppercase tracking-widest whitespace-nowrap">
            POLYTECHNIC TO UNDERGRADUATE
          </span>
        </div>

      </div>
    </section>
  );
};
