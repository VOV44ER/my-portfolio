import { useState } from 'react';
import CyberButton from './CyberButton';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      category: "fullstack",
      image: "🛒",
      status: "Live",
      github: "#",
      demo: "#"
    },
    {
      title: "AI Dashboard",
      description: "Modern dashboard for AI model management with real-time metrics, data visualization, and model deployment tools.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Chart.js", "Python"],
      category: "frontend",
      image: "🤖",
      status: "In Progress",
      github: "#",
      demo: "#"
    },
    {
      title: "Crypto Tracker",
      description: "Real-time cryptocurrency tracking app with portfolio management, price alerts, and market analysis features.",
      tech: ["Vue.js", "Express", "WebSocket", "Chart.js", "Redis"],
      category: "fullstack",
      image: "₿",
      status: "Live",
      github: "#",
      demo: "#"
    },
    {
      title: "Design System",
      description: "Comprehensive design system with reusable components, theme management, and documentation for enterprise applications.",
      tech: ["React", "Storybook", "SASS", "TypeScript", "Figma"],
      category: "frontend",
      image: "🎨",
      status: "Live",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management API",
      description: "RESTful API for task management with authentication, real-time updates, and advanced filtering capabilities.",
      tech: ["Node.js", "Express", "PostgreSQL", "JWT", "Socket.io"],
      category: "backend",
      image: "📋",
      status: "Live",
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "This cyberpunk-themed portfolio website you're currently viewing! Built with modern technologies and cool animations.",
      tech: ["React", "TypeScript", "Tailwind", "Framer Motion", "Vite"],
      category: "frontend",
      image: "🚀",
      status: "Live",
      github: "#",
      demo: "#"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🌟' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'fullstack', label: 'Full Stack', icon: '⚡' },
    { id: 'backend', label: 'Backend', icon: '⚙️' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6 font-cyber">
            {'<PROJECTS />'}
          </h2>
          <p className="text-xl text-muted-foreground font-cyber">
            Some things I've built with passion and coffee
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-cyber font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-neon'
                  : 'bg-card text-card-foreground hover:bg-primary/20 border border-border'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="card-interactive rounded-lg p-6 group h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{project.image}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-cyber font-medium ${
                  project.status === 'Live' 
                    ? 'bg-accent/20 text-accent' 
                    : 'bg-secondary/20 text-secondary'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-bold text-foreground mb-3 font-cyber">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 flex-grow font-cyber text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-cyber"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3 mt-auto">
                <CyberButton 
                  variant="primary" 
                  href={project.github}
                  className="flex-1 text-center text-xs py-2"
                >
                  Code
                </CyberButton>
                <CyberButton 
                  variant="secondary" 
                  href={project.demo}
                  className="flex-1 text-center text-xs py-2"
                >
                  Live Demo
                </CyberButton>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Output */}
        <div className="mt-16 card-interactive rounded-lg p-8 bg-muted font-cyber">
          <div className="text-accent mb-4">$ git log --oneline</div>
          <div className="space-y-2 text-sm">
            <div><span className="text-secondary">a1b2c3d</span> feat: Added new project showcase</div>
            <div><span className="text-secondary">e4f5g6h</span> refactor: Improved project filtering system</div>
            <div><span className="text-secondary">i7j8k9l</span> style: Enhanced project card animations</div>
            <div><span className="text-secondary">m0n1o2p</span> docs: Updated project descriptions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;