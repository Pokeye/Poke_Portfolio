
import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  url: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "AI for Post-Disaster Damage Assessment Using Drone/Aerial Images",
      description: "Status: Work in Progress. AI-driven research project focused on detecting and classifying infrastructure damage from drone and aerial imagery for rapid assessment and recovery planning.",
      techStack: [
        "Image recognition and classification",
        "Infrastructure damage detection",
        "Dataset preprocessing and feature extraction",
        "Model performance evaluation"
      ],
      url: "#"
    },
    {
      id: 2,
      title: "Fish Price Monitoring System",
      description: "Structured information system designed to monitor and analyze fish pricing data for improved transparency and decision-making.",
      techStack: [
        "System requirements analysis",
        "Database schema design",
        "Data modeling",
        "Structured documentation"
      ],
      url: "https://isdapresyo.vercel.app/"
    },
    {
      id: 3,
      title: "Wumpus World (AI Problem-Solving Simulation)",
      description: "Implementation of the classic Wumpus World environment for AI studies with an intelligent agent navigating uncertainty using logical inference.",
      techStack: [
        "Knowledge-based agents",
        "Propositional logic",
        "Rule-based reasoning",
        "AI environment simulation"
      ],
      url: "https://wumpus-world-peach.vercel.app/"
    },
    {
      id: 4,
      title: "FinTech System Concept",
      description: "Financial technology system concept focused on digital transactions and structured financial data processing, including workflows and secure data management.",
      techStack: [
        "Financial data modeling",
        "Transaction logic design",
        "System architecture",
        "Database implementation"
      ],
      url: "https://fin-tech-rose.vercel.app/"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Premium light effect for top corner */}
      <div className="corner-light-premium top-0 right-0 opacity-50"></div>
      
      {/* Light rays */}
      <div className="light-ray-premium opacity-20" style={{ top: '30%', right: '-20%', width: '70%', transform: 'rotate(165deg)' }}></div>
      <div className="light-ray-premium opacity-15" style={{ top: '60%', right: '-10%', width: '50%', transform: 'rotate(150deg)' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="section-heading-premium relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GlowCard 
                intensity={index % 3 === 0 ? 'high' : index % 2 === 0 ? 'medium' : 'low'}
                className="group h-full"
                hoverScale={1.03}
              >
                <div className="p-6 h-full flex flex-col relative z-10">
                  {/* Premium highlight effect on hover */}
                  <div className="absolute -inset-x-4 -inset-y-4 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 -z-10 blur-2xl transition-opacity"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-white via-white/20 to-transparent transition-all duration-500"></div>
                  
                  <h3 className="text-2xl font-bold italic mb-3 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-3 py-1 bg-dark-200/50 backdrop-blur-sm border border-white/5 rounded-full text-white/60 group-hover:text-white/90 group-hover:border-white/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.url} 
                    className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white group-hover:text-white/90 transition-colors relative mt-auto"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
