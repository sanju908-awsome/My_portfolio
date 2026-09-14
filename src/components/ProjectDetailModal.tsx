import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, CheckCircle2, AlertTriangle, Layers, Cpu, Code2, ArrowRight } from 'lucide-react';
import { ProjectDiagram } from './ProjectDiagram';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#32251B]/70 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-container"
        className="relative w-full max-w-4xl bg-[#FBF8F4] border border-[#E2D6C7] rounded-sm shadow-2xl overflow-hidden my-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Bar with Monogram & Close */}
        <div className="sticky top-0 z-20 bg-[#F5EDE4] border-b border-[#E2D6C7] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-[#4A3A2D] text-[#F5EDE4] font-mono text-xs font-bold rounded-xs">
              PROJECT {project.number}
            </span>
            <span className="font-mono text-xs text-[#7B6B5B] uppercase tracking-wider hidden sm:inline">
              TECHNICAL SPECIFICATION SHEET
            </span>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-1.5 text-[#4A3A2D] hover:bg-[#E2D6C7] rounded-sm transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 md:p-10 space-y-10">
          
          {/* 01 — Overview Header */}
          <div className="border-b border-[#E2D6C7] pb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-mono text-[#8C7965] uppercase tracking-widest font-semibold">
                {project.category}
              </span>
              <span>•</span>
              <span className={`text-xs font-mono px-2.5 py-0.5 rounded-xs font-semibold uppercase flex items-center gap-1.5 ${
                project.status.toLowerCase().includes('development')
                  ? 'text-amber-900 bg-amber-100 border border-amber-300'
                  : 'text-emerald-900 bg-emerald-100 border border-emerald-300'
              }`}>
                {project.status.toLowerCase().includes('development') && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                )}
                {project.status}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-[#4A3A2D] tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="font-serif-editorial text-lg sm:text-xl text-[#7B6B5B] italic mb-4">
              {project.subtitle}
            </p>
            <p className="text-base text-[#4A3A2D] leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* 07 — Technical Visuals / Architecture Diagram */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold text-[#8C7965] uppercase tracking-widest">
                07 // SYSTEM ARCHITECTURE SCHEMATIC
              </span>
              <span className="text-[11px] font-mono text-[#7B6B5B]">
                REAL-TIME EXECUTION FLOW
              </span>
            </div>
            <ProjectDiagram type={project.diagramType} interactive={true} />
          </div>

          {/* 02 — Problem & 03 — Solution Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#F5EDE4] border border-[#E2D6C7] rounded-sm">
              <div className="flex items-center gap-2 text-[#8C7965] mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest">
                  02 // THE PROBLEM
                </h3>
              </div>
              <p className="text-sm text-[#4A3A2D] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 bg-[#F5EDE4] border border-[#E2D6C7] rounded-sm">
              <div className="flex items-center gap-2 text-emerald-800 mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest">
                  03 // THE ENGINEERING SOLUTION
                </h3>
              </div>
              <p className="text-sm text-[#4A3A2D] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* 04 — Features List */}
          <div className="border-t border-[#E2D6C7] pt-8">
            <h3 className="font-mono text-xs font-bold text-[#8C7965] uppercase tracking-widest mb-4">
              04 // CORE SYSTEM FEATURES & CAPABILITIES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, i) => (
                <div
                  key={i}
                  className="p-3.5 bg-[#F5EDE4] border border-[#E2D6C7] rounded-xs flex items-start gap-2.5 text-xs text-[#4A3A2D] leading-relaxed"
                >
                  <span className="font-mono text-[#8C7965] font-bold mt-0.5">
                    0{i + 1}.
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 05 — Tech Stack */}
          <div className="border-t border-[#E2D6C7] pt-8">
            <h3 className="font-mono text-xs font-bold text-[#8C7965] uppercase tracking-widest mb-4">
              05 // TECHNOLOGIES & TOOLS UTILIZED
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-[#4A3A2D] text-[#F5EDE4] text-xs font-mono font-medium rounded-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 06 — Development Process & Architecture Stages */}
          <div className="border-t border-[#E2D6C7] pt-8">
            <h3 className="font-mono text-xs font-bold text-[#8C7965] uppercase tracking-widest mb-4">
              06 // PIPELINE EXECUTION PHASES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {project.architectureSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-4 bg-[#F5EDE4] border border-[#E2D6C7] rounded-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-lg font-bold text-[#8C7965] block mb-1">
                      {step.step}
                    </span>
                    <h4 className="font-display text-sm font-bold uppercase text-[#4A3A2D] mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-[#7B6B5B] leading-normal font-mono">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 08 — Engineering Challenges */}
          <div className="border-t border-[#E2D6C7] pt-8">
            <h3 className="font-mono text-xs font-bold text-[#8C7965] uppercase tracking-widest mb-4">
              08 // TECHNICAL CHALLENGES & OVERCOMING BOTTLENECKS
            </h3>
            <ul className="space-y-2.5">
              {project.challenges.map((chal, i) => (
                <li
                  key={i}
                  className="p-3 bg-[#F5EDE4] border-l-2 border-[#8C7965] text-xs text-[#4A3A2D] leading-relaxed font-mono"
                >
                  {chal}
                </li>
              ))}
            </ul>
          </div>

          {/* 09 — Outcome & Real-World Impact */}
          <div className="border-t border-[#E2D6C7] pt-8">
            <h3 className="font-mono text-xs font-bold text-[#8C7965] uppercase tracking-widest mb-3">
              09 // OUTCOME & EVALUATION
            </h3>
            <div className="p-5 bg-[#ECE1D4] border border-[#D4C4B2] rounded-sm text-sm text-[#4A3A2D] leading-relaxed">
              {project.outcome}
            </div>
          </div>

          {/* 10 — Repository / External Actions */}
          <div className="border-t border-[#E2D6C7] pt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#7B6B5B]">
              10 // CODE AVAILABILITY: REPOSITORY DOCUMENTATION
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4A3A2D] text-[#F5EDE4] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#32251B] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-[#ECE1D4] text-[#4A3A2D] border border-[#D4C4B2] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#E2D6C7] transition-colors cursor-pointer"
              >
                Close Specification
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
