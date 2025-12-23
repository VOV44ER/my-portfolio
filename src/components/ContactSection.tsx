import { useState } from 'react';
import CyberButton from './CyberButton';
import { useI18n } from '@/i18n';

const ContactSection = () => {
  const { t } = useI18n();
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
      icon: '💼',
      label: 'Upwork',
      value: 'Freelancer Profile',
      href: 'https://www.upwork.com/freelancers/~01199c1e86f23068ea',
      color: 'primary'
    },
    {
      icon: '💬',
      label: 'LinkedIn',
      value: '/in/alputov-vova',
      href: 'https://www.linkedin.com/in/alputov-vova/',
      color: 'secondary'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: '@VOV44ER',
      href: 'https://github.com/VOV44ER',
      color: 'accent'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6 font-cyber">
            { t('contact.title') }
          </h2>
          <p className="text-xl text-muted-foreground font-cyber">
            { t('contact.subtitle') }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */ }
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 font-cyber">
                { t('contact.heading') }
              </h3>
              <p className="text-muted-foreground font-cyber leading-relaxed mb-8">
                { t('contact.text') }
              </p>
            </div>

            {/* Contact Methods */ }
            <div className="grid gap-4">
              { contactMethods.map((method, index) => (
                <a
                  key={ index }
                  href={ method.href }
                  className="card-interactive rounded-lg p-4 flex items-center gap-4 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-2xl">{ method.icon }</div>
                  <div className="flex-grow">
                    <div className={ `font-medium text-${method.color} font-cyber` }>
                      { method.label }
                    </div>
                    <div className="text-muted-foreground font-cyber text-sm">
                      { method.value }
                    </div>
                  </div>
                  <div className={ `text-${method.color} group-hover:translate-x-1 transition-transform` }>
                    →
                  </div>
                </a>
              )) }
            </div>

            {/* Terminal Status */ }
            <div className="card-interactive rounded-lg p-6 bg-muted font-cyber">
              <div className="text-accent mb-3">$ status --availability</div>
              <div className="text-sm space-y-1">
                <div><span className="text-secondary">{ t('contact.status.current') }</span> <span className="text-accent">{ t('contact.status.available') }</span></div>
                <div><span className="text-secondary">{ t('contact.status.response') }</span> <span className="text-primary">{ t('contact.status.response.value') }</span></div>
                <div><span className="text-secondary">{ t('contact.status.preferred') }</span> <span className="text-primary">{ t('contact.status.preferred.value') }</span></div>
                <div><span className="text-secondary">{ t('contact.status.timezone') }</span> <span className="text-primary">{ t('contact.status.timezone.value') }</span></div>
              </div>
            </div>
          </div>

          {/* Contact Form */ }
          <div className="card-interactive rounded-lg p-8">
            { submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-accent mb-4 font-cyber">
                  { t('contact.form.sent.title') }
                </h3>
                <p className="text-muted-foreground font-cyber mb-6">
                  { t('contact.form.sent.text') }
                </p>
                <CyberButton
                  variant="primary"
                  onClick={ () => setSubmitted(false) }
                >
                  { t('contact.form.sent.again') }
                </CyberButton>
              </div>
            ) : (
              <form onSubmit={ handleSubmit } className="space-y-6">
                <div>
                  <label className="block text-foreground font-cyber font-medium mb-2">
                    { t('contact.form.name') }
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={ formData.name }
                    onChange={ handleChange }
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground font-cyber focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder={ t('contact.form.placeholder.name') }
                  />
                </div>

                <div>
                  <label className="block text-foreground font-cyber font-medium mb-2">
                    { t('contact.form.email') }
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={ formData.email }
                    onChange={ handleChange }
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground font-cyber focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder={ t('contact.form.placeholder.email') }
                  />
                </div>

                <div>
                  <label className="block text-foreground font-cyber font-medium mb-2">
                    { t('contact.form.subject') }
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={ formData.subject }
                    onChange={ handleChange }
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground font-cyber focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder={ t('contact.form.placeholder.subject') }
                  />
                </div>

                <div>
                  <label className="block text-foreground font-cyber font-medium mb-2">
                    { t('contact.form.message') }
                  </label>
                  <textarea
                    name="message"
                    value={ formData.message }
                    onChange={ handleChange }
                    required
                    rows={ 6 }
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground font-cyber focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder={ t('contact.form.placeholder.message') }
                  />
                </div>

                <CyberButton
                  variant="primary"
                  className={ `w-full py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}` }
                >
                  { isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      { t('contact.form.sending') }
                    </div>
                  ) : (
                    t('contact.form.send')
                  ) }
                </CyberButton>
              </form>
            ) }
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;