import { useState } from 'react';
import CyberButton from './CyberButton';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hello@developer.dev',
      href: 'mailto:hello@developer.dev',
      color: 'primary'
    },
    {
      icon: '💬',
      label: 'LinkedIn',
      value: '/in/frontend-dev',
      href: 'https://linkedin.com',
      color: 'secondary'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: '@frontend-dev',
      href: 'https://github.com',
      color: 'accent'
    },
    {
      icon: '🐦',
      label: 'Twitter',
      value: '@frontend_dev',
      href: 'https://twitter.com',
      color: 'primary'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6 font-cyber">
            {'<CONTACT />'}
          </h2>
          <p className="text-xl text-muted-foreground font-cyber">
            Let's build something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 font-cyber">
                Get In Touch
              </h3>
              <p className="text-muted-foreground font-cyber leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with talented people. 
                Whether you have a project in mind, want to discuss opportunities, or just want to say hi, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="card-interactive rounded-lg p-4 flex items-center gap-4 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-2xl">{method.icon}</div>
                  <div className="flex-grow">
                    <div className={`font-medium text-${method.color} font-cyber`}>
                      {method.label}
                    </div>
                    <div className="text-muted-foreground font-cyber text-sm">
                      {method.value}
                    </div>
                  </div>
                  <div className={`text-${method.color} group-hover:translate-x-1 transition-transform`}>
                    →
                  </div>
                </a>
              ))}
            </div>

            {/* Terminal Status */}
            <div className="card-interactive rounded-lg p-6 bg-muted font-cyber">
              <div className="text-accent mb-3">$ status --availability</div>
              <div className="text-sm space-y-1">
                <div><span className="text-secondary">Current Status:</span> <span className="text-accent">Available</span></div>
                <div><span className="text-secondary">Response Time:</span> <span className="text-primary">Within 24 hours</span></div>
                <div><span className="text-secondary">Preferred Contact:</span> <span className="text-primary">Email or LinkedIn</span></div>
                <div><span className="text-secondary">Time Zone:</span> <span className="text-primary">GMT+0</span></div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-interactive rounded-lg p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-accent mb-4 font-cyber">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground font-cyber mb-6">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
                <CyberButton 
                  variant="primary" 
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </CyberButton>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-foreground font-cyber font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground font-cyber focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-cyber font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground font-cyber focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-cyber font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground font-cyber focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-cyber font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground font-cyber focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <CyberButton
                  variant="primary"
                  className={`w-full py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </CyberButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;