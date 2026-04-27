import { 
  LayoutGrid, 
  Database, 
  Terminal, 
  FileSpreadsheet, 
  BarChart3, 
  Users2, 
  ShieldCheck, 
  FileText, 
  Presentation, 
  Search, 
  LineChart,
  Table as TableIcon
} from 'lucide-react';
import { portfolioData } from '../data';

export const TechStack = () => {
  const categoryIcons = {
    finance: <Database className="text-blue-500" />,
    hr: <LayoutGrid className="text-purple-500" />,
    tools: <Terminal className="text-emerald-500" />
  };

  const getSkillIcon = (skillName: string, logo?: string) => {
    if (logo) {
      return <img src={logo} alt={skillName} className="w-6 h-6 object-contain" />;
    }

    const s = skillName.toLowerCase();
    if (s.includes('excel')) return <FileSpreadsheet className="text-[#1D6F42]" size={18} />; 
    if (s.includes('tally')) return <TableIcon className="text-[#008D7F]" size={18} />; 
    if (s.includes('power bi')) return <BarChart3 className="text-[#F2C811]" size={18} />; 
    if (s.includes('reporting')) return <LineChart className="text-blue-400" size={18} />;
    if (s.includes('accounting')) return <FileText className="text-slate-400" size={18} />;
    
    if (s.includes('resources') || s.includes('employee')) return <Users2 className="text-purple-400" size={18} />;
    if (s.includes('compliance')) return <ShieldCheck className="text-emerald-400" size={18} />;
    if (s.includes('management')) return <LayoutGrid className="text-indigo-400" size={18} />;
    
    if (s.includes('power point')) return <Presentation className="text-[#D04423]" size={18} />; 
    if (s.includes('word')) return <FileText className="text-[#2B579A]" size={18} />; 
    if (s.includes('research')) return <Search className="text-amber-400" size={18} />;
    if (s.includes('data analysis')) return <BarChart3 className="text-cyan-400" size={18} />;

    return <FileText className="text-slate-500" size={18} />;
  };

  return (
    <section id="skills" className="pt-10 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-white mb-4">Technical Stack</h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Professional toolkit for business and management solutions, specializing in financial analysis and human resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(portfolioData.techStack).map(([category, skills]) => (
            <div key={category} className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-b from-blue-500/10 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              
              <div className="relative bg-slate-900/40 backdrop-blur-sm p-8 rounded-[2.5rem] border border-slate-800/50 hover:border-blue-500/30 transition-all duration-500 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/50 flex items-center justify-center border border-slate-700/50 group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-500">
                    {categoryIcons[category as keyof typeof categoryIcons]}
                  </div>
                  <h3 className="text-xl font-bold text-white capitalize tracking-wide">{category}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-800/30 border border-slate-800/50 hover:border-blue-500/30 hover:bg-slate-800/50 transition-all duration-300 group/item text-center">
                      <div className="w-10 h-10 rounded-xl bg-slate-900/50 flex items-center justify-center mb-3 border border-slate-800 group-hover/item:scale-110 group-hover/item:bg-blue-500/10 transition-all duration-300">
                        {getSkillIcon(skill.name, (skill as any).logo)}
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 group-hover/item:text-white transition-colors uppercase tracking-wider leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
