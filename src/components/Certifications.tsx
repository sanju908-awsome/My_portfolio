import React, { useState } from 'react';
import { certificationsData } from '../data/portfolioData';
import { Certification } from '../types';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, X, FileText } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section
      id="certifications"
      className="relative py-20 md:py-32 border-b border-[#E2D6C7] bg-[#FBF8F4]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#E2D6C7] mb-16">
          <div>
            <span className="font-mono text-xs text-[#8C7965] uppercase tracking-widest font-semibold block mb-1">
              SECTION 08 // CREDENTIALS
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#4A3A2D]">
              CERTIFICATIONS
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-[#7B6B5B] uppercase tracking-wider">
            INDUSTRY-RECOGNIZED FOUNDATIONS & SIMULATIONS
          </p>
        </div>

        {/* 3 Certifications Cards in Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-8 bg-[#F5EDE4] border border-[#E2D6C7] rounded-sm hover:border-[#8C7965] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Issuer + Year */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E2D6C7] mb-6">
                  <div className="flex items-center gap-2 text-[#8C7965]">
                    <Award className="w-4 h-4" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#7B6B5B]">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#4A3A2D] mb-3 group-hover:text-[#32251B]">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#7B6B5B] leading-relaxed mb-6 font-light">
                  {cert.description}
                </p>

                {/* Skills gained */}
                <div className="mb-6">
                  <span className="font-mono text-[10px] text-[#8C7965] uppercase tracking-widest block mb-2 font-semibold">
                    COVERED DOMAINS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsGained.map((sk) => (
                      <span
                        key={sk}
                        className="px-2 py-0.5 bg-[#FAF6F1] text-[#4A3A2D] text-[11px] font-mono rounded-xs border border-[#D4C4B2]"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#E2D6C7]">
                <button
                  id={`view-cert-${cert.id}-btn`}
                  onClick={() => setSelectedCert(cert)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#4A3A2D] text-[#F5EDE4] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#32251B] transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#DCCBB8]" />
                  <span>View Certificate Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Modal Viewer */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-[#32251B]/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-full max-w-lg bg-[#FBF8F4] border border-[#E2D6C7] rounded-sm p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#E2D6C7] mb-6">
              <span className="font-mono text-xs font-bold text-[#8C7965] uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                VERIFIED CREDENTIAL RECORD
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 text-[#4A3A2D] hover:bg-[#E2D6C7] rounded-xs cursor-pointer"
                aria-label="Close certificate modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#7B6B5B] block">
                  ISSUING BODY
                </span>
                <div className="font-display text-xl font-bold uppercase text-[#4A3A2D]">
                  {selectedCert.issuer}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#7B6B5B] block">
                  PROGRAM TITLE
                </span>
                <div className="font-display text-2xl font-bold uppercase text-[#8C7965]">
                  {selectedCert.title}
                </div>
              </div>

              <div className="p-4 bg-[#F5EDE4] border border-[#E2D6C7] rounded-xs text-xs text-[#4A3A2D] leading-relaxed font-mono">
                {selectedCert.description}
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#7B6B5B] block mb-2">
                  VERIFIED COMPETENCIES
                </span>
                <div className="space-y-1.5">
                  {selectedCert.skillsGained.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs font-mono text-[#4A3A2D]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8C7965]" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2D6C7] flex items-center justify-between text-[11px] font-mono text-[#7B6B5B]">
                <span>RECORD ID: {selectedCert.credentialId || 'ACADEMIC-VERIFIED'}</span>
                <span>COMPLETION: {selectedCert.year}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2D6C7]">
              <button
                onClick={() => setSelectedCert(null)}
                className="w-full py-2.5 bg-[#4A3A2D] text-[#F5EDE4] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#32251B] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
