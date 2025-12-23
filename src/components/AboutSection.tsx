import { useState } from 'react';
import { useI18n } from '@/i18n';

const AboutSection = () => {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', labelKey: 'about.tab.story', icon: '📖' },
    { id: 'values', labelKey: 'about.tab.values', icon: '💎' },
    { id: 'process', labelKey: 'about.tab.process', icon: '⚡' }
  ];

  const tabContent = {
    story: {
      titleKey: 'about.story.title',
      contentKeys: [
        'about.story.1',
        'about.story.2',
        'about.story.3',
        'about.story.4',
        'about.story.5'
      ]
    },
    values: {
      titleKey: 'about.values.title',
      contentKeys: [
        'about.values.1',
        'about.values.2',
        'about.values.3',
        'about.values.4',
        'about.values.5'
      ]
    },
    process: {
      titleKey: 'about.process.title',
      contentKeys: [
        'about.process.1',
        'about.process.2',
        'about.process.3',
        'about.process.4',
        'about.process.5'
      ]
    }
  } as const;

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6 font-cyber">
            { t('about.title') }
          </h2>
          <p className="text-xl text-muted-foreground font-cyber">
            { t('about.subtitle') }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Avatar and Stats */ }
          <div className="space-y-8">
            {/* Avatar */ }
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center text-6xl relative overflow-hidden card-interactive">
                <div className="text-8xl">👨‍💻</div>
                <div className="absolute inset-0 bg-gradient-primary opacity-20 animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-foreground font-cyber mb-2">
                { t('about.role') }
              </h3>
              <p className="text-muted-foreground font-cyber">
                { t('about.since') }
              </p>
            </div>

            {/* Quick Stats */ }
            <div className="grid grid-cols-2 gap-4">
              { [
                { label: t('about.stat.years'), value: '5+', color: 'primary' },
                { label: t('about.stat.projects'), value: '100+', color: 'secondary' },
                { label: t('about.stat.repos'), value: '96', color: 'accent' },
                { label: t('about.stat.achievement'), value: '🏆 Top 3%', color: 'primary' }
              ].map((stat, index) => (
                <div key={ index } className="card-interactive rounded-lg p-4 text-center">
                  <div className={ `text-2xl font-bold text-${stat.color} mb-1` }>
                    { stat.value }
                  </div>
                  <div className="text-xs text-muted-foreground font-cyber">
                    { stat.label }
                  </div>
                </div>
              )) }
            </div>

            {/* Terminal Info */ }
            <div className="card-interactive rounded-lg p-6 bg-muted font-cyber">
              <div className="text-accent mb-3">$ whoami</div>
              <div className="text-sm space-y-1">
                <div><span className="text-secondary">Name:</span> Vova</div>
                <div><span className="text-secondary">Location:</span> Ukraine, Kyiv</div>
                <div><span className="text-secondary">Role:</span> { t('about.role') }</div>
                <div><span className="text-secondary">Status:</span> <span className="text-accent">{ t('about.whoami.status') }</span></div>
                <div><span className="text-secondary">Favorite_tech:</span> { t('about.whoami.favorite') }</div>
                <div><span className="text-secondary">Hobby:</span> { t('about.whoami.hobby') }</div>
              </div>
            </div>
          </div>

          {/* Right Column - Tabbed Content */ }
          <div className="space-y-6">
            {/* Tab Navigation */ }
            <div className="flex flex-wrap gap-2">
              { tabs.map((tab) => (
                <button
                  key={ tab.id }
                  onClick={ () => setActiveTab(tab.id) }
                  className={ `px-4 py-2 rounded-lg font-cyber font-medium transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-neon'
                    : 'bg-card text-card-foreground hover:bg-primary/20 border border-border'
                    }` }
                >
                  <span className="mr-2">{ tab.icon }</span>
                  { t(tab.labelKey) }
                </button>
              )) }
            </div>

            {/* Tab Content */ }
            <div className="card-interactive rounded-lg p-8 min-h-[400px]">
              <h3 className="text-2xl font-bold text-primary mb-6 font-cyber">
                { t(tabContent[activeTab as keyof typeof tabContent].titleKey) }
              </h3>

              <div className="space-y-4">
                { tabContent[activeTab as keyof typeof tabContent].contentKeys.map((key, index) => (
                  <div
                    key={ index }
                    className="flex items-start gap-3 text-foreground font-cyber leading-relaxed"
                    style={ { animationDelay: `${index * 0.1}s` } }
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>{ t(key) }</div>
                  </div>
                )) }
              </div>
            </div>

            {/* Code Snippet */ }
            <div className="card-interactive rounded-lg p-6 bg-muted font-cyber">
              <div className="text-accent mb-3">$ cat personality.js</div>
              <div className="text-sm">
                <div className="text-accent">const developer = { '{' }</div>
                <div className="ml-4 space-y-1">
                  <div><span className="text-secondary">name</span>: <span className="text-primary">'Vova'</span>,</div>
                  <div><span className="text-secondary">location</span>: <span className="text-primary">'Ukraine, Kyiv'</span>,</div>
                  <div><span className="text-secondary">passion</span>: <span className="text-primary">'Building modern React-Redux applications'</span>,</div>
                  <div><span className="text-secondary">mindset</span>: <span className="text-primary">'Always learning, always improving'</span>,</div>
                  <div><span className="text-secondary">github</span>: <span className="text-primary">'@VOV44ER'</span></div>
                </div>
                <div className="text-accent">{ '};' }</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;