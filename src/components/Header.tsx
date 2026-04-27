import { useState } from 'react';
import { Mail, Phone, Linkedin, ArrowRight, Download, Menu, X } from 'lucide-react';
import { portfolioData } from '../data';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-900 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-900/20">
            {portfolioData.name.charAt(0)}
          </div>
          <span className="font-bold text-xl tracking-tight text-white hidden xl:block">{portfolioData.name}</span>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Quick Contact Icons (Hidden on small screens) */}
          <div className="hidden lg:flex items-center gap-4 mr-4 pr-4 border-r border-slate-800">
            <a href={`mailto:${portfolioData.contact.email}`} className="text-slate-500 hover:text-blue-400 transition-colors">
              <Mail size={18} />
            </a>
            <a href={`tel:${portfolioData.contact.phone}`} className="text-slate-500 hover:text-blue-400 transition-colors">
              <Phone size={18} />
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
              <Linkedin size={18} />
            </a>
          </div>

          <a 
            href={portfolioData.resumeUrl}
            download
            className="hidden sm:flex items-center gap-2 bg-slate-900 text-slate-300 px-4 py-2 rounded-full text-sm font-semibold border border-slate-800 hover:border-slate-700 transition-all"
          >
            <Download size={16} />
            Resume
          </a>
          <div className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-blue-900/20 flex items-center gap-2 whitespace-nowrap cursor-default">
            Hire Me
            <ArrowRight size={16} />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-900 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="block text-lg font-medium text-slate-300 hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 flex items-center gap-6 border-t border-slate-900">
            <a href={`mailto:${portfolioData.contact.email}`} className="text-slate-400 hover:text-blue-400">
              <Mail size={20} />
            </a>
            <a href={`tel:${portfolioData.contact.phone}`} className="text-slate-400 hover:text-blue-400">
              <Phone size={20} />
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400">
              <Linkedin size={20} />
            </a>
            <a 
              href={portfolioData.resumeUrl}
              download
              className="ml-auto flex items-center gap-2 text-sm font-bold text-slate-300"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
