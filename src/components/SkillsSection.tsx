import { useState } from 'react';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frontend & UI",
      skills: [
        { name: "React", level: 100, icon: "⚛️" },
        { name: "Next.js", level: 100, icon: "▲" },
        { name: "TypeScript", level: 100, icon: "📘" },
        { name: "Tailwind CSS", level: 100, icon: "🎨" },
        { name: "Shadcn UI", level: 100, icon: "💠" },
        { name: "Responsive Design", level: 100, icon: "📱" }
      ]
    },
    {
      title: "Fullstack & Workflow",
      skills: [
        { name: "Node.js", level: 100, icon: "🟢" },
        { name: "Supabase", level: 100, icon: "🧬" },
        { name: "Firebase", level: 100, icon: "🔥" },
        { name: "MongoDB", level: 100, icon: "🍃" },
        { name: "REST APIs", level: 100, icon: "🌐" },
        { name: "Auth & Security", level: 100, icon: "🔐" }
      ]
    },
    {
      title: "Tools, AI & Quality",
      skills: [
        { name: "Git & GitHub", level: 100, icon: "🌿" },
        { name: "Vite", level: 100, icon: "⚡" },
        { name: "AI (ChatGPT & Co)", level: 100, icon: "🤖" },
        { name: "Performance Optimization", level: 100, icon: "🚀" },
        { name: "Problem Solving", level: 100, icon: "🧠" },
        { name: "Communication", level: 100, icon: "💬" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6 font-cyber">
            { '<SKILLS />' }
          </h2>
          <p className="text-xl text-muted-foreground font-cyber">
            Fullstack tools I use to design, build and scale modern web apps
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          { skillCategories.map((category, categoryIndex) => (
            <div
              key={ categoryIndex }
              className="card-interactive rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 font-cyber">
                { category.title }
              </h3>

              <div className="space-y-6">
                { category.skills.map((skill, index) => (
                  <div
                    key={ index }
                    className="group"
                    onMouseEnter={ () => setHoveredSkill(`${categoryIndex}-${index}`) }
                    onMouseLeave={ () => setHoveredSkill(null) }
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="flex items-center gap-3 text-foreground font-cyber">
                        <span className="text-xl">{ skill.icon }</span>
                        { skill.name }
                      </span>
                      <span className="text-primary font-bold">
                        { skill.level }%
                      </span>
                    </div>

                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={ `h-2 rounded-full transition-all duration-1000 ease-out ${hoveredSkill === `${categoryIndex}-${index}`
                            ? 'bg-gradient-primary shadow-neon'
                            : 'bg-primary'
                          }` }
                        style={ {
                          width: hoveredSkill === `${categoryIndex}-${index}`
                            ? `${skill.level}%`
                            : '0%'
                        } }
                      />
                    </div>
                  </div>
                )) }
              </div>
            </div>
          )) }
        </div>

        {/* Terminal Output */ }
        <div className="mt-16 card-interactive rounded-lg p-8 bg-muted font-cyber">
          <div className="text-accent mb-4">$ cat developer_skills.json</div>
          <div className="text-foreground">
            <div className="text-accent">{ '{' }</div>
            <div className="ml-4">
              <span className="text-secondary">"passion"</span>: <span className="text-primary">"Fullstack products that feel fast, clean and intuitive"</span>,
            </div>
            <div className="ml-4">
              <span className="text-secondary">"focus"</span>: <span className="text-primary">"React, Next.js, TypeScript, Node.js, Supabase, Firebase, MongoDB"</span>,
            </div>
            <div className="ml-4">
              <span className="text-secondary">"motto"</span>: <span className="text-primary">"Always learning, always improving"</span>
            </div>
            <div className="text-accent">{ '}' }</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;