import { useState, useEffect } from 'react';
import { useI18n } from '@/i18n';

const Navigation = () => {
  const { lang, setLang, t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', labelKey: 'nav.home' },
    { id: 'about', labelKey: 'nav.about' },
    { id: 'skills', labelKey: 'nav.skills' },
    { id: 'projects', labelKey: 'nav.projects' },
    { id: 'contact', labelKey: 'nav.contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={ `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-background/80 backdrop-blur-lg border-b border-border'
            : 'bg-transparent'
          }` }
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */ }
            <div
              className="text-2xl font-bold gradient-text font-cyber cursor-pointer"
              onClick={ () => scrollToSection('home') }
            >
              { '<DEV />' }
            </div>

            {/* Desktop Navigation */ }
            <div className="hidden md:flex items-center space-x-8">
              { navItems.map((item) => (
                <button
                  key={ item.id }
                  onClick={ () => scrollToSection(item.id) }
                  className={ `font-cyber font-medium transition-all duration-300 relative ${activeSection === item.id
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                    }` }
                >
                  { t(item.labelKey) }
                  { activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  ) }
                </button>
              )) }

              {/* Language Switcher */ }
              <div className="flex items-center gap-2 ml-4">
                <button
                  className={ `text-xs font-cyber px-2 py-1 rounded ${lang === 'en'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                    }` }
                  onClick={ () => setLang('en') }
                >
                  EN
                </button>
                <span className="text-muted-foreground">/</span>
                <button
                  className={ `text-xs font-cyber px-2 py-1 rounded ${lang === 'uk'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                    }` }
                  onClick={ () => setLang('uk') }
                >
                  UA
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */ }
            <button
              className="md:hidden text-foreground"
              onClick={ () => setIsMobileMenuOpen(!isMobileMenuOpen) }
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={ `bg-current transition-all duration-300 h-0.5 w-6 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                  }` } />
                <span className={ `bg-current transition-all duration-300 h-0.5 w-6 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }` } />
                <span className={ `bg-current transition-all duration-300 h-0.5 w-6 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                  }` } />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */ }
        <div className={ `md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-80' : 'max-h-0'
          }` }>
          <div className="bg-background/95 backdrop-blur-lg border-t border-border">
            { navItems.map((item) => (
              <button
                key={ item.id }
                onClick={ () => scrollToSection(item.id) }
                className={ `block w-full text-left px-6 py-4 font-cyber font-medium transition-colors ${activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }` }
              >
                { t(item.labelKey) }
              </button>
            )) }

            {/* Mobile Language Switcher */ }
            <div className="flex items-center gap-3 px-6 py-4 border-t border-border">
              <span className="text-xs text-muted-foreground font-cyber">Language:</span>
              <button
                className={ `text-xs font-cyber px-2 py-1 rounded ${lang === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                  }` }
                onClick={ () => setLang('en') }
              >
                EN
              </button>
              <button
                className={ `text-xs font-cyber px-2 py-1 rounded ${lang === 'uk'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                  }` }
                onClick={ () => setLang('uk') }
              >
                UA
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll Progress Bar */ }
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
        <div
          className="h-full bg-gradient-primary transition-all duration-150"
          style={ {
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
          } }
        />
      </div>
    </>
  );
};

export default Navigation;