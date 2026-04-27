import { useState } from 'react';
import { GraduationCap, Briefcase, Award, Image as ImageIcon, X } from 'lucide-react';
import { portfolioData, Education, WorkExperience, Certification } from '../data';

export const Experience = () => {
  const [selectedCert, setSelectedCert] = useState<{title: string, imageUrl: string, certificateUrl?: string} | null>(null);

  return (
    <section id="experience" className="pt-0 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h2 className="text-3xl font-black text-white mb-10 flex items-center gap-4">
              <GraduationCap className="text-blue-500" size={32} />
              Academic Background
            </h2>
            <div className="space-y-12">
              {(portfolioData.education as Education[]).map((edu, i) => (
                <div key={i} className="group relative pl-16">
                  {/* Vertical Line Connector */}
                  {i !== portfolioData.education.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-[-32px] w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent" />
                  )}
                  
                  {/* Logo Container */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl overflow-hidden bg-white border-2 border-slate-800 shadow-2xl z-10 group-hover:scale-110 transition-transform duration-300 ring-4 ring-slate-950">
                    <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain p-1" />
                  </div>
                  
                  <div className="bg-slate-900/40 border border-slate-800/50 rounded-[2rem] p-6 group-hover:bg-slate-900/60 group-hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-black text-blue-500 tracking-widest uppercase bg-blue-500/10 px-3 py-1 rounded-full">
                        {edu.duration}
                      </span>
                      {edu.result && (
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                          Result: {edu.result}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{edu.degree}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-3xl font-black text-white mb-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                <Briefcase size={24} />
              </div>
              Professional Experience
            </h2>
            <div className="space-y-12">
              {(portfolioData.workExperience as WorkExperience[]).map((exp, i) => (
                <div key={i} className="group relative pl-16">
                  {/* Vertical Line Connector */}
                  {i !== portfolioData.workExperience.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-[-32px] w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent" />
                  )}

                  {/* Logo Container */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center border-2 border-slate-700 shadow-2xl z-10 overflow-hidden ring-4 ring-slate-950 group-hover:scale-110 transition-transform duration-300">
                    {exp.logo ? (
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain p-2 bg-white" />
                    ) : (
                      <Briefcase size={20} className="text-blue-500" />
                    )}
                  </div>
                  
                  <div className="bg-slate-900/40 border border-slate-800/50 rounded-[2rem] p-6 group-hover:bg-slate-900/60 group-hover:border-blue-500/30 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                    <p className="text-blue-500 font-bold mb-4 text-sm tracking-wide uppercase">{exp.company}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">{exp.description}</p>
                    
                    {exp.imageUrl && (
                      <button 
                        onClick={() => setSelectedCert({ title: exp.title, imageUrl: exp.imageUrl!, certificateUrl: exp.certificateUrl })}
                        className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors group/btn"
                      >
                        <Award size={14} className="group-hover/btn:rotate-12 transition-transform" />
                        VIEW INTERNSHIP CERTIFICATE
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-black text-white flex items-center gap-4">
              <Award className="text-blue-500" size={32} />
              Professional Certifications
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(portfolioData.certifications as Certification[]).map((cert, i) => (
              <div key={i} className="group flex flex-col bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl hover:border-blue-500/30 transition-all p-7 min-h-[220px]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 overflow-hidden border border-slate-800/50 group-hover:scale-110 transition-transform duration-300">
                    {cert.logo ? (
                      <img src={cert.logo} alt="provider" className="w-full h-full object-contain p-2 bg-white/5" />
                    ) : (
                      <Award size={24} className="text-blue-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-slate-200 font-bold text-base leading-snug group-hover:text-blue-400 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-black tracking-widest uppercase mt-1">
                      {cert.year}
                    </p>
                  </div>
                </div>

                {cert.imageUrl && (
                  <button 
                    onClick={() => setSelectedCert({ title: cert.title, imageUrl: cert.imageUrl!, certificateUrl: cert.certificateUrl })}
                    className="mt-auto w-full py-3 bg-slate-800/50 hover:bg-blue-600 text-slate-400 hover:text-white rounded-xl text-xs font-black tracking-wider transition-all flex items-center justify-center gap-2 border border-slate-700/50 hover:border-blue-500/50 shadow-lg shadow-black/20"
                  >
                    <ImageIcon size={16} />
                    VIEW CERTIFICATE
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          />
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between p-6 border-b border-slate-800">
              <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            <div className="p-4 md:p-8 flex justify-center bg-slate-950/50">
              <img 
                src={selectedCert.imageUrl} 
                alt={selectedCert.title} 
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
