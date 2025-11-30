import { useState } from 'react';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'My Story', icon: '📖' },
    { id: 'values', label: 'Values', icon: '💎' },
    { id: 'process', label: 'Process', icon: '⚡' }
  ];

  const tabContent = {
    story: {
      title: "From Ideas to Reality",
      content: [
        "Started my journey in 2021 with curiosity about how websites work.",
        "Fell in love with the perfect blend of creativity and logic in frontend development.",
        "Built 50+ projects, each one teaching me something new about user experience.",
        "Specialized in creating interfaces that users love and developers can maintain.",
        "Always exploring new technologies and pushing the boundaries of web development."
      ]
    },
    values: {
      title: "What Drives Me",
      content: [
        "🎯 User-First Approach: Every line of code serves the user's needs",
        "⚡ Performance Matters: Fast, efficient, and accessible experiences",
        "🧩 Clean Code: Maintainable, scalable, and well-documented solutions",
        "🚀 Continuous Learning: Staying updated with the latest technologies",
        "🤝 Collaboration: Working together creates the best results"
      ]
    },
    process: {
      title: "How I Work",
      content: [
        "🔍 Discovery: Understanding requirements and user needs",
        "🎨 Design: Creating wireframes and prototypes",
        "⚙️ Development: Writing clean, tested, and documented code",
        "🧪 Testing: Ensuring quality across all devices and browsers",
        "🚀 Deployment: Launching with proper monitoring and optimization"
      ]
    }
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6 font-cyber">
            {'<ABOUT />'}
          </h2>
          <p className="text-xl text-muted-foreground font-cyber">
            Get to know the developer behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Avatar and Stats */}
          <div className="space-y-8">
            {/* Avatar */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center text-6xl relative overflow-hidden card-interactive">
                <div className="text-8xl">👨‍💻</div>
                <div className="absolute inset-0 bg-gradient-primary opacity-20 animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-foreground font-cyber mb-2">
                Frontend Developer
              </h3>
              <p className="text-muted-foreground font-cyber">
                Crafting digital experiences since 2021
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Years Experience', value: '3+', color: 'primary' },
                { label: 'Projects Built', value: '50+', color: 'secondary' },
                { label: 'Technologies', value: '25+', color: 'accent' },
                { label: 'Client Rating', value: '5.0⭐', color: 'primary' }
              ].map((stat, index) => (
                <div key={index} className="card-interactive rounded-lg p-4 text-center">
                  <div className={`text-2xl font-bold text-${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-cyber">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal Info */}
            <div className="card-interactive rounded-lg p-6 bg-muted font-cyber">
              <div className="text-accent mb-3">$ whoami</div>
              <div className="text-sm space-y-1">
                <div><span className="text-secondary">Name:</span> Frontend Developer</div>
                <div><span className="text-secondary">Location:</span> Digital Realm</div>
                <div><span className="text-secondary">Status:</span> <span className="text-accent">Available for opportunities</span></div>
                <div><span className="text-secondary">Favorite_tech:</span> React, TypeScript, Tailwind</div>
                <div><span className="text-secondary">Hobby:</span> Building cool stuff 🚀</div>
              </div>
            </div>
          </div>

          {/* Right Column - Tabbed Content */}
          <div className="space-y-6">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-cyber font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground shadow-neon'
                      : 'bg-card text-card-foreground hover:bg-primary/20 border border-border'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="card-interactive rounded-lg p-8 min-h-[400px]">
              <h3 className="text-2xl font-bold text-primary mb-6 font-cyber">
                {tabContent[activeTab as keyof typeof tabContent].title}
              </h3>
              
              <div className="space-y-4">
                {tabContent[activeTab as keyof typeof tabContent].content.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 text-foreground font-cyber leading-relaxed"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Snippet */}
            <div className="card-interactive rounded-lg p-6 bg-muted font-cyber">
              <div className="text-accent mb-3">$ cat personality.js</div>
              <div className="text-sm">
                <div className="text-accent">const developer = {'{'}</div>
                <div className="ml-4 space-y-1">
                  <div><span className="text-secondary">passion</span>: <span className="text-primary">'Creating amazing UX'</span>,</div>
                  <div><span className="text-secondary">mindset</span>: <span className="text-primary">'Always learning'</span>,</div>
                  <div><span className="text-secondary">goal</span>: <span className="text-primary">'Build the future of web'</span></div>
                </div>
                <div className="text-accent">{'};'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;