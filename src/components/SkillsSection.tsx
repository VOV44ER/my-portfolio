import { useState } from 'react';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "Vue.js", level: 80, icon: "💚" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
        { name: "SASS/SCSS", level: 85, icon: "💄" }
      ]
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git", level: 90, icon: "🌿" },
        { name: "Webpack", level: 80, icon: "📦" },
        { name: "Vite", level: 85, icon: "⚡" },
        { name: "Figma", level: 75, icon: "🎭" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "Jest", level: 80, icon: "🧪" }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "Express", level: 75, icon: "🚂" },
        { name: "MongoDB", level: 70, icon: "🍃" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "GraphQL", level: 65, icon: "📊" },
        { name: "REST APIs", level: 85, icon: "🌐" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6 font-cyber">
            {'<SKILLS />'}
          </h2>
          <p className="text-xl text-muted-foreground font-cyber">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="card-interactive rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 font-cyber">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${index}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="flex items-center gap-3 text-foreground font-cyber">
                        <span className="text-xl">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-primary font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                          hoveredSkill === `${categoryIndex}-${index}` 
                            ? 'bg-gradient-primary shadow-neon' 
                            : 'bg-primary'
                        }`}
                        style={{ 
                          width: hoveredSkill === `${categoryIndex}-${index}` 
                            ? `${skill.level}%` 
                            : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Output */}
        <div className="mt-16 card-interactive rounded-lg p-8 bg-muted font-cyber">
          <div className="text-accent mb-4">$ cat developer_skills.json</div>
          <div className="text-foreground">
            <div className="text-accent">{'{'}</div>
            <div className="ml-4">
              <span className="text-secondary">"passion"</span>: <span className="text-primary">"Creating amazing user experiences"</span>,
            </div>
            <div className="ml-4">
              <span className="text-secondary">"focus"</span>: <span className="text-primary">"Clean, efficient, and scalable code"</span>,
            </div>
            <div className="ml-4">
              <span className="text-secondary">"motto"</span>: <span className="text-primary">"Always learning, always improving"</span>
            </div>
            <div className="text-accent">{'}'}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;