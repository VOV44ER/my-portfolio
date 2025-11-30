const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', href: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com' },
    { name: 'Twitter', icon: '🐦', href: 'https://twitter.com' },
    { name: 'Email', icon: '📧', href: 'mailto:hello@developer.dev' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold gradient-text font-cyber mb-4">
              {'<DEV />'}
            </div>
            <p className="text-muted-foreground font-cyber max-w-md leading-relaxed">
              Frontend Developer passionate about creating amazing digital experiences. 
              Always learning, always building, always improving.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card rounded-lg flex items-center justify-center text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-glow"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4 font-cyber">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-cyber"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4 font-cyber">
              Status
            </h3>
            <div className="space-y-2 font-cyber text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Available for work</span>
              </div>
              <div className="text-muted-foreground">
                Response time: 24hrs
              </div>
              <div className="text-muted-foreground">
                Location: Digital Realm
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="card-interactive rounded-lg p-4 bg-muted font-cyber">
            <div className="text-accent text-sm">
              $ echo "Thanks for visiting my portfolio!"
            </div>
            <div className="text-foreground text-sm mt-1">
              Thanks for visiting my portfolio!
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground font-cyber text-sm">
            © {currentYear} Frontend Developer. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;