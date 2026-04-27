import { Mail, Phone, MapPin, Linkedin, Heart, Languages } from 'lucide-react';
import { portfolioData } from '../data';

export const Footer = () => (
  <footer id="contact" className="bg-slate-950 text-white pt-8 pb-10 px-6 border-t border-slate-900">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-black mb-6 text-white">Get In Touch.</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
            Available for professional collaborations and technical roles in Finance and HR Management.
          </p>
          <div className="flex gap-4">
            <a 
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black tracking-widest uppercase text-slate-500 mb-6">Contact Info</h3>
          <div className="space-y-4 text-slate-400 font-medium text-sm">
            <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-3 hover:text-blue-400 transition-colors">
              <Mail size={18} className="text-blue-500" />
              {portfolioData.contact.email}
            </a>
            <a href={`tel:${portfolioData.contact.phone}`} className="flex items-center gap-3 hover:text-blue-400 transition-colors">
              <Phone size={18} className="text-blue-500" />
              {portfolioData.contact.phone}
            </a>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-500" />
              {portfolioData.contact.location}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black tracking-widest uppercase text-slate-500 mb-6">Interests & Languages</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {portfolioData.interests.map((interest, i) => (
              <span key={i} className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-[10px] font-bold">
                <Heart size={10} className="text-red-500" />
                {interest}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {portfolioData.languages.map((lang, i) => (
              <span key={i} className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-[10px] font-bold">
                <Languages size={10} className="text-blue-500" />
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-900 text-center text-slate-500 text-xs font-medium">
        <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
