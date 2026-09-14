import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = ['hero', 'about', 'skills', 'projects', 'hackathons', 'journey', 'certifications', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Hackathons', href: '#hackathons', id: 'hackathons' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5EDE4]/90 backdrop-blur-md border-b border-[#E2D6C7] py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-[#4A3A2D] focus:outline-none"
          aria-label="Sanjay Kumar Portfolio Home"
        >
          <span className="w-9 h-9 rounded-sm bg-[#4A3A2D] text-[#F5EDE4] font-display text-lg font-bold flex items-center justify-center tracking-wider transition-transform duration-200 group-hover:scale-105">
            {personalInfo.initials.replace('.', '')}
          </span>
          <div className="flex flex-col">
            <span className="font-display font-semibold tracking-tight text-sm uppercase text-[#4A3A2D]">
              {personalInfo.fullName}
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#7B6B5B] uppercase">
              CSE • Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium tracking-wide">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? 'text-[#4A3A2D] font-semibold'
                    : 'text-[#7B6B5B] hover:text-[#4A3A2D]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4A3A2D] animate-in fade-in duration-200" />
                )}
              </a>
            );
          })}
          
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="text-[#7B6B5B] hover:text-[#4A3A2D] py-1 text-sm font-medium transition-colors cursor-pointer"
          >
            Resume
          </button>
        </nav>

        {/* Right Action: Get in Touch */}
        <div className="hidden md:flex items-center gap-4">
          <a
            id="nav-contact-btn"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A3A2D] text-[#F5EDE4] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 hover:bg-[#32251B] hover:shadow-xs active:scale-95"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#4A3A2D] rounded-sm hover:bg-[#E2D6C7]/50 focus:outline-none focus:ring-2 focus:ring-[#4A3A2D]"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="md:hidden fixed inset-x-0 top-[60px] bg-[#F5EDE4] border-b border-[#E2D6C7] p-6 shadow-xl animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#E2D6C7] text-xs font-mono text-[#7B6B5B]">
              <Terminal className="w-3.5 h-3.5" />
              <span>NAVIGATION MENU</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-lg font-display tracking-wide uppercase text-[#4A3A2D] py-1 hover:pl-2 transition-all"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-left text-lg font-display tracking-wide uppercase text-[#4A3A2D] py-1 hover:pl-2 transition-all cursor-pointer"
            >
              Resume (CV)
            </button>
            <div className="pt-3 border-t border-[#E2D6C7]">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#4A3A2D] text-[#F5EDE4] text-xs font-semibold uppercase tracking-wider rounded-sm"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
