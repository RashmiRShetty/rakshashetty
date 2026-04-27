import { useState } from 'react';
import { FolderCode, Award, X } from 'lucide-react';
import { portfolioData } from '../data';

export const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<{title: string, imageUrl: string} | null>(null);

  return (
    <section id="projects" className="pt-0 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-black text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 text-lg">Selected work showcasing analytical and research proficiency.</p>
          </div>
          <div className="flex items-center gap-2 text-blue-400 font-bold bg-blue-500/10 px-6 py-3 rounded-2xl border border-blue-500/20">
            <FolderCode size={20} />
            {portfolioData.projects.length} Total Projects
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {portfolioData.projects.map((project, i) => (
            <div key={i} className="group relative bg-slate-900/40 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 border border-slate-800/50 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags?.map((tag, j) => (
                    <span key={j} className="text-[10px] font-black tracking-widest uppercase bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-10 text-lg max-w-4xl">
                  {project.description}
                </p>

                <div className="flex items-center gap-6">
                  {project.imageUrl && (
                    <button 
                      onClick={() => setSelectedImage({ title: project.title, imageUrl: project.imageUrl! })}
                      className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-blue-900/20 group/btn"
                    >
                      <Award size={18} className="group-hover/btn:rotate-12 transition-transform" />
                      VIEW RESEARCH CERTIFICATE
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
              <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
              <button 
                onClick={() => setSelectedImage(null)}
                className="p-2 text-slate-400 hover:text-white transition-colors bg-slate-800 rounded-full"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4 md:p-8 flex justify-center bg-slate-950/50 overflow-auto max-h-[70vh]">
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.title} 
                className="max-w-full h-auto object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
