import React from 'react';
import { Project } from '../types';
import { projectsData } from '../data/portfolioData';
import { ArrowUpRight, Github, Sparkles, ExternalLink, Code2, AlertTriangle, CheckCircle2, Clock, Wrench } from 'lucide-react';
import { ProjectDiagram } from './ProjectDiagram';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [project1, project2] = projectsData;

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 border-b border-[#E2D6C7] bg-[#FBF8F4]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Massive Typography & Editorial Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#E2D6C7] mb-16">
          <div>
            <span className="font-mono text-xs text-[#8C7965] uppercase tracking-widest font-semibold block mb-1">
              SECTION 04 // FEATURED WORKS
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#4A3A2D]">
              PROJECTS
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#7B6B5B] uppercase tracking-wider flex items-center gap-2">
            <span>SELECTED REPOSITORIES & REAL-WORLD SYSTEMS</span>
            <span>•</span>
            <span className="text-[#4A3A2D] font-bold">02 KEY IMPLEMENTATIONS</span>
          </div>
        </div>

        {/* Varied Editorial Layouts */}
        <div className="space-y-16 lg:space-y-24">
          
          {/* =========================================================================
              PROJECT 01: FEATURED PROJECT (Roadside Assistant)
              Status: Still in Development
              ========================================================================= */}
          <div className="relative p-6 sm:p-10 lg:p-12 bg-[#F5EDE4] border border-[#E2D6C7] rounded-sm hover:border-[#8C7965] transition-all duration-300">
            {/* Top Micro-Header */}
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#E2D6C7] mb-8 gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-3xl sm:text-4xl font-black text-[#4A3A2D]">
                  {project1.number}
                </span>
                <span className="h-6 w-[1px] bg-[#D4C4B2]" />
                <span className="px-3 py-1 bg-[#4A3A2D] text-[#F5EDE4] font-mono text-xs uppercase tracking-wider font-semibold rounded-xs">
                  FEATURED SYSTEM
                </span>
                {/* Active In Development Badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100/90 text-amber-900 border border-amber-300 font-mono text-xs uppercase tracking-wider font-bold rounded-xs shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                  <Clock className="w-3 h-3 text-amber-700" />
                  <span>IN DEVELOPMENT</span>
                </span>
                <span className="font-mono text-xs text-[#7B6B5B] uppercase hidden sm:inline">
                  {project1.category}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project1.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#4A3A2D] hover:bg-[#E2D6C7] rounded-xs transition-colors"
                  aria-label="View Project 01 on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <button
                  id="project-01-detail-btn"
                  onClick={() => onSelectProject(project1)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#4A3A2D] text-[#F5EDE4] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#32251B] transition-colors cursor-pointer"
                >
                  <span>Full Spec</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Split layout: Narrative on Left, Live Telemetry Schematic on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#4A3A2D] mb-2">
                    {project1.title}
                  </h3>
                  <p className="font-serif-editorial text-lg text-[#8C7965] italic mb-4">
                    {project1.subtitle}
                  </p>
                  <p className="text-base text-[#7B6B5B] leading-relaxed mb-6 font-light">
                    {project1.description}
                  </p>
                </div>

                {/* Development Status Notice */}
                <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-xs text-xs text-amber-950 mb-6 flex items-start gap-2.5">
                  <Wrench className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono font-bold uppercase tracking-wider block text-[11px] text-amber-900 mb-0.5">
                      ACTIVE DEVELOPMENT STATUS
                    </span>
                    <p className="leading-relaxed">
                      Core dispatch engine and live WebSocket telemetry are implemented. Ongoing sprint focuses on emergency offline caching, route recalculation, and SMS fallback notifications.
                    </p>
                  </div>
                </div>

                {/* Problem & Solution Mini Blocks */}
                <div className="space-y-3 mb-6">
                  <div className="p-3.5 bg-[#FAF6F1] border border-[#E2D6C7] rounded-xs text-xs text-[#4A3A2D]">
                    <span className="font-mono font-bold text-amber-800 uppercase block mb-1">
                      CHALLENGE:
                    </span>
                    {project1.problem}
                  </div>
                  <div className="p-3.5 bg-[#FAF6F1] border border-[#E2D6C7] rounded-xs text-xs text-[#4A3A2D]">
                    <span className="font-mono font-bold text-emerald-800 uppercase block mb-1">
                      ENGINEERED SOLUTION:
                    </span>
                    {project1.solution}
                  </div>
                </div>

                {/* Tech Chips */}
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#8C7965] tracking-widest font-semibold block mb-2">
                    STACK & PROTOCOLS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project1.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-[#ECE1D4] text-[#4A3A2D] text-xs font-mono rounded-xs border border-[#D4C4B2]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Schematic visual */}
              <div className="lg:col-span-6">
                <ProjectDiagram type={project1.diagramType} />
              </div>
            </div>
          </div>

          {/* =========================================================================
              PROJECT 02: Certificate Verification System
              Security & OCR Tamper Detection
              ========================================================================= */}
          <div className="relative p-6 sm:p-10 lg:p-12 bg-[#FAF6F1] border border-[#E2D6C7] rounded-sm hover:border-[#8C7965] transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#E2D6C7] mb-8 gap-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl sm:text-4xl font-black text-[#4A3A2D]">
                  {project2.number}
                </span>
                <span className="h-6 w-[1px] bg-[#D4C4B2]" />
                <span className="px-3 py-1 bg-[#4A3A2D] text-[#F5EDE4] font-mono text-xs uppercase tracking-wider font-semibold rounded-xs">
                  SECURITY ARCHITECTURE
                </span>
                <span className="font-mono text-xs text-[#8C7965] uppercase tracking-wider font-semibold hidden sm:inline">
                  {project2.category}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project2.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#4A3A2D] hover:bg-[#E2D6C7] rounded-xs transition-colors"
                  aria-label="View Project 02 on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <button
                  id="project-02-detail-btn"
                  onClick={() => onSelectProject(project2)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#4A3A2D] text-[#F5EDE4] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#32251B] transition-colors cursor-pointer"
                >
                  <span>Explore Verification Flow</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text on Left */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#4A3A2D] mb-2">
                    {project2.title}
                  </h3>
                  <p className="font-serif-editorial text-lg text-[#8C7965] italic mb-4">
                    {project2.subtitle}
                  </p>
                  <p className="text-base text-[#7B6B5B] leading-relaxed mb-6 font-light">
                    {project2.description}
                  </p>
                </div>

                {/* Problem & Solution */}
                <div className="space-y-3 mb-6">
                  <div className="p-3.5 bg-[#F5EDE4] border border-[#E2D6C7] rounded-xs text-xs text-[#4A3A2D]">
                    <span className="font-mono font-bold text-amber-800 uppercase block mb-1">
                      CHALLENGE:
                    </span>
                    {project2.problem}
                  </div>
                  <div className="p-3.5 bg-[#F5EDE4] border border-[#E2D6C7] rounded-xs text-xs text-[#4A3A2D]">
                    <span className="font-mono font-bold text-emerald-800 uppercase block mb-1">
                      ENGINEERED SOLUTION:
                    </span>
                    {project2.solution}
                  </div>
                </div>

                {/* Tech Chips */}
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#8C7965] tracking-widest font-semibold block mb-2">
                    SECURITY STACK & LIBS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project2.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-[#ECE1D4] text-[#4A3A2D] text-xs font-mono rounded-xs border border-[#D4C4B2]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Schematic visual on Right */}
              <div className="lg:col-span-6">
                <ProjectDiagram type={project2.diagramType} />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
