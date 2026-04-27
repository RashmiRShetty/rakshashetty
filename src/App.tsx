import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30 selection:text-blue-200 scroll-smooth">
      <Header />
      <main className="space-y-0">
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
