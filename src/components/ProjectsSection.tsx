import { useState } from 'react';
import CyberButton from './CyberButton';
import { useI18n } from '@/i18n';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const ProjectsSection = () => {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: "Website Builder",
      description: "Professional drag & drop CMS builder for creating landing pages and multi‑page websites with reusable blocks, live preview, and production‑ready code export.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
      category: "frontend",
      image: "🧩",
      status: "Live",
      github: "https://github.com/VOV44ER/website-builder",
      demo: "https://website-builder-ten-delta.vercel.app/"
    },
    {
      title: "Delphos AI Music Platform",
      description: "Frontend for an AI music platform inspired by Delphos: create \"soundworlds\", generate beats and stems, and control workflows for musicians, labels and platforms in one dashboard.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", "REST APIs"],
      category: "frontend",
      image: "🎧",
      status: "Live",
      github: "",
      nda: true,
      demo: "https://www.delphos.ai/"
    },
    {
      title: "MoveShop24 – Moving Services Marketplace",
      description: "Fullstack marketplace for moving services: customers describe their relocation needs, the platform scores requests and routes them to vetted partners, who respond with tailored offers.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
      category: "fullstack",
      image: "🛒",
      status: "Live",
      github: "",
      nda: true,
      demo: "https://www.moveshop24.com/"
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
    { id: 'all', labelKey: 'projects.filter.all', icon: '🌟' },
    { id: 'frontend', labelKey: 'projects.filter.frontend', icon: '🎨' },
    { id: 'fullstack', labelKey: 'projects.filter.fullstack', icon: '⚡' },
    { id: 'backend', labelKey: 'projects.filter.backend', icon: '⚙️' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6 font-cyber">
            { t('projects.title') }
          </h2>
          <p className="text-xl text-muted-foreground font-cyber">
            { t('projects.subtitle') }
          </p>
        </div>

        {/* Category Filter */ }
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          { categories.map((category) => (
            <button
              key={ category.id }
              onClick={ () => setSelectedCategory(category.id) }
              className={ `px-6 py-3 rounded-lg font-cyber font-medium transition-all duration-300 ${selectedCategory === category.id
                ? 'bg-primary text-primary-foreground shadow-neon'
                : 'bg-card text-card-foreground hover:bg-primary/20 border border-border'
                }` }
            >
              <span className="mr-2">{ category.icon }</span>
              { t(category.labelKey) }
            </button>
          )) }
        </div>

        {/* Projects Grid */ }
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          { filteredProjects.map((project, index) => (
            <div
              key={ index }
              className="card-interactive rounded-lg p-6 group h-full flex flex-col"
              style={ { animationDelay: `${index * 0.1}s` } }
            >
              {/* Project Header */ }
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{ project.image }</div>
                <span className={ `px-3 py-1 rounded-full text-xs font-cyber font-medium ${project.status === 'Live'
                  ? 'bg-accent/20 text-accent'
                  : 'bg-secondary/20 text-secondary'
                  }` }>
                  { project.status }
                </span>
              </div>

              {/* Project Info */ }
              <h3 className="text-xl font-bold text-foreground mb-3 font-cyber">
                { project.title }
              </h3>

              <p className="text-muted-foreground mb-4 flex-grow font-cyber text-sm leading-relaxed">
                { project.description }
              </p>

              {/* Tech Stack */ }
              <div className="flex flex-wrap gap-2 mb-6">
                { project.tech.map((tech, techIndex) => (
                  <span
                    key={ techIndex }
                    className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-cyber"
                  >
                    { tech }
                  </span>
                )) }
              </div>

              {/* Project Links */ }
              <div className="flex gap-3 mt-auto">
                { project.github ? (
                  <CyberButton
                    variant="primary"
                    href={ project.github }
                    className="flex-1 text-center text-xs py-2"
                  >
                    { t('projects.btn.code') }
                  </CyberButton>
                ) : project.nda ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex-1 text-center text-xs py-2 border border-border rounded-lg font-cyber text-muted-foreground bg-muted/40 cursor-default">
                        { t('projects.badge.nda') }
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <span className="font-cyber text-xs">
                        { t('projects.badge.nda.tooltip') }
                      </span>
                    </TooltipContent>
                  </Tooltip>
                ) : null }
                <CyberButton
                  variant="secondary"
                  href={ project.demo }
                  className="flex-1 text-center text-xs py-2"
                >
                  { t('projects.btn.demo') }
                </CyberButton>
              </div>
            </div>
          )) }
        </div>

        {/* Terminal Output */ }
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