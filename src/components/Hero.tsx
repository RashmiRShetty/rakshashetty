import { Linkedin, Mail, Phone, Sparkles, Wallet, TrendingUp, PieChart, Calculator } from 'lucide-react';
import { portfolioData } from '../data';

export const Hero = () => (
  <section id="about" className="pt-12 pb-4 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-4 border border-blue-500/20">
            <Sparkles size={16} />
            {portfolioData.availability}
          </div>
          <h2 className="text-base font-bold text-blue-500 mb-2 uppercase tracking-widest">
            Welcome To My Portfolio
          </h2>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.1] mb-6">
            {portfolioData.tagline}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
            {portfolioData.objective}
          </p>
          
          <div className="flex flex-wrap gap-4 text-slate-400 font-medium mb-8">
            <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors text-sm">
              <Mail size={18} />
              {portfolioData.contact.email}
            </a>
            <a href={`tel:${portfolioData.contact.phone}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors text-sm">
              <Phone size={18} />
              {portfolioData.contact.phone}
            </a>
            <a 
              href={portfolioData.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:border-blue-500 hover:text-blue-500 transition-all shadow-sm"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center relative">
          {/* Floating Icons */}
          <div className="absolute top-0 left-0 animate-bounce transition-all duration-1000 delay-100 z-20 bg-slate-900 p-3 rounded-2xl border border-slate-800 shadow-xl text-blue-500">
            <Wallet size={24} />
          </div>
          <div className="absolute top-10 right-0 animate-pulse transition-all duration-1000 delay-300 z-20 bg-slate-900 p-3 rounded-2xl border border-slate-800 shadow-xl text-emerald-500">
            <TrendingUp size={24} />
          </div>
          <div className="absolute bottom-10 left-10 animate-pulse transition-all duration-1000 delay-500 z-20 bg-slate-900 p-3 rounded-2xl border border-slate-800 shadow-xl text-purple-500">
            <PieChart size={24} />
          </div>
          <div className="absolute bottom-0 right-10 animate-bounce transition-all duration-1000 delay-700 z-20 bg-slate-900 p-3 rounded-2xl border border-slate-800 shadow-xl text-orange-500">
            <Calculator size={24} />
          </div>

          <div className="relative group w-full max-w-[320px]">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-900 rounded-full overflow-hidden aspect-square border-4 border-slate-800 shadow-2xl">
              <img 
                src={portfolioData.photo} 
                alt={portfolioData.name}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Strengths */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {portfolioData.strengths.map((strength, i) => (
          <div key={i} className="p-4 rounded-3xl bg-slate-900 border border-slate-800 shadow-sm hover:border-slate-700 transition-colors">
            <h3 className="text-base font-bold mb-1 text-white">{strength.title}</h3>
            <p className="text-[10px] text-slate-500">{strength.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
