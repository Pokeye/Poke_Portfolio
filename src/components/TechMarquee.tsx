import React from 'react';
import { 
  Github, Code2, Database, 
  ServerCrash, Container, Cpu, Cloud, Terminal, 
  Paintbrush, Layers 
} from 'lucide-react';

const TechMarquee: React.FC = () => {
  const techStackRow1 = [
    { name: "C++", icon: <Cpu className="w-5 h-5 mr-2" /> },
    { name: "Python", icon: <Terminal className="w-5 h-5 mr-2" /> },
    { name: "Next.js", icon: <Code2 className="w-5 h-5 mr-2" /> },
    { name: "Node.js", icon: <ServerCrash className="w-5 h-5 mr-2" /> },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5 mr-2" /> }
  ];
  
  const techStackRow2 = [
    { name: "MongoDB", icon: <Database className="w-5 h-5 mr-2" /> },
    { name: "Firebase", icon: <Cloud className="w-5 h-5 mr-2" /> },
    { name: "React", icon: <Code2 className="w-5 h-5 mr-2" /> },
    { name: "TypeScript", icon: <Code2 className="w-5 h-5 mr-2" /> }
  ];

  const renderMarqueeItems = (items: Array<{ name: string; icon: React.ReactNode }>) => {
    // if a seamless continuous scroll isn't needed, no duplication needed.
    return items.map((tech, index) => (
      <span key={index} className="tech-badge-premium mx-5 flex items-center">
        {tech.icon}
        {tech.name}
      </span>
    ));
  };

  return (
    <section className="py-20 bg-dark-100/30 relative max-w-screen-xl mx-auto px-10 overflow-hidden">
      {/* Light effect for tech section */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-radial-glow-premium opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
      
      {/* Centered tech rows */}
      <div className="relative">
        <div className="marquee-track flex w-full flex-wrap justify-center gap-4 py-5">
          {renderMarqueeItems(techStackRow1)}
        </div>
      </div>
      
      <div className="relative mt-6">
        <div className="marquee-track flex w-full flex-wrap justify-center gap-4 py-5">
          {renderMarqueeItems(techStackRow2)}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
