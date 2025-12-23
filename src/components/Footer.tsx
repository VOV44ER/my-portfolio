import { useI18n } from '@/i18n';

const Footer = () => {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Upwork', icon: '💼', href: 'https://www.upwork.com/freelancers/~01199c1e86f23068ea' },
    { name: 'LinkedIn', icon: '💬', href: 'https://www.linkedin.com/in/alputov-vova/' },
    { name: 'GitHub', icon: '🐙', href: 'https://github.com/VOV44ER' }
  ];

  const quickLinks = [
    { nameKey: 'nav.about', href: '#about' },
    { nameKey: 'nav.skills', href: '#skills' },
    { nameKey: 'nav.projects', href: '#projects' },
    { nameKey: 'nav.contact', href: '#contact' }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */ }
          <div className="md:col-span-2">
            <div className="text-3xl font-bold gradient-text font-cyber mb-4">
              { '<DEV />' }
            </div>
            <p className="text-muted-foreground font-cyber max-w-md leading-relaxed">
              { t('footer.brand.text') }
            </p>
            <div className="flex gap-4 mt-6">
              { socialLinks.map((link) => (
                <a
                  key={ link.name }
                  href={ link.href }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card rounded-lg flex items-center justify-center text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-glow"
                  title={ link.name }
                >
                  { link.icon }
                </a>
              )) }
            </div>
          </div>

          {/* Quick Links */ }
          <div>
            <h3 className="text-lg font-bold text-primary mb-4 font-cyber">
              { t('footer.quickLinks') }
            </h3>
            <ul className="space-y-2">
              { quickLinks.map((link) => (
                <li key={ link.href }>
                  <a
                    href={ link.href }
                    className="text-muted-foreground hover:text-foreground transition-colors font-cyber"
                  >
                    { t(link.nameKey) }
                  </a>
                </li>
              )) }
            </ul>
          </div>

          {/* Status */ }
          <div>
            <h3 className="text-lg font-bold text-primary mb-4 font-cyber">
              { t('footer.status') }
            </h3>
            <div className="space-y-2 font-cyber text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">{ t('footer.status.available') }</span>
              </div>
              <div className="text-muted-foreground">
                { t('footer.status.response') }
              </div>
              <div className="text-muted-foreground">
                { t('footer.status.location') }
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Footer */ }
        <div className="mt-12 pt-8 border-t border-border">
          <div className="card-interactive rounded-lg p-4 bg-muted font-cyber">
            <div className="text-accent text-sm">
              { t('footer.terminal.command') }
            </div>
            <div className="text-foreground text-sm mt-1">
              { t('footer.terminal.text') }
            </div>
          </div>
        </div>

        {/* Copyright */ }
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground font-cyber text-sm">
            { t('footer.copyright').replace('{year}', currentYear.toString()) }
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;