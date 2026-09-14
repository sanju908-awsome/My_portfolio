import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Github, Linkedin, Send, Copy, Check, ArrowUpRight, MessageSquare, Terminal } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmittedStatus('Please fill in all fields.');
      return;
    }

    // Compose direct mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Sanjay,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoUrl;
    setSubmittedStatus('Preparing your email client. You can also copy the email directly!');
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 border-b border-[#E2D6C7] bg-[#FBF8F4]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#E2D6C7] mb-16">
          <div>
            <span className="font-mono text-xs text-[#8C7965] uppercase tracking-widest font-semibold block mb-1">
              SECTION 11 // INQUIRIES & OUTREACH
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#4A3A2D]">
              GET IN TOUCH
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-[#7B6B5B] uppercase tracking-wider">
            OPEN TO OPPORTUNITIES, HACKATHONS & COLLABORATIONS
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Info & Quick Copy (Col 1 to 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#4A3A2D] mb-4">
                LET'S TALK ENGINEERING.
              </h3>
              <p className="text-base text-[#7B6B5B] leading-relaxed font-light mb-8">
                Whether you have a question about my projects, want to team up for a hackathon, or discuss software opportunities, feel free to reach out directly.
              </p>

              {/* Direct Email Card */}
              <div className="p-5 bg-[#F5EDE4] border border-[#E2D6C7] rounded-sm mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7965] font-semibold block mb-1">
                  DIRECT EMAIL ADDRESS
                </span>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-mono text-sm sm:text-base font-bold text-[#4A3A2D] hover:text-[#8C7965] truncate"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 bg-[#FAF6F1] border border-[#D4C4B2] text-[#4A3A2D] hover:bg-[#E2D6C7] rounded-xs transition-colors shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-[11px] font-mono text-emerald-700 mt-2 block animate-in fade-in">
                    ✓ Email copied to clipboard!
                  </span>
                )}
              </div>

              {/* Social Channels */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7965] font-semibold block mb-2">
                  CONNECTED PLATFORMS
                </span>

                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-[#F5EDE4] border border-[#E2D6C7] rounded-xs flex items-center justify-between hover:border-[#8C7965] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-[#4A3A2D]" />
                    <span className="text-xs font-mono font-semibold text-[#4A3A2D]">
                      GitHub Repositories
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#7B6B5B] group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-[#F5EDE4] border border-[#E2D6C7] rounded-xs flex items-center justify-between hover:border-[#8C7965] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-[#4A3A2D]" />
                    <span className="text-xs font-mono font-semibold text-[#4A3A2D]">
                      LinkedIn Professional Profile
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#7B6B5B] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="p-4 bg-[#ECE1D4]/60 border border-[#D4C4B2] rounded-xs text-xs font-mono text-[#7B6B5B]">
              <span className="font-semibold text-[#4A3A2D]">RESPONSE EXPECTATION:</span>
              <span className="ml-1">Usually responds within 24 hours during standard college & hackathon cycles.</span>
            </div>
          </div>

          {/* Right Column: Interactive Minimal Contact Form (Col 6 to 12) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 bg-[#F5EDE4] border border-[#E2D6C7] rounded-sm space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#E2D6C7]">
                <span className="font-mono text-xs font-bold text-[#8C7965] uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  DISPATCH DIRECT MESSAGE
                </span>
                <span className="text-[11px] font-mono text-[#7B6B5B]">
                  USES NATIVE MAILTO DISPATCH
                </span>
              </div>

              {/* Name field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-xs uppercase tracking-wider text-[#4A3A2D] font-medium"
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF6F1] border border-[#D4C4B2] rounded-xs text-sm text-[#4A3A2D] placeholder-[#A89887] focus:outline-none focus:border-[#4A3A2D] transition-colors"
                />
              </div>

              {/* Email field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-xs uppercase tracking-wider text-[#4A3A2D] font-medium"
                >
                  Your Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF6F1] border border-[#D4C4B2] rounded-xs text-sm text-[#4A3A2D] placeholder-[#A89887] focus:outline-none focus:border-[#4A3A2D] transition-colors"
                />
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs uppercase tracking-wider text-[#4A3A2D] font-medium"
                >
                  Project Details / Inquiry *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, hackathon team, or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF6F1] border border-[#D4C4B2] rounded-xs text-sm text-[#4A3A2D] placeholder-[#A89887] focus:outline-none focus:border-[#4A3A2D] transition-colors resize-none"
                />
              </div>

              {submittedStatus && (
                <div className="p-3 bg-[#ECE1D4] border border-[#D4C4B2] rounded-xs text-xs font-mono text-[#4A3A2D]">
                  {submittedStatus}
                </div>
              )}

              {/* Submit Button */}
              <button
                id="contact-submit-btn"
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#4A3A2D] text-[#F5EDE4] text-xs font-semibold uppercase tracking-widest rounded-xs hover:bg-[#32251B] transition-colors cursor-pointer"
              >
                <span>SEND MESSAGE</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              <div className="pt-2 text-center">
                <p className="text-[11px] font-mono text-[#7B6B5B]">
                  No fake backend. Direct dispatch straight to <span className="underline">{personalInfo.email}</span>.
                </p>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
