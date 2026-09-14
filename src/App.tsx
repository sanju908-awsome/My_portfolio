import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Hackathons } from './components/Hackathons';
import { WhatIBuild } from './components/WhatIBuild';
import { Journey } from './components/Journey';
import { Certifications } from './components/Certifications';
import { Coding } from './components/Coding';
import { ResumeCTA } from './components/ResumeCTA';
import { ResumeModal } from './components/ResumeModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5EDE4] text-[#4A3A2D] flex flex-col font-sans selection:bg-[#4A3A2D] selection:text-[#F5EDE4]">
      {/* Fixed/Sticky Editorial Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Single-Page Editorial Content */}
      <main className="flex-grow">
        {/* 01. Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 02. About Section */}
        <About />

        {/* 03. Skills Section */}
        <Skills />

        {/* 04. Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 05. Hackathons Section */}
        <Hackathons />

        {/* 06. Services / What I Do */}
        <WhatIBuild />

        {/* 07. Experience / My Journey */}
        <Journey />

        {/* 08. Certifications */}
        <Certifications />

        {/* 09. Github / Coding / Practice */}
        <Coding />

        {/* 10. Resume CTA */}
        <ResumeCTA onOpenResume={() => setIsResumeOpen(true)} />

        {/* 11. Contact Section */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
