import React from 'react';
import { X, Printer, Download, Mail, MapPin, ExternalLink, GraduationCap, Award, Code2 } from 'lucide-react';
import { personalInfo, skillCategories, projectsData, journeySteps, certificationsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#32251B]/80 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-document-container"
        className="relative w-full max-w-3xl bg-[#FBF8F4] border border-[#E2D6C7] rounded-sm shadow-2xl overflow-hidden my-6 text-[#4A3A2D] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 bg-[#F5EDE4] border-b border-[#E2D6C7] px-6 py-4 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2 font-mono text-xs text-[#8C7965] font-bold">
            <span>RESUME VIEW // ATS-COMPLIANT FORMAT</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ECE1D4] text-[#4A3A2D] border border-[#D4C4B2] text-xs font-mono font-semibold rounded-xs hover:bg-[#E2D6C7] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#4A3A2D] hover:bg-[#E2D6C7] rounded-xs cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable ATS-Friendly Resume Canvas */}
        <div className="p-8 sm:p-12 space-y-8 bg-white print:p-0">
          
          {/* Header */}
          <div className="border-b-2 border-[#4A3A2D] pb-6">
            <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[#4A3A2D]">
              {personalInfo.fullName}
            </h1>
            <p className="text-sm font-semibold text-[#8C7965] uppercase tracking-wider mt-1">
              Computer Science Engineering Student • Full-Stack Developer • AI/ML Enthusiast
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#7B6B5B] mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#8C7965]" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#8C7965]" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <span>GitHub: {personalInfo.githubUrl.replace('https://', '')}</span>
            </div>
          </div>

          {/* Objective Statement */}
          <div>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-[#4A3A2D] border-b border-[#E2D6C7] pb-1 mb-2">
              PROFILE SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-[#7B6B5B] leading-relaxed">
              Computer Science Engineering student with an academic progression from a Diploma in Computer Science to B.Tech CSE via lateral entry. Experienced in building full-stack web applications with React, Node.js, Express, and MySQL, alongside applying machine learning and OpenCV computer vision for real-time problem solving. Active hackathon participant focused on practical engineering execution.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-[#4A3A2D] border-b border-[#E2D6C7] pb-1 mb-3">
              EDUCATION
            </h2>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs font-mono">
                <div>
                  <strong className="text-sm font-display text-[#4A3A2D] uppercase block font-bold">
                    B.Tech in Computer Science Engineering (Lateral Entry)
                  </strong>
                  <span className="text-[#7B6B5B]">Undergraduate Engineering Degree</span>
                </div>
                <span className="text-[#8C7965] font-semibold">In Progress</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs font-mono">
                <div>
                  <strong className="text-sm font-display text-[#4A3A2D] uppercase block font-bold">
                    Diploma in Computer Science Engineering
                  </strong>
                  <span className="text-[#7B6B5B]">State Board of Technical Education</span>
                </div>
                <span className="text-[#8C7965] font-semibold">Completed</span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-[#4A3A2D] border-b border-[#E2D6C7] pb-1 mb-3">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs">
              <div>
                <strong className="font-mono text-[#4A3A2D]">Programming:</strong>{' '}
                <span className="text-[#7B6B5B]">Python, Java, C++, SQL, JavaScript (ES6+)</span>
              </div>
              <div>
                <strong className="font-mono text-[#4A3A2D]">Web Development:</strong>{' '}
                <span className="text-[#7B6B5B]">React, Node.js, Express.js, HTML5, CSS3, Tailwind CSS, Socket.IO</span>
              </div>
              <div>
                <strong className="font-mono text-[#4A3A2D]">AI / ML & Computer Vision:</strong>{' '}
                <span className="text-[#7B6B5B]">OpenCV, YOLOv8, Scikit-learn, DeepSORT, Pandas, NumPy</span>
              </div>
              <div>
                <strong className="font-mono text-[#4A3A2D]">Databases & Tools:</strong>{' '}
                <span className="text-[#7B6B5B]">MySQL, Oracle, Git, GitHub, VS Code, Linux CLI</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-[#4A3A2D] border-b border-[#E2D6C7] pb-1 mb-3">
              FEATURED ENGINEERING PROJECTS
            </h2>
            <div className="space-y-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <strong className="text-sm font-display uppercase font-bold text-[#4A3A2D]">
                      {proj.title} — {proj.subtitle}
                    </strong>
                    <span className="text-xs font-mono text-[#8C7965]">{proj.status}</span>
                  </div>
                  <p className="text-xs text-[#7B6B5B] leading-relaxed">
                    {proj.description}
                  </p>
                  <p className="text-[11px] font-mono text-[#8C7965]">
                    Tech Stack: {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="font-display text-lg font-bold uppercase tracking-wide text-[#4A3A2D] border-b border-[#E2D6C7] pb-1 mb-3">
              CERTIFICATIONS & SIMULATIONS
            </h2>
            <div className="space-y-2 text-xs">
              {certificationsData.map((c) => (
                <div key={c.id} className="flex justify-between items-baseline">
                  <div>
                    <strong className="text-[#4A3A2D]">{c.title}</strong> —{' '}
                    <span className="text-[#7B6B5B]">{c.issuer}</span>
                  </div>
                  <span className="font-mono text-[#8C7965]">{c.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="bg-[#F5EDE4] border-t border-[#E2D6C7] px-6 py-4 flex items-center justify-between text-xs font-mono text-[#7B6B5B] print:hidden">
          <span>CONTACT: {personalInfo.email}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#4A3A2D] text-[#F5EDE4] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#32251B] transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
